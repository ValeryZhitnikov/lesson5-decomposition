import React from 'react';
import WidgetTitle from '../Widget/WidgetTitle/WidgetTitle';

/**
 * Компонент блока Работа над ошибками
 */

export default function School(props) {

  return(
    <div className="school-block col-3">
      <img src="..." alt="..." />  
      <WidgetTitle title="Работа над ошибками" />
      {props.children}
    </div>
  );
}
