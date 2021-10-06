// import { set } from "core-js/core/dict";
import "./style.css";

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

window.onload = () => {
    document.querySelector('.main__title-first').classList.add('main__title_animation-left');
    setTimeout(() => {
        document.querySelector('.main__title-second').classList.add('main__title_animation-right');
    }, 1500);
    setTimeout(() => {
        document.querySelector('.main__title-third').classList.add('main__title_animation-left');
    }, 3000);
    setTimeout(() => {
        document.querySelector('.main__subtitle').classList.add('main__subtitle_animation');
    }, 5500);
};