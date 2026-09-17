const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

/** Absolute URL for a file stored on the API (e.g. /uploads/xyz.pdf). */
export const fileUrl = (path) =>
  !path ? '' : /^https?:\/\//.test(path) ? path : `${API_URL}${path}`;

/**
 * FastAPI returns errors as { detail: "message" } for HTTPException
 * and { detail: [{ loc, msg }, ...] } for validation failures.
 */
async function readError(response, fallback) {
  let payload;

  try {
    payload = await response.json();
  } catch {
    return fallback;
  }

  const detail = payload?.detail;

  if (typeof detail === 'string') {
    return detail;
  }

  if (Array.isArray(detail) && detail.length > 0) {
    return detail
      .map(item => {
        const field = Array.isArray(item.loc) ? item.loc[item.loc.length - 1] : null;
        return field ? `${field}: ${item.msg}` : item.msg;
      })
      .join('\n');
  }

  return fallback;
}

export async function uploadDocument(file) {
  const body = new FormData();
  body.append('file', file);

  const response = await fetch(`${API_URL}/api/uploads/document`, {
    method: 'POST',
    body
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not upload your CV.'));
  }

  const data = await response.json();
  return data.url;
}

export async function submitVolunteerApplication(payload) {
  const response = await fetch(`${API_URL}/api/volunteers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not submit your application.'));
  }

  return response.json();
}

export async function submitPartnerInquiry(payload) {
  const response = await fetch(`${API_URL}/api/partners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not submit your inquiry.'));
  }

  return response.json();
}

export async function submitContactMessage(payload) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not send your message.'));
  }

  return response.json();
}

export async function getResources() {
  const response = await fetch(`${API_URL}/api/resources`);

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not load resources.'));
  }

  return response.json();
}

export function registerResourceDownload(id) {
  // Fire-and-forget: a failed count must never block the download.
  fetch(`${API_URL}/api/resources/${id}/download`, { method: 'POST' }).catch(() => {});
}

/** Published news, newest first. */
export async function getNews({ limit } = {}) {
  const response = await fetch(`${API_URL}/api/news`);

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not load news.'));
  }

  const items = await response.json();
  return typeof limit === 'number' ? items.slice(0, limit) : items;
}

/** A single published article by its URL slug. Resolves to null if not found. */
export async function getNewsArticle(slug) {
  const response = await fetch(`${API_URL}/api/news/slug/${encodeURIComponent(slug)}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not load this article.'));
  }

  return response.json();
}

/** Published blog posts, newest first. */
export async function getBlogs({ limit } = {}) {
  const response = await fetch(`${API_URL}/api/blogs`);

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not load blog posts.'));
  }

  const items = await response.json();
  return typeof limit === 'number' ? items.slice(0, limit) : items;
}

/** A single published blog post by slug. Resolves to null if not found. */
export async function getBlogPost(slug) {
  const response = await fetch(`${API_URL}/api/blogs/slug/${encodeURIComponent(slug)}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(await readError(response, 'Could not load this blog post.'));
  }

  return response.json();
}

/** "Willing to donate" sign-up. `website` is a honeypot and must stay empty. */
export async function submitDonationInterest({ email, website = '' }) {
  const response = await fetch(`${API_URL}/api/donations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, website })
  });

  if (!response.ok) {
    throw new Error(await readError(response, 'Something went wrong. Please try again.'));
  }

  return response.json();
}
