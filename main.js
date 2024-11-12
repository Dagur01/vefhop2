import { el } from './lib/elements.js';
import { renderIndexpage } from './lib/pages/index.js';
import { renderNavigation } from './lib/components/navigation.js';
import { renderContentpage } from './lib/pages/content-page.js';
import { fetcher } from './lib/fetcher.js';



async function renderSubpage(root, indexJson, type) {
  const headerElement = el('header', {}, el('h1', {}, indexJson.title));

  headerElement.appendChild(renderNavigation(indexJson.navigation));

  let contentString = 'EFNI ER EKKI GILT';

  if (indexJson.navigation.find((i) => i.slug === type)) {
    contentString = type;
  }


  const contentJsonFile = `data/${type}/index.json`;
  const contentJson = await fetcher(contentJsonFile);

  const mainElement = el('main', {}, el('p', {}, contentString));

  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}

async function render(root, querystring) {
  const mainIndexJson = await fetcher('data/index.json');
  

  const params = new URLSearchParams(querystring);
  const type = params.get('type');
  const content = params.get('content');
  

  console.log(type, content);


  if (!type) {
    if (content){
      renderContentPage(root, mainIndexJson);
    }
      renderIndexpage(root, mainIndexJson, contentJson);
  } else {
      renderSubpage(root, mainIndexJson, type);
  }
}

const root = document.querySelector('#app');

render(root, window.location.search);
