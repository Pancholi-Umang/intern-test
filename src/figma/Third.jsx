import React from "react";
import data from "./data";
import Figma from "./Figma";
import "./Third.css";

function Third() {
  return (
    <div className="mainpagediv">
      {/* <Figma /> */}
      <div className="whiteElem">
        <div className="upper">
          <input
            type="text"
            className="inpt"
            placeholder="Article name or Keywords"
          />
          <button className="btnr">Search</button>
        </div>
        <div className="lower">
          {data.map((value, index) => {
            return (
              <div className="mainContainer" key={index}>
                <div className="cardContainer">
                  <div className="cardImage">
                    <img src={value.img} alt="errror" className="controlimg" />
                  </div>
                  <div className="cardTitle">
                    <h3>{value.title}</h3>
                  </div>
                  <div className="cardDescription">
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="pagination">
          <a href="#">PREVIOUS</a>
          <a href="#" class="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">NEXT</a>
        </div>
      </div>
    </div>
  );
}

export default Third;
