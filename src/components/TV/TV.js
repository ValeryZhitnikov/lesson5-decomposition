import React from 'react';
import Widget from '../Widget/Widget';
import TVItem from './TVItem/TVItem';

/**
 * Компонент блока телепрограмма
 */

export default function TV() {

  return(
    <Widget title="Телепрограмма" widthClass="col-4">
      <ul>
        <TVItem time="21:00" name="Кино в 21:00 на СТС" chanel="СТС" />
        <TVItem time="19:00" name="Мультфильмы" chanel="Первый" />
        <TVItem time="20:00" name="Футбол" chanel="Матч ТВ" />
      </ul>
    </Widget>
  );
}
