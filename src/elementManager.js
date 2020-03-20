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
  const mainDiv = document.getElementById('content');
  let image = document.elemental('img', 'src', 'src/pujol.jpg');
};

export { elemental, listCreator, startUp };
