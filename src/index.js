import Counter from './models/Counter.js';
import { isDevs, isProd } from './helpers/envs.js';

document.addEventListener('DOMContentLoaded', () => {
  const counter = Counter.createNew();
  console.log(counter.up().get());
  if (isDevs()) {
    console.log('development');
  }
  if (isProd()) {
    console.log('production');
  }
});
