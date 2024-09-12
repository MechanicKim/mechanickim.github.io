import React, { useEffect } from 'react';

import Article from './Article';
import Paragraph from './Paragraph';

import articles from './propOfMoney/articles';

function Articles() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const article = document.querySelector(hash);
      if (article && article instanceof HTMLElement) {
        const container = document.getElementById('article-contianer');
        if (container && container instanceof HTMLElement) {
          container.scrollTo({ top: article.offsetTop, behavior: 'smooth' });
        }
      }
    }
  }, []);

  return articles.map(({ id, title, detail }) => (
    <Article key={id} id={id} title={title}>
      <>
        {detail.map((content, index) => (
          <Paragraph key={`${id}-${index}`}>
            {content}
          </Paragraph>
        ))}
      </>
    </Article>
  ));
}

export default Articles;
