const StoryMode = {
  container: null,
  loader: null,
  tileMapData: null,
  seren: null,
  serenIsMoving: false,
  pathToLocation: [],
  textMap: [],
  serenAnim: {},
  elapTimer: 0,
  NPCs: [],
  faceNPC: null,
  start() {
    StoryMode.container = new PIXI.Container();
    Global.app.stage.addChild(StoryMode.container);

    StoryMode.loader = new PIXI.Loader();
    StoryMode.loader.baseUrl = 'assets/CyboShellAssets/';
    StoryMode.loader
      .add('tileSet', 'CityTiles/ColleteTS.png')
      .add('seren', 'Characters/serenWalking.png')
      .add('bugZi', 'Characters/bugZiWalking.png');
    StoryMode.loader.onProgress.add(StoryMode.showProgress);
    StoryMode.loader.onError.add(StoryMode.reportError);
    StoryMode.loader.onComplete.add(StoryMode.doneLoading);
    StoryMode.loader.load();
  },
  showProgress(e) {},
  reportError(e) {},
  doneLoading(e) {
    const mapPath = 'assets/CyboShellAssets/tileMapInfo/testMap.json';
    fetch(mapPath)
      .then((res) => res.json())
      .then((mapJsonData) => StoryMode.loadAfterjsonFetch(mapJsonData));
  },
  loadAfterjsonFetch(mapJsonData) {
    const tileSheet = new PIXI.BaseTexture.from(
      StoryMode.loader.resources.tileSet.url
    );
    StoryMode.MapObj = new GameMap(tileSheet, mapJsonData);
    StoryMode.container.scale.set(Global.imgScale, Global.imgScale);
    StoryMode.container.addChild(StoryMode.MapObj.container);
    StoryMode.setupCharacterSprite();
    StoryMode.setupAStar();
    StoryMode.setupNPCs();
    Global.app.stateGameLoop = function (delta) {
      StoryMode.moveSerenToLocation(delta);
      StoryMode.runNPCsInGameLoop(delta);
    };
    Global.app.ticker.add(Global.app.stateGameLoop);
  },
  runNPCsInGameLoop(delta) {
    StoryMode.NPCs[1].patrol(StoryMode.seren);
  },
  setupNPCs() {
    const imgPath = StoryMode.loader.resources.bugZi.url;
    const npc1 = new NPC(imgPath, 32, 32);
    StoryMode.NPCs.push(npc1);
    npc1.texture.x = 11 * 32;
    npc1.texture.y = 10 * 32;
    StoryMode.container.addChild(npc1.texture);

    const npc2 = new NPC(imgPath, 32, 32);
    StoryMode.NPCs.push(npc2);
    npc2.texture.x = 30 * 32;
    npc2.texture.y = 12 * 32;
    npc2.changeDirection('west');
    npc2.patrolCords = [
      { x: 28, y: 12 },
      { x: 28, y: 10 },
      { x: 30, y: 10 },
      { x: 30, y: 12 },
    ];
    StoryMode.container.addChild(npc2.texture);
  },
  setupCharacterSprite() {
    const textureWidth = 32;
    const textureHeight = 32;
    const serenBaseTexture = new PIXI.BaseTexture.from(
      StoryMode.loader.resources.seren.url
    );
    const frames = 4;

    StoryMode.serenAnim.standSouth = [];
    for (let i = 0; i < frames; i++) {
      StoryMode.serenAnim.standSouth.push(
        new PIXI.Texture(
          serenBaseTexture,
          new PIXI.Rectangle(
            i * textureWidth,
            0 * textureHeight,
            textureWidth,
            textureHeight
          )
        )
      );
    }

    StoryMode.serenAnim.standWest = [];
    for (let i = 0; i < frames; i++) {
      StoryMode.serenAnim.standWest.push(
        new PIXI.Texture(
          serenBaseTexture,
          new PIXI.Rectangle(
            i * textureWidth,
            1 * textureHeight,
            textureWidth,
            textureHeight
          )
        )
      );
    }

    StoryMode.serenAnim.standEast = [];
    for (let i = 0; i < frames; i++) {
      StoryMode.serenAnim.standEast.push(
        new PIXI.Texture(
          serenBaseTexture,
          new PIXI.Rectangle(
            i * textureWidth,
            2 * textureHeight,
            textureWidth,
            textureHeight
          )
        )
      );
    }

    StoryMode.serenAnim.standNorth = [];
    for (let i = 0; i < frames; i++) {
      StoryMode.serenAnim.standNorth.push(
        new PIXI.Texture(
          serenBaseTexture,
          new PIXI.Rectangle(
            i * textureWidth,
            3 * textureHeight,
            textureWidth,
            textureHeight
          )
        )
      );
    }

    StoryMode.seren = new PIXI.AnimatedSprite(StoryMode.serenAnim.standSouth);
    StoryMode.seren.animationSpeed = 0.175;
    StoryMode.seren.loop = true;
    StoryMode.seren.x = 0;
    StoryMode.seren.y = 128;
    StoryMode.container.addChild(StoryMode.seren);
  },
  setupAStar() {
    for (let i = 0; i < StoryMode.MapObj.container.children.length; i++) {
      const traverseArrIndex = StoryMode.MapObj.tileMapData.map[i] - 1;
      const traversable =
        StoryMode.MapObj.tileMapData.traversable[traverseArrIndex];
      const currentTile = StoryMode.MapObj.container.children[i];
      currentTile.buttonMode = true;
      currentTile.interactive = true;
      if (traversable === 1) {
        StoryMode.MapObj.container.children[i].on('pointerdown', function (e) {
          if (StoryMode.serenIsMoving) return;

          let npcAtLocation = false;
          StoryMode.NPCs.forEach((npc) => {
            if (
              npc.texture.x === currentTile.x &&
              npc.texture.y === currentTile.y
            ) {
              npcAtLocation = true;
              StoryMode.faceNPC = {
                x: npc.texture.x,
                y: npc.texture.y,
              };
            }
          });

          const graph = new Graph(StoryMode.MapObj.mainGraph);

          const startX =
            StoryMode.seren.x >= 0 ? Math.ceil(StoryMode.seren.x / 32) : 0;
          const startY =
            StoryMode.seren.y >= 0 ? Math.ceil(StoryMode.seren.y / 32) : 0;
          const start = graph.grid[startY][startX];

          const endX = currentTile.x >= 0 ? Math.ceil(currentTile.x / 32) : 0;
          const endY = currentTile.y >= 0 ? Math.ceil(currentTile.y / 32) : 0;

          const end = graph.grid[endY][endX];

          if (startX === endX && startY === endY) return;

          StoryMode.pathToLocation = astar.search(graph, start, end);

          if (npcAtLocation && StoryMode.pathToLocation.length === 1) {
            StoryMode.pathToLocation = [];
            StoryMode.haveSerenFaceNpc();
            return;
          }
          if (npcAtLocation) {
            StoryMode.pathToLocation.pop();
          }

          StoryMode.serenIsMoving = true;
          StoryMode.seren.play();
        });
      }
    }
  },
  moveSerenToLocation(delta) {
    if (!StoryMode.serenIsMoving) return;

    StoryMode.elapTimer += Global.app.ticker.elapsedMS;

    if (StoryMode.elapTimer < 10) return;

    StoryMode.elapTimer = 0;

    const directions = {
      UP: 0,
      RIGHT: 1,
      DOWN: 2,
      LEFT: 3,
    };

    const getNextNodeDirection = function () {
      let result = -1;
      // console.log(StoryMode.pathToLocation[0]);
      if (StoryMode.pathToLocation[0] === undefined) {
        return result;
      }
      const nextNode = [
        StoryMode.pathToLocation[0].x * 32,
        StoryMode.pathToLocation[0].y * 32,
      ];
      if (
        StoryMode.seren.x === nextNode[0] &&
        StoryMode.seren.y > nextNode[1]
      ) {
        result = directions.UP;
      } else if (
        StoryMode.seren.x < nextNode[0] &&
        StoryMode.seren.y === nextNode[1]
      ) {
        result = directions.RIGHT;
      } else if (
        StoryMode.seren.x === nextNode[0] &&
        StoryMode.seren.y < nextNode[1]
      ) {
        result = directions.DOWN;
      } else if (
        StoryMode.seren.x > nextNode[0] &&
        StoryMode.seren.y === nextNode[1]
      ) {
        result = directions.LEFT;
      }

      if (
        result === directions.UP &&
        StoryMode.seren.textures != StoryMode.serenAnim.standNorth
      ) {
        StoryMode.seren.textures = StoryMode.serenAnim.standNorth;
        StoryMode.seren.play();
      } else if (
        result === directions.RIGHT &&
        StoryMode.seren.textures != StoryMode.serenAnim.standEast
      ) {
        StoryMode.seren.textures = StoryMode.serenAnim.standEast;
        StoryMode.seren.play();
      } else if (
        result === directions.DOWN &&
        StoryMode.seren.textures != StoryMode.serenAnim.standSouth
      ) {
        StoryMode.seren.textures = StoryMode.serenAnim.standSouth;
        StoryMode.seren.play();
      } else if (
        result === directions.LEFT &&
        StoryMode.seren.textures != StoryMode.serenAnim.standWest
      ) {
        StoryMode.seren.textures = StoryMode.serenAnim.standWest;
        StoryMode.seren.play();
      }

      return result;
    };

    let nextNodeDirection = getNextNodeDirection();

    if (StoryMode.pathToLocation[0] === undefined) {
      StoryMode.serenIsMoving = false;
      StoryMode.seren.gotoAndStop(0);
      return;
    }

    let nextNodeLocationX = StoryMode.pathToLocation[0].x * 32;
    let nextNodeLocationY = StoryMode.pathToLocation[0].y * 32;

    StoryMode.NPCs.forEach((npc) => {
      const nextNodeGridX = StoryMode.pathToLocation[0].x;
      const nextNodeGridY = StoryMode.pathToLocation[0].y;
      const npcGridX = npc.texture.x !== 0 ? Math.floor(npc.texture.x / 32) : 0;
      const npcGridY = npc.texture.y !== 0 ? Math.floor(npc.texture.y / 32) : 0;
      if (nextNodeGridX === npcGridX && nextNodeGridY === npcGridY) {
        const startX =
          StoryMode.seren.x !== 0 ? Math.floor(StoryMode.seren.x / 32) : 0;
        const startY =
          StoryMode.seren.y !== 0 ? Math.floor(StoryMode.seren.y / 32) : 0;
        const pathLength = StoryMode.pathToLocation.length;
        const endX = StoryMode.pathToLocation[pathLength - 1].x;
        const endY = StoryMode.pathToLocation[pathLength - 1].y;
        StoryMode.MapObj.mainGraph[npcGridY][npcGridX] = 0;
        const graph = new Graph(StoryMode.MapObj.mainGraph);
        StoryMode.MapObj.mainGraph[npcGridY][npcGridX] = 1;
        const start = graph.grid[startY][startX];
        const end = graph.grid[endY][endX];
        StoryMode.pathToLocation = astar.search(graph, start, end);
        nextNodeDirection = getNextNodeDirection();
        if (StoryMode.pathToLocation[0] !== undefined) {
          nextNodeLocationX = StoryMode.pathToLocation[0].x * 32;
          nextNodeLocationY = StoryMode.pathToLocation[0].y * 32;
        }
      }
    });

    if (StoryMode.pathToLocation[0] === undefined) {
      StoryMode.seren.gotoAndStop(0);
      return;
    }
    const moveSpeed = 2;
    if (nextNodeDirection === directions.UP) {
      StoryMode.seren.y -= moveSpeed;
      if (StoryMode.seren.y < nextNodeLocationY) {
        StoryMode.seren.y = nextNodeLocationY;
      }
    } else if (nextNodeDirection === directions.RIGHT) {
      StoryMode.seren.x += moveSpeed;
      if (StoryMode.seren.x > nextNodeLocationX) {
        StoryMode.seren.x = nextNodeLocationX;
      }
    } else if (nextNodeDirection === directions.DOWN) {
      StoryMode.seren.y += moveSpeed;
      if (StoryMode.seren.y > nextNodeLocationY) {
        StoryMode.seren.y = nextNodeLocationY;
      }
    } else if (nextNodeDirection === directions.LEFT) {
      StoryMode.seren.x -= moveSpeed;
      if (StoryMode.seren.x < nextNodeLocationX) {
        StoryMode.seren.x = nextNodeLocationX;
      }
    }

    if (
      StoryMode.seren.x === nextNodeLocationX &&
      StoryMode.seren.y === nextNodeLocationY
    ) {
      StoryMode.pathToLocation.shift();
    }
    if (StoryMode.pathToLocation.length === 0) {
      StoryMode.serenIsMoving = false;
      StoryMode.pathToLocation = [];
      if (StoryMode.faceNPC !== null) {
        StoryMode.haveSerenFaceNpc();
        StoryMode.faceNPC = null;
      }
      StoryMode.seren.gotoAndStop(0);
    }
  },
  haveSerenFaceNpc() {
    if (
      StoryMode.seren.x > StoryMode.faceNPC.x &&
      StoryMode.seren.y === StoryMode.faceNPC.y
    ) {
      StoryMode.seren.textures = StoryMode.serenAnim.standWest;
    } else if (
      StoryMode.seren.x < StoryMode.faceNPC.x &&
      StoryMode.seren.y === StoryMode.faceNPC.y
    ) {
      StoryMode.seren.textures = StoryMode.serenAnim.standEast;
    } else if (
      StoryMode.seren.x === StoryMode.faceNPC.x &&
      StoryMode.seren.y > StoryMode.faceNPC.y
    ) {
      StoryMode.seren.textures = StoryMode.serenAnim.standNorth;
    } else if (
      StoryMode.seren.x === StoryMode.faceNPC.x &&
      StoryMode.seren.y < StoryMode.faceNPC.y
    ) {
      StoryMode.seren.textures = StoryMode.serenAnim.standSouth;
    }
  },
};
