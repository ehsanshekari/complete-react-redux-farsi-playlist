import React from "react";

const List = ({ items }) => {
  if (!items) return null;

  if (!items.length) {
    return (
      <div className="alert alert-warning text-center" role="alert">
        No item to display!
      </div>
    );
  }

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
