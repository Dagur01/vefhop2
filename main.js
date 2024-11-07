async function fetchIndex(){
  const file = 'public/data/index.json';

  const response = await fetch(file);
  const json = await response.json();

  return json;
}

async function render (root) {
  const indexJson = await fetchIndex();
  console.log('rendering', root, indexJson);

  const headerElement = document.createElement('header');

  const h1Element = document.createElement('h1');
  h1Element.textContent = indexJson.title;
  headerElement.appendChild(h1Element);

  root.appendChild(headerElement);

  const mainElement = document.createElement('main');
  root.appendChild(mainElement);

  const footerElement = document.createElement('footer');
  const h2Element = document.createElement('h2');
  h2Element.textContent = indexJson.footer;
  footerElement.appendChild(h2Element);
  root.appendChild(footerElement);

}

const root = document.querySelector('#app')

render(root);