// const dragons = [
//   'dragon 1',
//   'dragon 2',
//   'dragon 3'
// ];

// const iterator = dragons[Symbol.iterator]();
// iterator.next(); // {value: 'dragon 1', done: false}
// iterator.next(); // {value: 'dragon 2', done: false}
// iterator.next(); // {value: 'dragon 3', done: false}
// iterator.next(); // {value: undefined, done: true}

// // For...of uses it under the hood
// for (const dragon of dragons) {
//   dragon 
// };

// for (const char of dragons[0]) {
//   char 
// };

function randomItem(array) {

  const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
  const randomIndex = randomNumber(0, array.length);

  return array[randomIndex];
}

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'small'];
  const dragonTypes = ['earth', 'wind', 'fire'];
  return `${randomItem(dragonSizes)} ${randomItem(dragonTypes)} dragon`;
}

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if(!enoughDragonsSpawned)
          return {
            value: makeDragon(),
            done: false
          };
        return { done: true };
      }
    }
  }
}

for (const dragon of dragonArmy) {
  console.log(dragon);
}
