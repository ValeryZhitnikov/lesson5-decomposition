import React from 'react';
import DescriptionElem from '../../elems/DescriptionElem/DescriptionElem';

/**
 * Компонент отдельного элемента телепрограммы
 */

export default function TVItem(props) {
  const { time, name, chanel } = props;

  return(
    <li>{time} {name} <DescriptionElem text={chanel}/></li>
  );
}
