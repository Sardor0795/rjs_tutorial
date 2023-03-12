import React from "react";
import "./style.css";

class FruitCard extends React.Component {
  render() {
    const { img, title } = this.props.data;
    return (
      <div className="card fruit">
        <img src={img} alt="img" />
        <p className="text text">{title}</p>
      </div>
    );
  }
}

export default FruitCard;
