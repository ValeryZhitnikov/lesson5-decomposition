import React from 'react';
import Widget from '../Widget/Widget';
import OnAirItem from './OnAirItem/OnAirItem';

/**
 * Компонент блока эфира
 */

export default function OnAir() {

  return(
    <Widget title="Эфир" widthClass="col-4">
      <ul>
        <OnAirItem name="Управление как искусство" link="#" description="Успех" />
        <OnAirItem name="Ночь. Мир в это время" link="#" description="earthTV" />
        <OnAirItem name="Андрей Вознесенкский" link="#" description="Загадки и тайны" />
      </ul>
    </Widget>
  );
}
