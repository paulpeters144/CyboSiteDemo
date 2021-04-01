// TODO: Break this up into separate files once the design architecture has been finalized

// Cybo.js

class Cybo {
  constructor(
    cyboName,
    cyboType,
    attackFn,
    buildFn,
    deployFn,
    moveFn,
    unpackStageAbility,
    battleStageAbility,
    warStageAbility
  ) {
    // TODO validate that all fns exist and are of right type
    if (!cyboName) throw new Error('cyboName required');
    if (!cyboType) throw new Error('cyboType required');

    // TODO: Add other items like health, etc? perhaps?
    // Alternatively - we could call this class "ActiveCybo" or "CyboShell" and keep up with the Cybo properties on a sub-property.
    // For example: cyboType could be a full object that includes the health, chip, etc. in it
    // We just need to talk about it....
    // We want to make sure we avoid class bloat or it'll be hard to modify later.

    this.cyboName = cyboName;
    this.cyboType = cyboType;

    // this.positionX = -1;
    // this.positionY = -1;

    this.cyboInfo = `${cyboName} (${cyboType})`;
    this.buildFn = buildFn;
    this.deployFn = deployFn;
    this.attackFn = attackFn;
    this.moveFn = moveFn;
    this.unpackStageAbility = unpackStageAbility;
    this.battleStageAbility = battleStageAbility;
    this.warStageAbility = warStageAbility;
  }
}

// cmd-tree.js -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const makeCmdTree = (cybos) => {
  const cyboTree = cybos.reduce((tree, cybo) => {
    const abilityCmds = {
      [cybo.unpackStageAbility.cmdName]: cybo.unpackStageAbility.fn,
      [cybo.battleStageAbility.cmdName]: cybo.battleStageAbility.fn,
      [cybo.warStageAbility.cmdName]: cybo.warStageAbility.fn,
    };

    const cbCmds = {
      build: cybo.buildFn,
      deploy: cybo.deployFn,
      attack: cybo.attackFn,
      move: cybo.moveFn,
      ability: {
        ...abilityCmds,
        ls: Object.keys(abilityCmds),
      },
    };

    tree[cybo.cyboType] = {
      ...cbCmds,
      ls: Object.keys(cbCmds),
    };
    return tree;
  }, {});

  const baseCmds = {
    cb: {
      ...cyboTree,
      ls: Object.keys(cyboTree),
    },
    chip: null,
    queue: null,
  };

  const root = {
    ...baseCmds,
    ls: Object.keys(baseCmds),
  };

  return root;
};

// test.js -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Make a Cybo

// This is another way to do a "class" functionally; return an object with the properties
// instead of using `constructor` and `this.<property>` notation
const CyboFn = (cmdName = 'Generic CyboFn', fn) => {
  return { cmdName, fn };
};

// Make some abilities
const unpackStgAbility = CyboFn('Build_Intel', () => {
  return 'got build intel';
});

const battleStgAbility = CyboFn('Target_Disrupt', () => {
  return 'disrupted the target';
});

const warStgAbility = CyboFn('Friendly_Blur', () => {
  return 'blurred friendly';
});

// To Discuss:
// How do we pass in arguments to commands? i.e. move
// If I want to move it to point (1, 3), should it be:
// - `cb Seer move 1 3`
// - `cb Seer move(1, 3)`
// - `cb Seer move=1,3`
// - `cb Seer move --x=1 --y=3`
// - `cb Seer move13)`
//
// I won't implement those commands until we know how we want to pass arguments in.

// FIXME: this.cyboInfo does not work as expected due to 'this' and anonymous function
const seerAttackFn = (defender) => {
  return `${this.cyboInfo} attacks ${defender.cyboInfo}`;
  // this.attack(defender); // each Cybo should have an attack method that does the damage to their foe (functional programming)
};
const seerBuildFn = () => {
  // game logic
  return `build ${this.cyboInfo}`;
};
const seerDeployFn = () => {
  // game logic
  return `deploy ${this.cyboInfo}`;
};
const seerMoveFn = (x, y) => {
  // the way we need to use 'this' is different than expected due to this being anonymous
  // this.positionX = x;
  // this.positionY = y;
  // this.moveAnimation();
  // gameBoard.redraw(); // ??? idk what the real life commands are at the moment
  return `move ${this.cyboInfo} x:${x} y:${y}`;
};

const seer = new Cybo(
  'Razerhawk',
  'Seer',
  seerAttackFn,
  seerBuildFn,
  seerDeployFn,
  seerMoveFn,
  unpackStgAbility,
  battleStgAbility,
  warStgAbility
);

const cybos = [seer];
const cmdTree = makeCmdTree(cybos);
const run = (args) => {
  const cmdResults = args
    .split(' ')
    .reduce((result, arg) => result[arg], cmdTree);
  return typeof cmdResults === 'function' ? cmdResults() : cmdResults;
};

var runBattleCmd = run; // this is nappy, janky, bad mamma jamma, please no.
// for reference on using global this way: https://www.youtube.com/watch?v=umDr0mPuyQc

// To Test:
// run("cb Seer ability Build_Intel");
// run("cb ls")
// etc. - just give it a shot! "ls" at any level should show you what you can do.
