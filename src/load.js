function appendEnd(target, content) {
  const element = document.getElementById(target).insertAdjacentHTML('afterend', content);
  return element;
}

export { appendEnd };
