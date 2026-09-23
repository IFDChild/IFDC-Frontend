export const formatNewsDate = (value) => {
  if (!value) return '';
  // The API stores naive UTC timestamps.
  const date = new Date(/[zZ]|[+-]\d\d:\d\d$/.test(value) ? value : `${value}Z`);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

/** Summary if provided, otherwise the opening of the article body. */
export const newsExcerpt = (article, length = 180) => {
  if (article.summary) return article.summary;
  const text = (article.content || '').replace(/\s+/g, ' ').trim();
  return text.length > length ? `${text.slice(0, length).replace(/\s+\S*$/, '')}…` : text;
};

/** Article body as paragraphs: blank lines split paragraphs, single newlines are kept. */
export const newsParagraphs = (content) =>
  (content || '')
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

export const readingTime = (content) =>
  Math.max(1, Math.round(plainText(content).split(' ').filter(Boolean).length / 200));

/** Plain text of stored content, whether it is HTML (imported posts) or plain text (admin editor). */
export const plainText = (content) =>
  (content || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#?\w+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const isHtmlContent = (content) =>
  /^\s*<(p|h[1-6]|figure|ul|ol|blockquote|div|strong|em|b|i|a|img|br)[\s/>]/i.test(content || '');

export const initialsOf = (name) =>
  (name || 'IFDC')
    .replace(/^(Dr|Prof|Mr|Mrs|Ms)\.\s+/i, '')
    .split(/[\s.]+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(-2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

/** A short, clean summary for search results and link previews (~155 characters). */
export const metaDescription = (summary, content) => {
  const text = plainText(summary || '').trim() || plainText(content || '').trim();
  if (!text) return '';
  if (text.length <= 155) return text;

  const cut = text.slice(0, 155);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\s]+$/, '')}…`;
};
