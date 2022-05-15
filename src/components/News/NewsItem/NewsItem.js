import React from 'react';

/**
 * Компонент отдельной новости
 */

export default function NewsItem(props) {
  const { icon, link, text } = props;

  return(
    <li>{icon && <img src={icon} alt={text} />} <a href={link}>{text}</a></li>
  );
}
