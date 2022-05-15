import React from 'react';
import Widget from '../Widget/Widget';
import FavoriteItem from './FavoriteItem/FavoriteItem';

/**
 * Компонент блока посещаемое
 */

export default function Favorite() {

  return(
    <Widget title="Посещаемое" widthClass="col-4">
      <ul>
        <FavoriteItem name="Недвижимость" link="#" description="о сталинках" />
        <FavoriteItem name="Маркет" link="#" description="люстры и светильники" />
      </ul>
    </Widget>
  );
}
