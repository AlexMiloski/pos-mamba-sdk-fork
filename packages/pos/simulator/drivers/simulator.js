import Signal from '../signal.js';

const DATA = {};

export default function setup(Simulator) {
  Signal.register(Simulator, ['changeSettings', 'print']);

  Simulator.get = keyPath => {
    if (keyPath === undefined) {
      return DATA;
    }

    const keys = keyPath.replace(/\[(\d+)\]/g, '.$1').split('.');
    let value = DATA[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      value = value[keys[i]];
    }
    return value;
  };

  Simulator.set = (keyPath, value) => {
    if (keyPath === undefined) {
      return;
    }

    const keys = keyPath.replace(/\[(\d+)\]/g, '.$1').split('.');
    const lastKey = keys.pop();

    // If not a nested keyPath
    if (keys[0] === undefined) {
      DATA[lastKey] = value;
      return;
    }

    let object = DATA[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      object = object[keys[i]];
    }
    object[lastKey] = value;
    Simulator.changeSettings(DATA);
  };
}
