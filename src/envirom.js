// import * as elMngr from './elementManager';

const envir = (target) => {
  const baseNode = document.getElementById(target);
  const copy = '\nwe care about the enviroment!\n';

  baseNode.innerHTML = copy;
};

export { envir as default };
