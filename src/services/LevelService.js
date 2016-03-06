import Promise from 'bluebird';
import levels from '../../data/levels';
import {check} from '../util/answerChecker';

// public

export function getLevel(levelNumber) {
  return levels.get(levelNumber);
}

export async function checkAnswer(levelNumber, answer) {

  // wait 1-2 seconds for suspense
  await Promise.delay(1000 + Math.floor(Math.random() * 1000));

  const level = getLevel(levelNumber);
  return check(
    answer,
    level.get('levelAnswer'),
    level.get('levelAnswerIsExact')
  );
}
