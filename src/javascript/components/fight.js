import { controls } from '../../constants/controls';
import { showWinnerModal } from './modal/winner';

export async function fight(firstFighter, secondFighter) {
  const leftFighterHealth = document.getElementById('right-fighter-indicator');
  const rightFighterHealth = document.getElementById('left-fighter-indicator');
  const fighter1 = require(`../../../resources/api/details/fighter/${firstFighter._id}`);
  const fighter2 = require(`../../../resources/api/details/fighter/${secondFighter._id}`);

  document.addEventListener('keydown', async ({ code }) => {
    if (code === controls.PlayerOneAttack) {
      const width = ((secondFighter.health - getDamage(firstFighter, secondFighter)) * 100) / fighter2.health;
      leftFighterHealth.style.width = `${width}%`;

      secondFighter.health = secondFighter.health - getDamage(firstFighter, secondFighter);
      if (secondFighter.health < 0) secondFighter.health = 0;
    }
    if (code === controls.PlayerTwoAttack) {
      const width = ((firstFighter.health - getDamage(secondFighter, secondFighter)) * 100) / fighter1.health;
      rightFighterHealth.style.width = `${width}%`;

      firstFighter.health = firstFighter.health - getDamage(secondFighter, firstFighter);
      if (firstFighter.health < 0) firstFighter.health = 0;
    }
  });
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    const intervalID = setInterval(() => {
      if (firstFighter.health <= 0) {
        showWinnerModal(secondFighter.name);
        clearInterval(intervalID);
        resolve();
      }
      if (secondFighter.health <= 0) {
        showWinnerModal(firstFighter.name);
        clearInterval(intervalID);
        resolve();
      }
    }, 500);
  });
}

const getRand = () => Math.floor(Math.random() * Math.floor(2)) + 1;

export function getDamage(attacker, defender) {
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  return fighter.attack * getRand();
}

export function getBlockPower(fighter) {
  return fighter.defense * getRand();
}
