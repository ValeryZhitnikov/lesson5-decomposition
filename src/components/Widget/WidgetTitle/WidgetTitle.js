import React from 'react';

/**
 * Компонент заголовка виджета
 */

export default function WidgetTitle(props) {
  const { title } = props;

  return(
    <h2>{title}</h2>
  );
}
