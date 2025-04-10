import { useState } from "react";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
export default function Slider() {
  const [imgNo, setImgNo] = useState(1);
  const [img, setImg] = useState("");
  const imgLi = [one, two, three, four, five];
  setInterval(() => {
    // setImg(imgNo);
    setImgNo(imgNo < 2 ? imgNo + 4 : imgNo - 1);
    console.log(imgNo);
    // setImgNo(imgNo > 4 ? imgNo - 4 : imgNo + 1);
  }, 1000);
  return (
    <>
      <h1>Slider {imgNo}</h1>
      <div>
        <img src={imgLi[imgNo - 1]} alt="" />
      </div>
    </>
  );
}
