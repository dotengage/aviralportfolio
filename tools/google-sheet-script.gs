/**
 * Portfolio contact form → Google Sheet
 *
 * SETUP (once, ~3 minutes)
 * 1. Create a new Google Sheet (e.g. "Portfolio enquiries").
 * 2. In the sheet: Extensions → Apps Script. Delete what's there, paste this whole file, click Save.
 * 3. Deploy → New deployment → gear icon → "Web app".
 *      Description: Portfolio form
 *      Execute as:  Me
 *      Who has access: Anyone        ← needed so the website can send rows (nobody can read the sheet)
 *    Click Deploy, then Authorize access and allow it for your Google account.
 * 4. Copy the "Web app" URL (ends in /exec).
 * 5. Dashboard (app.pagescms.org) → Contact form → "Google Sheet link" → paste → Save.
 *
 * Each enquiry becomes a row in the "Responses" tab (created automatically).
 * If you edit this script later: Deploy → Manage deployments → edit → Version: New version → Deploy
 * (the URL stays the same).
 */

const SHEET_NAME = 'Responses';
const HEADERS = ['Submitted at', 'Name', 'Email', 'Brand / company', 'What they need', 'Message', 'Page'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const p = (e && e.parameter) || {};
    // hidden spam-trap field: real visitors never fill it
    if (p.botcheck && p.botcheck !== 'false') return json({ ok: true });

    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      clean(p.name),
      clean(p.email),
      clean(p.company),
      clean(p.services),
      clean(p.message),
      clean(p.page),
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Visiting the URL in a browser just confirms it's live. */
function doGet() {
  return json({ ok: true, message: 'Portfolio form endpoint is live.' });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

/** Trim, cap length, and stop text like "=HYPERLINK(...)" from running as a formula. */
function clean(value) {
  let s = String(value == null ? '' : value).trim().slice(0, 5000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
