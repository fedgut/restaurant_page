const menu = (target) => {
  const copy = '3333333';
  document.getElementById(target).appendChild(document.createTextNode(copy));
};

export { menu as default };
