import React from 'react';

/**
 * Элемент описания ссылки / дополнения к ссылке
 */

export default function DescriptionElem(props) {
  const { text } = props;

  return(
    <span className="description-elem">{text}</span>
  );
}
