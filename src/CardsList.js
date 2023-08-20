import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardsList = robots.map((data) => {
    return (
      <Card 
      key={data.id} 
      name={data.name} 
      email={data.email} 
      img={data.id}/>
    ) 
});

export default CardsList;