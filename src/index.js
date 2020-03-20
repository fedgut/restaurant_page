import * as elMngr from './elementManager';
import startUp from './startUp';
import image from './pujol.jpg';
import home from './home';
import enviroment from './envirom';
import menu from './menu';

const navMenu = ['Home', 'Enviroment', 'Menu'];
const navItem = ['nav', 'button'];
const mainDiv = document.getElementById('content');
const changes = 'mutating-div';

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
  menu(changes);
});
