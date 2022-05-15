import React from 'react';

/**
 * Компонент отдельной ссылки Посещаемое
 */

export default function FavoriteItem(props) {
  const { name, link, description } = props;

  return(
    <li><a href={link}><strong>{name}</strong> - {description}</a></li>
  );
}
