import { showModal } from './modal';

export function showWinnerModal(fighter) {
  const para = document.createElement('P');
  para.innerText = `${fighter}, you won!`;
  showModal({ title: `Winner is ${fighter}!`, bodyElement: para });
}
