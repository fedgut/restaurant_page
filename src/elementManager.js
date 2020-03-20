import pujol from './pujol.jpg';

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

function listCreator(target, [...args]) {
  const list = elemental('ul', 'id', target);
  args.forEach((x) => {
    const node = elemental('li', 'id', x);
    node.appendChild(document.createTextNode(x));
    list.appendChild(node);
  });
  return list;
}

const startUp = () => {
  const navMenu = ['Home', 'Enviroment', 'Menu'];
  const mainDiv = document.getElementById('content');

  mainDiv.appendChild(elemental('img', 'src', pujol));
  mainDiv.appendChild(listCreator('nav-list', navMenu));
  mainDiv.appendChild(elemental('div', 'id', 'mutating'));
};

export { elemental, listCreator, startUp };
