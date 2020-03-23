import * as elMngr from './elementManager';

const startUp = (navMenu, navItem, mainDiv, image, changing) => {
  mainDiv.appendChild(elMngr.elemental('img', 'src', image));
  mainDiv.appendChild(elMngr.listCreator('nav-list', navItem, navMenu));
  mainDiv.appendChild(elMngr.elemental('div', 'id', changing));
};

export { startUp as default };
