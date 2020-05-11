import dice0 from '../diceImg/Dice-0.svg';
import dice1 from '../diceImg/Dice-1.svg';
import dice2 from '../diceImg/Dice-2.svg';
import dice3 from '../diceImg/Dice-3.svg';
import dice4 from '../diceImg/Dice-4.svg';
import dice5 from '../diceImg/Dice-5.svg';
import dice6 from '../diceImg/Dice-6.svg';

export default function diceSelector(number) {
  switch (number) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
    default:
      return dice0;
  }
}
