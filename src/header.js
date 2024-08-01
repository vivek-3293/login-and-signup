import React, { useState } from 'react';

const Header = () => {
  const [color, setColor] = useState("olive")

  return (
    <>
        <div className="bgDefault w-100 " style={{backgroundColor: color, height: '100vh'}}>

          <div className="fixed-bottom d-flex flex-wrap justify-content-center px-2">
            <div className="d-flex flex-wrap justify-content-center
             bg-white px-3 py-2 rounded-pill mb-3">
              <button onClick={() => setColor("red")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "red"}}>Red</button>
              <button onClick={() => setColor("green")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "green"}}>Green</button>
              <button onClick={() => setColor("blue")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "blue"}}>Blue</button>
              <button onClick={() => setColor("pink")} className="border-0 px-3 py-1 mx-2 rounded-pill text-black" 
              style={{backgroundColor: "pink"}}>Pink</button>
              <button onClick={() => setColor("black")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "black"}}>Black</button>
              <button onClick={() => setColor("olive")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "olive"}}>Olive</button>
              <button onClick={() => setColor("yellow")} className="border-0 px-3 py-1 mx-2 rounded-pill text-black" 
              style={{backgroundColor: "yellow"}}>Yellow</button>
              <button onClick={() => setColor("purple")} className="border-0 px-3 py-1 mx-2 rounded-pill text-white" 
              style={{backgroundColor: "purple"}}>Purple</button>
             </div>
          </div>
        </div>
    </>
  );
};

export default Header;
