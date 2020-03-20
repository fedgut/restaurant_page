function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

function listCreator(target, [...args]) {
  const list = elemental('ul', 'id', target);
  args.forEach((x) => {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(x));
    list.appendChild(node);
  });
  return list;
}

export { elemental, listCreator };
