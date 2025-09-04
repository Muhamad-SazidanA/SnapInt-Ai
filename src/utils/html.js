// small HTML normalization helpers for rendering rich content saved from Quill
export function normalizeContentHTML(html = '') {
  if (!html || typeof html !== 'string') return html;
  try {
    // Fast path: unwrap <li><p>...</p></li> -> <li>...</li>
    let normalized = html.replace(/<li>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi, '<li>$1</li>');

    // If running in browser, use DOMParser to safely unwrap <p> inside <li> without changing list types
    if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(normalized, 'text/html');

      const liNodes = Array.from(doc.querySelectorAll('li'));
      liNodes.forEach((li) => {
        if (li.childNodes.length === 1 && li.firstElementChild && li.firstElementChild.tagName === 'P') {
          li.innerHTML = li.firstElementChild.innerHTML;
        }
      });

      return doc.body.innerHTML;
    }

    return normalized;
  } catch (e) {
    return html;
  }
}

// Normalization to run before saving content to server.
// - Unwrap <li><p>...</p></li> -> <li>...</li>
// - Convert <ol> -> <ul> when list items clearly are not numbered (heuristic)
export function normalizeForSave(html = '') {
  if (!html || typeof html !== 'string') return html;
  try {
    // unwrap li>p first
    let normalized = html.replace(/<li>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi, '<li>$1</li>');

    if (typeof window !== 'undefined' && typeof DOMParser !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(normalized, 'text/html');

      // unwrap sole <p> in li
      const liNodes = Array.from(doc.querySelectorAll('li'));
      liNodes.forEach((li) => {
        if (li.childNodes.length === 1 && li.firstElementChild && li.firstElementChild.tagName === 'P') {
          li.innerHTML = li.firstElementChild.innerHTML;
        }
      });

      // convert ol -> ul when items don't look numbered
      // Do NOT change list types. The admin's choice of <ol> vs <ul> must be preserved.
      // Earlier heuristics that converted <ol>-><ul> caused unwanted flips. Keep lists as-is.

      return doc.body.innerHTML;
    }

    // fallback: return the normalized HTML without changing list tags
    return normalized;
  } catch (e) {
    return html;
  }
}
