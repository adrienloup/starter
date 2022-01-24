console.log('Hello Webpack');

import './styles/index.scss';

import Img from './images/webpack.svg';

import { hello } from './hello';
hello();

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  const myImg = new Image();
  myImg.style.width = '200px';
  myImg.src = Img;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
