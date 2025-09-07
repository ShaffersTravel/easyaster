import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import { URLSearchParams } from 'url';

// Path to the JSON file used to persist submissions. We use process.cwd()
// so that the path resolves correctly whether running locally or in a
// serverless environment. The file will be created if it does not exist.
const DATA_DIR = `${process.cwd()}/data`;
const DATA_PATH = `${DATA_DIR}/submissions.json`;

async function readSubmissions(): Promise<any[]> {
  try {
    const content = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

/**
 * Handle POST requests to record a new lead submission. Accepts a JSON body
 * containing a name and email. Returns { ok: true } on success.
 */
export async function POST(req: Request) {
  try {
    const { name, email, token } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }
    // Verify the hCaptcha token.  If the secret key is not configured
    // we skip verification (useful in development).  Otherwise, call
    // the hCaptcha siteverify endpoint with a POST request and URL‑encoded body.
    const secret = process.env.HCAPTCHA_SECRET_KEY;
    if (secret) {
      if (!token) {
        return NextResponse.json({ error: 'Captcha token missing' }, { status: 400 });
      }
      const params = new URLSearchParams();
      params.append('secret', secret);
      params.append('response', token);
      try {
        const verifyRes = await fetch('https://api.hcaptcha.com/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
        }
      } catch (err) {
        console.error('Captcha verification error', err);
        return NextResponse.json({ error: 'Captcha verification error' }, { status: 500 });
      }
    }
    const submissions = await readSubmissions();
    submissions.push({ name, email, timestamp: new Date().toISOString() });
    // Ensure directory exists before writing
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(submissions, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

/**
 * Handle GET requests to return all submissions. Requires the client to
 * send an Authorization header equal to the ADMIN_PASSWORD environment
 * variable. If the password is missing or incorrect the request is
 * rejected.
 */
export async function GET(req: Request) {
  const auth = req.headers.get('authorization') || '';
  if (auth !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const submissions = await readSubmissions();
  return NextResponse.json(submissions);
}

/**
 * Handle DELETE requests to purge all stored submissions. Requires
 * authorization just like the GET handler.
 */
export async function DELETE(req: Request) {
  const auth = req.headers.get('authorization') || '';
  if (auth !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify([], null, 2));
  return NextResponse.json({ ok: true });
}