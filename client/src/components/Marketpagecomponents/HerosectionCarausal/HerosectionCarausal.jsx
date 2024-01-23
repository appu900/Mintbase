import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg",
    description: "Nft illstarator",
  },
  {
    url: "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136786.jpg?size=626&ext=jpg",
    description: "Data Concept",
  },
  {
    url: "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136883.jpg?size=626&ext=jpg",
    description: "",
  },
  {
    url: "https://img.freepik.com/free-photo/super-cute-boys-ski-suits-are-ready-hit-slopes-have-blast-winter-wonderland-generative-ai_260559-470.jpg?size=626&ext=jpg",
    description: "Data Concept",
  },
  {
    url: "https://img.freepik.com/free-vector/big-data-concept-background_52683-24459.jpg?size=626&ext=jpg&ga=GA1.1.61599359.1705844401&semt=sph",
    description: "Data Concept",
  },
];

export default function HerosectionCarausal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
  return (
    <div className="w-full  md:p-2 px-1 bg-transparent">
      <div className="m-12">
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div className=" text-black rounded-xl md:pl-5 cursor-pointer">
                <img src={d.url} alt="" className="md:h-80 md:w-80 h-44 w-72 ml-3 rounded-lg object-cover" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
