import React from "react";
import Card from "./Card";

const classNames = [`card`];

function CardFactory({ dataList }) {
  return (
    <>
      {dataList?.map((item) => (
        <Card key={item.id} data={item} classNames={classNames} />
      ))}
    </>
  );
}

export default CardFactory;
