import React from 'react';
import WidgetTitle from './WidgetTitle/WidgetTitle';

/**
 * Компонент отдельного виджета
 */

export default function Widget(props) {
  const { title, widthClass } = props;

  return(
    <div className={`widget ${widthClass}`}>
      <WidgetTitle title={title} />
      {props.children}
    </div>
  );
}
