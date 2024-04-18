import React from "react";
import { useState } from "react";
export const ItemCount = () => {

    const [cantItem, setCantItems]=useState(0)
    
const handlleadd = () => {
    setCantItems(cantItem + 1)
    console.log('click +', cantItem)

}
const handlleSubs = () => {
    setCantItems(cantItem - 1)
    console.log('click +', cantItem)
}

  return (
    <>
      <div>ItemCount</div>
      <button onClick={handlleadd}> + </button>
      <span> {cantItem} </span>
      <button onClick={handlleSubs}> - </button>
    </>
  );
};
