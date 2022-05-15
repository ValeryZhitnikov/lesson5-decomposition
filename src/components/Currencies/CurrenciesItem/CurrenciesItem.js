import React from 'react';
import DescriptionElem from '../../elems/DescriptionElem/DescriptionElem';

/**
 * Компонент отдельной валюты
 */

export default function CurrenciesItem(props) {
  const { name, value, different } = props;

  return(
    <li>{name} {value} <DescriptionElem text={different}/></li>
  );
}
