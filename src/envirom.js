const envirom = (target) => {
  const copy = 'We care about the enviroment! We composte all food scraps to fertilice crops. A happy tomato is a happy customoer! Also, Soylent Green is made of people';
  document.getElementById(target).appendChild(document.createTextNode(copy));
};

export { envirom as default };
