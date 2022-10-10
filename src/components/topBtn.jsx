import React, {useEffect, useRef} from "react";

export default function TopBtn() {
  const topBtn = useRef(null)

  useEffect(()=>{
    window.addEventListener('scroll', function(){
      if(window.scrollY < 800) {
        topBtn.current.style.display = 'none';
      } else {
        topBtn.current.style.display = 'flex';
      }
    })
  })

  return (
    <div
      className="topBtn"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }} ref={topBtn}
    >
      <i className="fa fa-arrow-up"></i>
    </div>
  );
}
