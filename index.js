/* Change the website back ground colour via the DOM
*
**/
colourBtn = () => {
    document.querySelector('body').style.backgroundColor = "#00bfff"; //DeepSkyBlue
 };
resetBtn = () => {
     document.querySelector('body').style.backgroundColor = "#ADD8E6"; //DeepSkyBlue
  };
/*
//move button in js class.
class Button {
    constructor(button) { 
        this.button = button;
    }
    buttonColor() {
    document.querySelector('body').style.backgroundColor = "#00bfff"; //DeepSkyBlue
    }
}

let colorBtn = new Button(document.querySelector('body').style.backgroundColor = "#00bfff")

colorBtn.button();
*/

  /**Code controls the decision making of the click button.
   *  Math random() selects a valve in the decision array. 
   */
  Magic = () => {
    const decision = ['Yes', 
                      'No', 
                      'Outlook not so certain',
                      'Maybe', 
                      'Not sure', 
                      'Ask again later', 
                      'Do not count on it',
                      'Possibly',
                      'Outlook looks good',
                      'Most likely',
                      'It will happen',
                      'Very doubtful'
                    ];
        let reply = decision[Math.floor(Math.random()* 12)];

        const btn = document.querySelector('.magic');

        function updateButton() {
            if (btn.textContent === 'Ask a question and click for an answer?') {
                return btn.textContent = reply;
            } else {
                btn.textContent === reply;
                btn.textContent = 'Ask a question and click for an answer?';
            }
        }
        updateButton();
};


// React cdn script
//import React from 'react';
//import ReactDOM from 'react-dom'

/*ReactDOM
.createRoot(document.getElementById('root'))
.render( <h1>{'Hell'}</h1> );

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

*/

/**
 * // Initializing a function with a function expression
const x = function() {} 
//Object.getPrototypeOf(x);

// Initializing a class with a class expression
const y = class {}
 */
/*function Hero(name, level) {
    this.name = name;
    this.level = level;


    Hero.prototype.greet = function() {
        return `${this.name} say hello.`
    }
}
let addHero = new Hero('thor', 5);
console.log(addHero);
*/

