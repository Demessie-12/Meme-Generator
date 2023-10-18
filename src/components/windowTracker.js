import React, { useEffect, useState } from "react";

export default function WindowTracker() {
    
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth () {
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)

    return function () {window.removeEventListener("resize", watchWidth)}
  }, [])


  function toogle() {
    setShow(prev => !prev)
  }
   // clean up function from DOM
    return(
        <div>
            <button onClick={toogle}>Toogle WindowTracker</button>
            {show && <h1>Winows width: {windowWidth}</h1>}
        </div>
    )
}