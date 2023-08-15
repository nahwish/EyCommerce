import React,{useContext} from "react";
import {FilterProductContext} from "../../Context/filterProductContext"
import Card from "../Card";

const CardHomeView = () => {

const { filteredItems } = useContext(FilterProductContext);  

  if (filteredItems?.length > 0) {
    return filteredItems?.map(
      ({ category, images, title, price, id }, index) => (
        <Card
          category={category}
          images={images}
          title={title}
          key={index}
          price={price}
          id={id}
        />
      )
    );
  } else {
    return <div>No existe</div>;
  }
};
export default CardHomeView;