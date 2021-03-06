import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {props.productList.map((product) => (
          <Item
            product={product}
            key={product.id}
            setProductId={props.setProductId}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
