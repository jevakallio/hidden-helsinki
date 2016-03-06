import _ from 'lodash';

export function check(attempt, hash, isExact) {
  const correct = decode(hash);
  if (_.isString(correct)) {
    return isCorrect(attempt, correct, isExact);
  }
  if (_.isArray(correct)) {
    return _.any(correct, option => isCorrect(attempt, option, isExact));
  }
}

function isCorrect(attempt, correct, isExact) {
  const a = attempt.trim().toLowerCase();
  const b = correct.trim().toLowerCase();
  return isExact ? a === b : a.indexOf(b) !== -1;
}

function decode(answer) {
  //const answer = atob(hash);
  if (answer.indexOf(',') !== -1) {
    return answer.split(',');
  }

  return answer;
}
