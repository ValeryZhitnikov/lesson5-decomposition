import React from 'react';
import DescriptionElem from '../../elems/DescriptionElem/DescriptionElem';

/**
 * Компонент отдельного элемента В эфире
 */

export default function OnAirItem(props) {
  const { name, link, description } = props;

  return(
    <li><a href={link}>{name}</a> <DescriptionElem text={description}/></li>
  );
}
