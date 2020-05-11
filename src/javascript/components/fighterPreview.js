import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });
  const para = document.createElement('P');
  const img = document.createElement('IMG');

  const name = fighter?.[0].name;
  const health = fighter?.[0].health;
  const attack = fighter?.[0].attack;
  const defense = fighter?.[0].defense;
  const source = fighter?.[0].source;
  img.src = source;

  para.innerText = `
    name: ${name ? name : 'please choose fighter'}
    health: ${health ? health : 'please choose fighter'}
    attack: ${attack ? attack : 'please choose fighter'}
    defense: ${defense ? defense : 'please choose fighter'}
  `;

  fighterElement.appendChild(para);
  fighterElement.appendChild(img);

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name,
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}