import React from "react";
import { Carousel } from "react-carousel-minimal";

export default function Slider() {
  const data = [
    {
      image: "/images/banner1.jpg",
      caption: `
      <div style="float: right; margin-right: 8%; margin-bottom: 5%">
      <a href="/">
        <button style="background-color: #ff671b; color: white;"> JE DÉCOUVRE </button>
      </a>
      </div>`,
    },
    {
      image: "/images/banner2.jpg",
      caption: `
      <div style="float: right; margin-right: 15%; margin-bottom: 3%">
      <a href="/">
        <button style="background-color: #ff671b; color: white; "> JE DÉCOUVRE </button>
      </a>
      </div>`,
    },
    {
      image: "/images/banner3.jpg",
      caption: `
      <div style="float: right; margin-right: 22%; margin-bottom: 3%">
      <a href="/">
        <button style="background-color: #01bfbf; color: white; "> CONTACTEZ-NOUS  </button>
      </a>
      </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "17px",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="1500px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "1500px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
