console.log('Webpack 5 using Babel, PostCSS and Sass with a hot dev server and an optimized build.');

import './styles/index.scss';

import { example } from './js/example';

function heading() {

  const element = document.createElement('h1');

  element.textContent = example();

  return element;
}

function github() {

  const element = document.createElement('div');

  element.innerHTML = '<a href="https://github.com/adrienloup/webpack5" target="_blank" rel="noopener">GitHub Repository</a>';
  element.classList.add('github');

  return element;
}

document.body.append(heading(), github());
