import * as elMngr from './elementManager';
import startUp from './startUp';
import image from './burger2.png';
import home from './home';
import enviroment from './envirom';
import menu from './menu';
import './style.css';

const navMenu = ['Home', 'Enviroment', 'Menu'];
const navItem = ['nav', 'button'];
const mainDiv = document.getElementById('content');
const changes = 'mutating-div';

/* Menu items are here so you can easily add or remove items.
  Menu format is an array with the following info:
  -dish name
  -ingredients
  -price
*/
const menuItems = [
  ['Chiken sandwich', 'Bread', 'Chicken', 'Tomatoes', 'Love', '$4,33'],
  ['Tuna sandwich', 'Bread', 'Tuna', 'Onions', 'Hate', '$3,50'],
  ['Cheeseburger', 'Cheese', 'Burger', '$13,50'],
];

startUp(navMenu, navItem, mainDiv, image, changes);
home(changes);

const homeTrigger = document.getElementById('Home');
const enviroTrigger = document.getElementById('Enviroment');
const menuTrigger = document.getElementById('Menu');

homeTrigger.addEventListener('click', () => {
  elMngr.cleanUp(changes);
  home(changes);
});

enviroTrigger.addEventListener('click', () => {
  elMngr.cleanUp(changes);
  enviroment(changes);
});

menuTrigger.addEventListener('click', () => {
  elMngr.cleanUp(changes);
  menu(changes, menuItems);
});
