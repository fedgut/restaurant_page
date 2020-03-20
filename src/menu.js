import * as elMngr from './elementManager';

const menu = (target, items) => {
  const type = ['ul', 'li'];

  document
    .getElementById(target)
    .appendChild(elMngr.elemental('div', 'id', 'menu-handler'));

  const appender = () => {
    items.forEach((x) => {
      const dish = x[0];
      const ingr = x.slice(1, -1);
      document
        .getElementById('menu-handler')
        .appendChild(elMngr.elemental('div', 'id', dish));
      document
        .getElementById(dish)
        .appendChild(elMngr.elemental('h4', 'innerText', dish));
      document
        .getElementById(dish)
        .appendChild(elMngr.listCreator(dish, type, ingr));
      document
        .getElementById(dish)
        .appendChild(elMngr.elemental('p', 'innerText', x[x.length - 1]));
      document
        .getElementById(dish).classList.add('menu-container');
    });
  };

  appender();
};

export { menu as default };
