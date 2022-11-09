import axios from "axios";
import React, { useEffect, useState } from "react";
import './fech.css'
import Favourite from "../favourit/Favourite";

function FetchApi() {
  const [data, setData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/stickers/trending" ,
        {
          params: {
            api_key: "GlVGYHkr3WSBnllca54iNt0yFbjz7L65",
          },
        }
      );
      console.log(results);
      setData(results.data.data);
    };
    fetchData();
  }, []);

  const renderSticker = () => {
    return data.map((el,index) => {
      return (
        <div className="sticker" key={index}>
          <img className="showbordr" src={el.images.fixed_height.url} alt="error" />
          <Favourite />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="secondwalas">{renderSticker()}</div>
    </div>
  );
}

export default FetchApi;
