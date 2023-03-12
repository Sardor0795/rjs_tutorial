import React from "react";
import FruitCard from "./card";
import "./style.css";

const fruits = [
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Apple",
    img: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
  {
    title: "Orange",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbkQmX_p7ueL6aJFHCSVMSya15E-S_xA8fg&usqp=CAU",
  },
];

class HomeworkFruit extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="cardWrapper">
          {fruits.map((v) => {
            return <FruitCard data={v} />;
          })}
        </div>
      </div>
    );
  }
}

export default HomeworkFruit;
