import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { fileUrl } from '../lib/api';
import { isHtmlContent, newsParagraphs } from '../lib/news';
import ArticleGallery from './ArticleGallery';

const ALLOWED_TAGS = ['p', 'h2', 'h3', 'h4', 'strong', 'em', 'b', 'i', 'a', 'ul', 'ol', 'li', 'blockquote', 'figure', 'figcaption', 'img', 'br'];
const ALLOWED_ATTR = ['href', 'target', 'rel', 'src', 'alt', 'loading'];

// Every link opens safely in a new tab.
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

const PROSE = [
  'text-body-lg leading-[1.85] text-on-surface',
  '[&_p]:mb-6',
  '[&_h2]:font-headline-md [&_h2]:text-[1.6rem] [&_h2]:text-deep-navy [&_h2]:mt-10 [&_h2]:mb-4',
  '[&_h3]:font-headline-md [&_h3]:text-[1.35rem] [&_h3]:text-deep-navy [&_h3]:mt-10 [&_h3]:mb-3',
  '[&_h4]:font-bold [&_h4]:text-deep-navy [&_h4]:mt-8 [&_h4]:mb-2',
  '[&_strong]:font-bold [&_strong]:text-deep-navy',
  '[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-deep-navy',
  '[&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:mb-6 [&_ol]:mb-6 [&_li]:mb-2',
  '[&_blockquote]:border-l-4 [&_blockquote]:border-safety-yellow [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:my-8'
].join(' ');

/** An element that is only a picture: <figure><img/>(caption)</figure> or <p><img/></p>. */
const imageFrom = (node) => {
  if (node.nodeType !== 1) return null;
  const tag = node.tagName;
  if (tag !== 'FIGURE' && tag !== 'P') return null;

  const imgs = node.querySelectorAll('img');
  if (imgs.length !== 1) return null;

  const caption = tag === 'FIGURE' ? node.querySelector('figcaption')?.textContent.trim() || '' : '';
  const otherText = node.textContent.replace(caption, '').trim();
  if (otherText) return null;

  const src = imgs[0].getAttribute('src') || '';
  return {
    src: src.startsWith('/uploads/') ? fileUrl(src) : src,
    alt: imgs[0].getAttribute('alt') || caption,
    caption
  };
};

/** Split sanitised HTML into text chunks and runs of consecutive images. */
const toBlocks = (html) => {
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  const root = doc.body.firstElementChild;
  const blocks = [];
  let text = '';
  let gallery = [];

  const flushText = () => {
    if (text.trim()) blocks.push({ type: 'html', html: text });
    text = '';
  };
  const flushGallery = () => {
    if (gallery.length) blocks.push({ type: 'gallery', images: gallery });
    gallery = [];
  };

  root.childNodes.forEach((node) => {
    const image = imageFrom(node);
    if (image) {
      flushText();
      gallery.push(image);
      return;
    }
    if (node.nodeType === 3 && !node.textContent.trim()) return; // whitespace between blocks
    flushGallery();
    text += node.nodeType === 1 ? node.outerHTML : node.textContent;
  });

  flushText();
  flushGallery();
  return blocks;
};

/**
 * Article body. Imported posts are stored as HTML (sanitised again here);
 * posts written in the admin editor are plain text split on blank lines.
 * Consecutive images are shown as an adaptive photo gallery.
 */
export default function RichContent({ content }) {
  const blocks = useMemo(() => {
    if (!isHtmlContent(content)) return null;
    const clean = DOMPurify.sanitize(content, { ALLOWED_TAGS, ALLOWED_ATTR });
    return toBlocks(clean);
  }, [content]);

  if (blocks !== null) {
    return (
      <div className={PROSE}>
        {blocks.map((block, index) =>
          block.type === 'gallery'
            ? <ArticleGallery key={`gallery-${index}`} images={block.images} />
            : <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: block.html }} />
        )}
      </div>
    );
  }

  return (
    <div className={PROSE}>
      {newsParagraphs(content).map((paragraph, index) => (
        <p key={index} className="whitespace-pre-line">{paragraph}</p>
      ))}
    </div>
  );
}
