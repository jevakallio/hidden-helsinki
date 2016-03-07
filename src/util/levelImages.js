const images = {
  'action-figure': require('../../images/action-figure.jpg'),
  'birds': require('../../images/birds.jpg'),
  'board-table': require('../../images/board-table.jpg'),
  'boats': require('../../images/boats.jpg'),
  'bridge': require('../../images/bridge.jpg'),
  'cathedral': require('../../images/cathedral.jpg'),
  'city-black-white': require('../../images/city-black-white.jpg'),
  'landing': require('../../images/landing.jpg'),
  'light-bulbs': require('../../images/light-bulbs.jpg'),
  'parking-circles': require('../../images/parking-circles.jpg'),
  'plant': require('../../images/plant.jpg'),
  'ripped-jeans': require('../../images/ripped-jeans.jpg'),
  'round-bulb': require('../../images/round-bulb.jpg'),
  'splash': require('../../images/splash.jpg'),
  'tattoo': require('../../images/tattoo.jpg'),
  'white-bark': require('../../images/white-bark.jpg')
};

export function getLevelImage(name) {
  const source = images[name];
  if (!source) {
    console.warn('No level image found: ' + name);
  }

  return source;
}
