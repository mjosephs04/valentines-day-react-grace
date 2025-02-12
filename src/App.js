import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import { motion } from "framer-motion";
import { Heart, Stars } from 'lucide-react';
import flowerBear from "./flowerBear.gif"

function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(65);
  const form = useRef();


  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);


  /* code for moving button */
  const popUp = () => {
    alert("AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!");
  }

  const clickedYes = () => {
    alert("YAYYY you really want to be my valentine;) I just got an email telling me :)")
  }

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };
  
  var yesStyle = {
    left: "40%",
    top: "65%",
    position: "absolute",
  }

  /* code for email alert sent when she says yes */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fidzscf', 'template_240ga9k', form.current, '7tIyqxKRLgB8vgXqN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



  return (
      <>
        <img
            className="flowerBear"
            src={flowerBear}
        />
        <div className="pre-valentine-container" style={{paddingTop: "30px"}}>
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(5)].map((_, i) => (
                <Heart
                    key={i}
                    className="text-pink-500 heart-bounce"
                    style={{animationDelay: `${i * 0.15}s`}}
                    size={24}
                />
            ))}
          </div>
          <motion.p
              className="pre-valentine"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 2, delay: 0.5}}
          >
            Hey Grace! Sorry I wasn't able to do this in person,
          </motion.p>

          <motion.p
              className="pre-valentine"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 2, delay: 2.5}}
          >
            but I came up with the next best thing :)!
          </motion.p>

          <motion.p
              className="pre-valentine"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 2, delay: 6}}
          >
            Will you be my
          </motion.p>
        </div>
        <p className="valentine">Valentine?</p>
        <div className="stars-left">
          <Stars size={32}/>
        </div>
        <div className="stars-right">
          <Stars size={32}/>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <button
              style={yesStyle}
              type="submit"
              onClick={clickedYes}
          >
            YES!
          </button>
        </form>
        <button
            onMouseOver={mouseOver}
            style={noStyle}
            onClick={popUp}
        >
          no
        </button>
      </>
  );
}

export default App;
