import React from "react";

export default function Button(props) {
  const { children, onClick ,className, value} = props;

  return (
    <button className={`btn btn-link ${className ? className: ' '}`} onClick={onClick} {...props}
      value={value}>
      {children} 
    </button>
  );
}
