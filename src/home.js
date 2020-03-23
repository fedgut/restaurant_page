import * as elMngr from './elementManager';

const home = (target) => {
  const brand = 'The Burger joint';
  const copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  document.getElementById(target).appendChild(elMngr.elemental('h2', 'id', 'brand'));
  document.getElementById('brand').appendChild(document.createTextNode(brand));
  document.getElementById(target).appendChild(document.createTextNode(copy));
};

export { home as default };
