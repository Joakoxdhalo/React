// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import "./bootstrap";

// JSX
// const element1 = <h1>Hello, Platzi Badges!</h1>;

// React
// const element = React.createElement('a', {href: 'http://platzi.com'}, 'Ir a Platzi')

const name = 'Crackio'
// String React
//const element = React.createElement('h1', {},  `Hola soy ${name}`);


const sum = () => 3+3;

// String JSX
//const element = <h1> Hola soy, {sum()}</h1>

// Lo siguiente después se renderiza con ReactDomRender
const element = <div>
					<h1>Hola soy {name}</h1>
					<p></p>
				</div>

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
