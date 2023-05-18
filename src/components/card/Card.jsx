import React from 'react';
import "./card.css"
import Image from "../image/Image";
import CardTitle from '../card-title/CardTitle';
import CardBody from '../card-body/CardBody';
import CardInformation from '../card-information/CardInformation';
import CardFooter from '../card-footer/CardFooter';

const card = () => {
  return (
  <article className='card'>
        <Image />
        <CardTitle>Equiliberium#3429</CardTitle>
        <CardBody >Our Equilibrium collection promotes balance and calm</CardBody>
        <CardInformation ></CardInformation>
        <hr/>
        <CardFooter ><span className='spanfooter'>Creation of</span> Jule Wyvern</CardFooter>
        
    </article>
  )
    
  
    
};

export default card;