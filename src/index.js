import * as elMngr from './elementManager';

const navMenu = ['Home', 'About', 'Menu'];
const mainDiv = document.getElementById('content');

mainDiv.appendChild(elMngr.listCreator('nav-list', navMenu));
mainDiv.appendChild(elMngr.elemental('img', 'src', 'pujol.jpg'));
