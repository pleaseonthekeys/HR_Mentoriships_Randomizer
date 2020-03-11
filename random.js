//need to randomize seniors for inputs so that they don't end up getting doubles frequently
//for paired sprints, make sure pairs are not split up
//double check pairs (keep track in a DB!)
const makeRandomPairs = (seniors, juniors) => {
  let sen = {};
  seniors.forEach(senior => {
    sen[senior] = [];
  });
  const pairUp = () => {
    for (let senior in sen) {
      let junior = randomizeJuniors(juniors);
      sen[senior].push(junior);
      juniors.splice(juniors.indexOf(junior), 1);
      if (sen[senior][0] === undefined) {
        sen[senior] = 'Floater';
      }
    }
  };

  pairUp();

  if (juniors.length) {
    pairUp();
  }
  return sen;
};

//get random junior
const randomizeJuniors = juniors => {
  return juniors[Math.floor(Math.random() * juniors.length)];
};

//randomize senior array to prevent same seniors from taking on doubles
const randomizeSeniors = seniors => {
  let newSeniors = [];
  while (seniors.length) {
    let randomInd = Math.floor(Math.random() * seniors.length);
    newSeniors.push(seniors[randomInd]);
    seniors.splice(randomInd, 1);
  }

  return newSeniors;
};

let hrNYC27 = [
  'Tony',
  'Jarrod',
  'Matt',
  'Erin',
  'John',
  'Gabe',
  'Patrick',
  'Will',
  'Zaid'
];

let hrNYC28Pairs = [
  ['vincent', 'Dan Silberger'],
  ['matt', 'Danny Prevoznik'],
  ['zach', 'Ryan'],
  ['Kane', 'greg'],
  ['tristan', 'Andrew'],
  ['joe', 'Mayanne']
];

let hrNYC28 = [
  'Andrew Jyan',
  'Joe Yan',
  'Vincent Chen',
  'Danny Prevoznik',
  'Dan Silberger',
  'Kane Qiu',
  'Matt Brown',
  'Mayanne Chess',
  'Ryan Fulmer',
  'Tristan Deitzer',
  'Greg Lin',
  'Zach Luther'
];

let seniors = randomizeSeniors(hrNYC27);
console.log(makeRandomPairs(seniors, hrNYC28));
