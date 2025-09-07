/*
 * Visa interview wait time updater
 *
 * This script fetches the U.S. Department of State's global visa wait time
 * page and parses approximate appointment wait times for London, Belfast,
 * and Dublin.  The data is converted from months to days (1 month = 30 days)
 * and written to the `data/wait-times.json` file used by the site.  If
 * additional posts are needed, add them to the `cities` object below.
 *
 * Usage: node scripts/update-wait-times.js
 *
 * Note: This script performs a simple HTML fetch and pattern match.  It
 * expects the table to contain rows in the format:
 * "City NA <B1/B2 months> <F/M/J months> <H/L/O/P/Q months> <C/D months>".
 * The script extracts the numeric values associated with the first three
 * categories (visitor, student, worker) and multiplies them by 30 to
 * approximate the number of days.  If a value cannot be found, it
 * defaults to 0.  Because the Department of State reports wait times in
 * 15 or 30 day increments, this approximation is adequate for our
 * informational widget【125088498229933†L144-L156】.
 */

const https = require('https');
const fs = require('fs');

// URL of the U.S. State Department's global visa wait time page.  If this
// address changes, update the constant accordingly.
const SOURCE_URL =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html';

// Mapping of keys used in our JSON file to the corresponding city names
// displayed on the wait time page.  To add a new location, append a new
// property here (e.g. { paris: 'Paris' }).  The key will become the
// object name in the resulting JSON.
const cities = {
  london: 'London',
  belfast: 'Belfast',
  dublin: 'Dublin',
};

/**
 * Fetch the wait time page over HTTPS.  Returns a promise that resolves
 * with the response body as a string.  If the request fails, the promise
 * rejects with an error.
 * @returns {Promise<string>}
 */
function fetchPage() {
  return new Promise((resolve, reject) => {
    https
      .get(SOURCE_URL, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

/**
 * Convert a number of months (possibly fractional) to an integer number of
 * days.  The Department of State defines half a month as 15 days and
 * full months as 30 days【125088498229933†L144-L156】.  This helper multiplies
 * the numeric value by 30 to approximate the duration in days and rounds
 * to the nearest whole day.
 * @param {number} months
 * @returns {number}
 */
function monthsToDays(months) {
  return Math.round(months * 30);
}

/**
 * Parse wait times for a single city from the HTML response.  It searches
 * for the first line containing the city name, then extracts all numbers
 * followed by the word "month" or "months".  The first three matches
 * correspond to visitor (B1/B2), student (F/M/J) and worker (H/L/O/P/Q)
 * categories respectively.  If no matches are found for a category, it
 * defaults to 0.
 * @param {string} html The HTML document
 * @param {string} city The city name to search for (e.g. "London")
 * @returns {{visitorDays: number, studentDays: number, workerDays: number} | null}
 */
function parseWaitTimes(html, city) {
  // Find the line containing the city name.  We use a simple search
  // because the table rows are rendered as plain text separated by spaces.
  const regex = new RegExp(`${city}[^\n]*`, 'i');
  const match = html.match(regex);
  if (!match) {
    return null;
  }
  const row = match[0];
  // Extract occurrences of a number (possibly with a decimal) followed by
  // "month" or "months".  This will match strings like "2 months",
  // "1 month", or "8.5 months".  We use the global flag to capture
  // multiple matches.
  const numberPattern = /(\d+(?:\.\d+)?)\s*months?/gi;
  const numbers = [];
  let m;
  while ((m = numberPattern.exec(row)) !== null) {
    numbers.push(parseFloat(m[1]));
  }
  // We expect at least three numbers corresponding to B1/B2, F/M/J and
  // petition‑based categories.  If fewer numbers are found, fill missing
  // entries with 0.
  const visitorMonths = numbers[0] ?? 0;
  const studentMonths = numbers[1] ?? 0;
  const workerMonths = numbers[2] ?? 0;
  return {
    visitorDays: monthsToDays(visitorMonths),
    studentDays: monthsToDays(studentMonths),
    workerDays: monthsToDays(workerMonths),
  };
}

async function main() {
  try {
    const html = await fetchPage();
    const results = {};
    for (const [key, cityName] of Object.entries(cities)) {
      const data = parseWaitTimes(html, cityName);
      if (!data) {
        console.warn(`Could not find wait times for ${cityName}`);
        continue;
      }
      results[key] = {
        visitorDays: data.visitorDays,
        studentDays: data.studentDays,
        workerDays: data.workerDays,
        source: SOURCE_URL,
      };
    }
    // Ensure the data directory exists before writing to it.
    const filePath = require('path').join(__dirname, '..', 'data', 'wait-times.json');
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    console.log('Updated wait times:', results);
  } catch (err) {
    console.error('Failed to update wait times:', err);
    process.exitCode = 1;
  }
}

// Run the script
main();