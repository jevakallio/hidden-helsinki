import moment from 'moment';
import EventEmitter from 'EventEmitter';

let _memorized;
let _elapsed;
let _startTime;
let _ticker;

export const timer = new EventEmitter();

export function start() {
  _memorized = 0;
  resume();
}

export function pause() {
  clearInterval(_ticker);
  _memorized += _elapsed;
  _ticker = null;
}

export function resume() {
  _elapsed = 0;
  _startTime = new Date();
  _ticker = setInterval(() => {
    _elapsed = moment().diff(_startTime);
    timer.emit('tick', _elapsed + _memorized);
  }, 1000);
}

export function reset() {
  clearInterval(_ticker);
  _ticker = null;
}
