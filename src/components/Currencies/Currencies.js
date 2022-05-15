import React from 'react';
import CurrenciesItem from './CurrenciesItem/CurrenciesItem';

/**
 * Компонент блока курса валют
 */

export default function Currencies() {

  return(
    <div className="currencies">
      <ul className="currincies-list row">
        <CurrenciesItem name="USD" value="65" different="+1.3"/>
        <CurrenciesItem name="EUR" value="70" different="+2.3"/>
        <CurrenciesItem name="GBR" value="100" different="+1.6"/>
      </ul>
    </div>
  );
}
