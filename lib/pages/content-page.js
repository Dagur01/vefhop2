import { el } from "../elements.js"
import { renderNavigation } from "../components/navigation.js";

export function renderContentpage(root, indexJson, contentJson) {
    console.log('rendering content page', root, indexJson.title);
  
    const headerElement = el('header', {}, el('h1', {}, indexJson.title));
  
    headerElement.appendChild(renderNavigation(indexJson.navigation));
  
    const mainElement = el(
      'main',
      {},
      el(
        'section',
        {},
        el('p', {}, indexJson.description),
        el('p', {}, 'ég er content page' + JSON.stringify(contentJson)),
        renderNavigation(indexJson.navigation),
      ),
    );
    const footerElement = el('footer', {}, indexJson.footer);
  
    root.appendChild(headerElement);
    root.appendChild(mainElement);
    root.appendChild(footerElement);
  }
