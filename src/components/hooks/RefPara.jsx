import React from "react";

const RefPara = () => {
  let inpRef = useRef("");
  let sectionRef = useRef(null);
  let handleClick = () => {
    inpRef.current.focus();
  };
  let handleScroll = () => {
    sectionRef.current.srollIntoView();
  };
  return <div>
    <button onClick={handleScroll}>Scroll</button>
    <h1>Times of India</h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit aperiam minus. Non culpa sapiente tenetur quibusdam vel expedita eum aliquid corrupti explicabo quam. Et perspiciatis sapiente dolorem, placeat explicabo esse nisi veniam, pariatur quae itaque, mollitia aut quo eaque. Tempora assumenda eius, labore suscipit voluptate consectetur similique nemo. Dicta?</p>
    <section ref={handleClick}>
       
    </section>
  </div>;
};

export default RefPara;
