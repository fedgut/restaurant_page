import * as elMngr from './elementManager';
import pujol from './pujol.jpg';

const navMenu = ['Home', 'Enviroment', 'Menu'];
const mainDiv = document.getElementById('content');

mainDiv.appendChild(elMngr.elemental('img', 'src', pujol));
mainDiv.appendChild(elMngr.listCreator('nav-list', navMenu));
mainDiv.appendChild(elMngr.elemental('div', 'id', 'mutating'));
