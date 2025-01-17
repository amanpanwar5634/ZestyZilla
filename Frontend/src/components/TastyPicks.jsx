import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "./item.json";
import Card from "../subComponents/Card";
export default function TastyPicks(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (<>
        <div className="max-w-screeen-2xl container mx-auto md:px-20 px-4 mt-12">
        <div className="items-center">
            <div>
  <h1 className="font-bold text-black-500 text-3xl md:pb-3">Delicious Meals Delivered Free</h1>
  </div>
  <p>
    Craving something tasty? Discover our exclusive menu of free delivery meals crafted by top chefs.
    From gourmet dishes to comfort food, we ensure every bite is a delight. 
    Enjoy fresh and flavorful meals delivered right to your doorstep at no extra cost!
  </p>
</div>
          <Slider {...settings}>
            {list.map((el,index)=>(<Card key={index} item={el}/>))}
          </Slider>
        </div>
        </>);
}