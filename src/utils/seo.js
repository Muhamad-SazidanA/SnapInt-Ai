// Small SEO helper to upsert meta tags and JSON-LD
function slugify(text) {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function upsertMeta(selector, attrName, attrValue, content) {
  try {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      if (attrName === 'name') el.setAttribute('name', attrValue);
      else el.setAttribute('property', attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content || '');
  } catch {
    // ignore
  }
}

function upsertLinkRel(rel, href) {
  try {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href || '');
  } catch {}
}

function upsertTitle(text) {
  try {
    document.title = text || document.title;
  } catch {}
}

function removeExistingJsonLd(id) {
  try {
    const el = document.getElementById(id);
    if (el) el.remove();
  } catch {}
}

export function setSEOMeta({ title, description, keywords, canonical, url, image, siteName = 'Manusia.AI', publishedTime, modifiedTime, logoPath }) {
  try {
    upsertTitle(title);

    if (description) upsertMeta('meta[name="description"]', 'name', 'description', description);
    if (keywords) upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    upsertMeta('meta[name="viewport"]', 'name', 'viewport', 'width=device-width, initial-scale=1.0');
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');

    if (canonical) upsertLinkRel('canonical', canonical);

    // Open Graph
    if (title) upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    if (description) upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'article');
    if (url) upsertMeta('meta[property="og:url"]', 'property', 'og:url', url);
    if (image) upsertMeta('meta[property="og:image"]', 'property', 'og:image', image);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);

    // JSON-LD
    const jsonId = 'json-ld-article';
    removeExistingJsonLd(jsonId);
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title || '',
      description: description || '',
      image: image || '',
      author: { '@type': 'Person', name: 'Manusia.AI' },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: { '@type': 'ImageObject', url: logoPath ? `https://www.manusia.ai/${logoPath}` : 'https://www.manusia.ai/LogoUtama-Manusia.Ai.svg' },
      },
      datePublished: publishedTime || '',
      dateModified: modifiedTime || '',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = jsonId;
    script.innerHTML = JSON.stringify(ld);
    document.head.appendChild(script);
  } catch {
    // ignore
  }
}

export function makeSlug(text) {
  return slugify(text);
}
