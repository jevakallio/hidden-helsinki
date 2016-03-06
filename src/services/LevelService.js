import levels from '../../data/levels';
import {check} from '../util/answerChecker';

// public

export function getLevel(levelNumber) {
  return levels.get(levelNumber);
}

export function checkAnswer(levelNumber, answer) {
  const level = getLevel(levelNumber);
  return check(
    answer,
    level.get('levelAnswer'),
    level.get('levelAnswerIsExact')
  );
}
