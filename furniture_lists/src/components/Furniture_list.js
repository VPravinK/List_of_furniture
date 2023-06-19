import { useState } from "react";
import React from "react";
import"./Furniture_list.css";
const Furniture = (props)=> {
  const month = props.date.toLocaleString('en-IN', { month: 'short' });
  const day = props.date.toLocaleString('en-US', {day:'2-digit' });
  const year = props.date.getFullYear('en-IN');

// const [item, setItem]=useState(props.name)
return (
    <div className="item_box">
            <div className="item_lists">
            <div className="date">{month}<div>{day}</div><div>{year}</div></div>
            <div className="title">{props.name}</div>
            <div className="rate">Rs.{props.amount}</div>
            </div>
    </div>
);
}
export default Furniture;