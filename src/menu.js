import * as elMngr from './elementManager';

const menu = (target) => {
  const type = ['ul', 'li'];
  const items = [
    ['Chiken sandwich', 'Bread', 'Chicken', 'Tomatoes', 'Love', '$4,33'],
    ['Tuna sandwich', 'Bread', 'Tuna', 'Onions', 'Hate', '$3,50'],
    ['Cheeseburger', 'Cheese', 'Burger', '$13,50'],
  ];
  const appender = () => {
    items.forEach((x) => {
      const dish = x[0];
      const ingr = x.slice(1, -1);
      document.getElementById(target).appendChild(elMngr.elemental('div', 'id', dish));
      document.getElementById(dish).appendChild(elMngr.elemental('h4', 'innerText', dish));
      document.getElementById(dish).appendChild(elMngr.listCreator(dish, type, ingr));
      document.getElementById(dish).appendChild(elMngr.elemental('p', 'innerText', x[x.length - 1]));
    });
  };
  appender();
};

export { menu as default };
