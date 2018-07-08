import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

const h1 = document.querySelector('h1')
h1.style.background = 'yellow'

const btn = document.querySelector('button')

btn.onclick = () => {
  TweenMax.from(document.querySelector('h1'), 1, {opacity: 0, y: 50, x: 300})
}

console.log({TweenMax, Power2, TimelineLite})