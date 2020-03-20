/* Arguments Doc:
type is the kind of html tag to create.
property is the html tag's property you want to set.
value is the property's value
*/

function elemental(type, property, value) {
  const element = document.createElement(type);
  element[property] = value;
  return element;
}

/* Arguments Doc:
target is the html element's ID where the list is going to be created.
type is the kind of html tag you want, can be a ul or a nav.
args are the list items
*/

function listCreator(target, type, [...args]) {
  const list = elemental(type[0], 'id', target);
  args.forEach((x) => {
    const node = elemental(type[1], 'id', x);
    node.appendChild(document.createTextNode(x));
    list.appendChild(node);
  });
  return list;
}

const cleanUp = (target) => {
  const section = document.getElementById(target);
  while (section.firstChild) {
    section.removeChild(section.lastChild);
  }
};

export { elemental, listCreator, cleanUp };
