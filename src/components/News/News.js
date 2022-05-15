import React from 'react';
import Widget from '../Widget/Widget';
import NewsItem from './NewsItem/NewsItem';

/**
 * Компонент блока новостей
 */

export default function News() {

  return(
    <Widget title="Новости">
      <ul className="news-list">
        <NewsItem link="#" text="Новость 1"/>
        <NewsItem link="#" text="Новость 2"/>
        <NewsItem link="#" text="Новость 3"/>
      </ul>
    </Widget>
  );
}
