import React from 'react';
import './List.css';

const List = ({text}) => {
  return (
    <div className={'list_item'}>
      <p>{text}</p>
    </div>
  );
};

export default List;
