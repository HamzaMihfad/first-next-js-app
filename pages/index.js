import React , {Component}from 'react';

const List = ({items})=> (
  <ul>
  {items.map((item)=>(
    <li>{item}</li>
  ))}
  </ul>
)

const ItemsList = ()=><List items={['hello 1','hello 2','hello 3','hello 4']}></List>

export default ItemsList;