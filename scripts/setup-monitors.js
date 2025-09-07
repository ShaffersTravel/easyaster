/*
 * UptimeRobot monitor setup script
 *
 * This Node.js script creates basic HTTP monitors for the EasyASTA site using the
 * UptimeRobot API. It reads the `UPTIMEROBOT_API_KEY` and
 * `NEXT_PUBLIC_SITE_URL` environment variables to configure the monitors.
 *
 * Usage: node scripts/setup-monitors.js
 *
 * The script creates monitors for the root URL and the `/start` page.  If
 * monitors already exist, UptimeRobot will return an error and the script
 * continues.  Run this script whenever you deploy to a new domain or want
 * to ensure monitors exist.  Note: Your API key must have the ability to
 * create monitors.
 */

const https = require('https');
const querystring = require('querystring');

const apiKey = process.env.UPTIMEROBOT_API_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!apiKey || !siteUrl) {
  console.error(
    'Missing environment variables: UPTIMEROBOT_API_KEY and NEXT_PUBLIC_SITE_URL are required.\n' +
      'Set these in your environment or .env.local file before running this script.'
  );
  process.exit(1);
}

const monitors = [
  { name: 'EasyASTA Root', url: `https://${siteUrl}` },
  { name: 'EasyASTA Start', url: `https://${siteUrl}/start` },
];

function createMonitor(monitor) {
  const postData = querystring.stringify({
    api_key: apiKey,
    format: 'json',
    type: '1',
    friendly_name: monitor.name,
    url: monitor.url,
  });
  const options = {
    hostname: 'api.uptimerobot.com',
    path: '/v2/newMonitor',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
    },
  };
  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.stat === 'ok') {
            console.log(`Created monitor: ${monitor.name}`);
          } else {
            console.log(`Monitor for ${monitor.name} not created:`, parsed);
          }
        } catch (err) {
          console.error(`Error parsing response for ${monitor.name}:`, data);
        }
        resolve();
      });
    });
    req.on('error', (err) => {
      console.error(`Error creating monitor for ${monitor.name}:`, err);
      resolve();
    });
    req.write(postData);
    req.end();
  });
}

async function main() {
  for (const monitor of monitors) {
    await createMonitor(monitor);
  }
}

main().catch((err) => {
  console.error('Unexpected error creating monitors:', err);
});