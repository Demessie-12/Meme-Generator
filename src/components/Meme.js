import React, { useEffect, useState } from "react";
// import memesData from "../data/memesData";

export default function Meme() {
  /*
const thingsArray = ["thing 1", "thing 2"]
thingsArray.map((el) => <p>{el}</p>)(

const function handle () {
  thingsArray.push("thing ${thindsArray.length + 1}"))
  console.log (thingsArray)
}

const [isGoingOut, setIsGoingOut] = usestate(true)
function toogleIsGoingOut () {
  setIsGoingOut(prevstate => !prevstate)
}

cons [isgoingOut, setIsGoingOut] = useState(True) 

function flip (isGoingOut) {
  setIsGoingOut(isGoingOut ? false : true)
}

const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2'])
function addItem() {
  setThingsArray(prevState => [
    ...prevState, `Thing &{prevState.length + 1}`])
}

 const starIcon = contact.isFavorite ? star-filled.png : star-empty.png

const [contact, setContact] = useState({
  firstname: "new",
  lastname: "folder"
  isFavorite: true
})

function toogleFavorite() {
  setContact(prevContact => {
    retrun {
      ...prevcontact,
      isFavorite: !prevContact.isfavorite
    }
  })
}

const [meme, setMeme] = useState({
  toptext: '',
  bottomtext: '',
  randomImage: "url.png"  
})

const [allMemeImage, setAllMemeImage] = usestate(memesData)

function getMemeImage() {
  const memesArray = allMemeImage.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  const url = memesArray[randomNumber].url
  setMeme(prevMeme => ({...prevMeme, randomImage: url}))
}






const [squares, setsquares] = useState(boxes)

backgroundColor: `{props.darkMode ? balck : white}`

function toogle(id){
  const newsquares = []
  for(let i=1; i < sqaures.length; i++) {
    const currentsquare = square[i]
    if(currentsquare.id === id) {
      const updatedsquare = {
        ...currentsquare,
        on: !currentsquare.on
      }
      newsquares.push(updatedsquare)
    }
    else if newsquares.push(currentsquare)
  }
  setsquares(newsquares)
}

const squareElements = suares.map(square=> {
  <box 
    key={square.id}
    id={square.id}
    toogle={toogle}
})

{squareElements}

import React form 'react'
export default function box(props) {
  retrun (
    <div 
      className="box"
      onClick={() => props.toogle(props.id)}>
    </div>

    
    const [isShown, setIsShown] = usestate(false)
    <button onClick={() => setIsShown((prevIsShown)=> !prevIsShown)}> {isShown ? "hide" : "show"} Punchline </button>


    <h1> {messages.length == 0 ? "You're all caught up!" : `You have ${messages.length} unread message${messages.length > 1 && "s"}!` </h1>





<h1> {isGoingOut ? "yes" : "no"}
*/

const [memesArray, setMemesArray] = useState()

useEffect(function() {
  fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(result => setMemesArray(result.data.memes))
}, []) 

  const [allMemeImage, setAllMemeImages] = useState({
    toptext: "",
    bottomtext: "",
    randomImage: "https://i.imgflip.com/265j.jpg",
  });

  // const memesArray = memesData.data.memes
  
  
  // function getMemeImage() {
  //   const randomNumber = Math.floor(Math.random() * memesArray.length)
  //   const url = memesArray[randomNumber].url
  //   setMeme(prevMeme => ({...prevMeme, randomImage: url}))
  // }

  function handleChange(event) {
    const { name, value } = event.target;
        

    setAllMemeImages((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(allMemeImage)
  }

  function getMemeImage(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * memesArray.length);
    setAllMemeImages((prev) => ({
      ...prev,
      randomImage: memesArray[random].url,
    }));
  }

  return (
    <main>
      <form onSubmit={getMemeImage} className="form">
        <input
          type="text"
          id="text1"
          name="toptext"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
        />
        <input
          type="text"
          id="text2"
          name="bottomtext"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
        />
        <button className="form--button">Get a new meme image</button>
      </form>
      <div className="meme">
        <img
          src={allMemeImage.randomImage}
          alt="meme"
          className="meme-image"
        />
        <p id="meme-top-text">{allMemeImage.toptext}</p>
        <p id="meme-bottom-text">{allMemeImage.bottomtext}</p>
      </div>
    </main>
  );
}
