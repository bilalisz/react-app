import React from "react";
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <ul className="list-group mt-5 shadow text-center">
      <li className="list-group-item bg-secondary text-white font-weight-bold display-5">
        <strong> Genres</strong>
      </li>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
