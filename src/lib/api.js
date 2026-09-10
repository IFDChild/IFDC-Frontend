const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

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
