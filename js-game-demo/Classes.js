class GameMap {
  constructor(tileSheet, mapJsonData) {
    this.tileMapData = mapJsonData;
    this.doneLoading = false;
    this.tileSheet = tileSheet;
    this.mapGraph = null;
    this.container = new PIXI.Container();
    this.loadAfterjsonFetch();
    this.CreateMap();
  }

  loadAfterjsonFetch() {
    const tileNumWidth = this.tileMapData.width;
    const tileNumHeight = this.tileMapData.height;
    const { tileWidth } = this.tileMapData;
    const { tileHeight } = this.tileMapData;
    for (let i = 0; i < 5; i++) {
      for (let x = 0; x < 6; x++) {
        const tile = new PIXI.Texture(
          this.tileSheet,
          new PIXI.Rectangle(
            x * tileWidth,
            i * tileHeight,
            tileWidth,
            tileHeight
          )
        );
        StoryMode.textMap.push(tile);
      }
    }
    const mapArr = this.tileMapData.map;
    const c = 0;
    for (let i = 0; i < tileNumHeight; i++) {
      for (let x = 0; x < tileNumWidth; x++) {
        const tileIndex = i * tileNumWidth + x;
        const mapTileTypeIndex = mapArr[tileIndex] - 1;
        const isTraversable =
          this.tileMapData.traversable[mapTileTypeIndex] === 1;
        const nextTile = new PIXI.Sprite(StoryMode.textMap[mapTileTypeIndex]);
        nextTile.x = x * nextTile.width;
        nextTile.y = i * nextTile.height;
        this.container.addChild(nextTile);
      }
    }
  }

  CreateMap() {
    this.mainGraph = [];
    let rowArr = [];
    let rowCounter = 0;
    const twoDMapArr = this.tileMapData.map;
    for (let i = 0; i < twoDMapArr.length; i++) {
      const mapType = twoDMapArr[i] - 1;
      const traverseable = this.tileMapData.traversable[mapType];
      rowCounter++;
      rowArr.push(traverseable);
      if (rowCounter === 40) {
        rowCounter = 0;
        this.mainGraph.push(rowArr);
        rowArr = [];
      }
    }

    this.doneLoading = true;
  }
}

class NPC {
  constructor(texturePath, imageWidth, imageHeight) {
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.texture = null;
    this.StandOnly = true;
    this.patrolCords = [];
    this.dialogueArray = null;
    this.npcAnim = {};
    this.elapTimer = 0;
    this.patrolling = true;
    this.secondsBetweenPatrols = 5;
    this.moveSpeed = 0.5;
    this.directions = {};
    this.createAnimation(texturePath);
  }

  createAnimation(texturePath) {
    this.directions = {
      UP: 0,
      RIGHT: 1,
      DOWN: 2,
      LEFT: 3,
    };

    const npcBaseTexture = new PIXI.BaseTexture.from(texturePath);
    const frames = 4;
    const w = this.imageWidth;
    const h = this.imageHeight;

    const createAnimation = (frames, imageRow) => {
      const result = [];
      for (let i = 0; i < frames; i++) {
        result.push(
          new PIXI.Texture(
            npcBaseTexture,
            new PIXI.Rectangle(i * w, imageRow * h, w, h)
          )
        );
      }
      return result;
    };

    this.npcAnim.north = createAnimation(frames, 3);
    this.npcAnim.east = createAnimation(frames, 2);
    this.npcAnim.south = createAnimation(frames, 0);
    this.npcAnim.west = createAnimation(frames, 1);

    this.texture = new PIXI.AnimatedSprite(this.npcAnim.south);
    this.texture.animationSpeed = 0.15;
    this.texture.loop = true;
  }

  changeDirection(direction) {
    this.texture.textures = this.npcAnim[direction];
  }

  patrol(characterTexture) {
    if (this.patrolCords.length < 2 || !this.patrolling) {
      return;
    }
    if (this.adjacentNodeContains(characterTexture)) {
      this.texture.gotoAndStop(0);
      return;
    }

    this.elapTimer += Global.app.ticker.elapsedMS;

    if (this.secondsBetweenPatrols * 1000 < this.elapTimer) {
      const npcCurrentX = this.texture.x;
      const npcCurrentY = this.texture.y;
      const nextCordX = this.patrolCords[0].x * 32;
      const nextCordY = this.patrolCords[0].y * 32;
      if (npcCurrentX === nextCordX && npcCurrentY === nextCordY) {
        this.elapTimer = 0;
        const currentNode = this.patrolCords[0];
        this.patrolCords.shift();
        this.patrolCords.push(currentNode);
        this.texture.gotoAndStop(0);
      } else {
        const nextDirection = this.getNextDirectionToFace(
          npcCurrentX,
          npcCurrentY,
          nextCordX,
          nextCordY
        );
        this.moveDirection(nextDirection, nextCordX, nextCordY);
      }
    }
  }

  moveDirection(nextDirection, nextCordX, nextCordY) {
    if (!this.texture.playing) {
      this.texture.play();
    }
    if (
      nextDirection === this.directions.UP &&
      this.texture.textures != this.npcAnim.north
    ) {
      this.texture.textures = this.npcAnim.north;
    } else if (
      nextDirection === this.directions.RIGHT &&
      this.texture.textures != this.npcAnim.east
    ) {
      this.texture.textures = this.npcAnim.east;
    } else if (
      nextDirection === this.directions.DOWN &&
      this.texture.textures != this.npcAnim.south
    ) {
      this.texture.textures = this.npcAnim.south;
    } else if (
      nextDirection === this.directions.LEFT &&
      this.texture.textures != this.npcAnim.west
    ) {
      this.texture.textures = this.npcAnim.west;
    }

    if (nextDirection === this.directions.UP) {
      this.texture.y -= this.moveSpeed;
      if (this.texture.y < nextCordY) {
        this.texture.y = nextCordY;
      }
    } else if (nextDirection === this.directions.RIGHT) {
      this.texture.x += this.moveSpeed;
      if (this.texture.x > nextCordX) {
        this.texture.x = nextCordX;
      }
    } else if (nextDirection === this.directions.DOWN) {
      this.texture.y += this.moveSpeed;
      if (this.texture.y > nextCordY) {
        this.texture.y = nextCordY;
      }
    } else if (nextDirection === this.directions.LEFT) {
      this.texture.x -= this.moveSpeed;
      if (this.texture.x < nextCordX) {
        this.texture.x = nextCordX;
      }
    }
  }

  getNextDirectionToFace(currentX, currentY, patrolCordsX, patrolCordsY) {
    let result = -1;
    const nextNode = [patrolCordsX, patrolCordsY];

    if (currentX === nextNode[0] && currentY > nextNode[1]) {
      result = this.directions.UP;
    } else if (currentX < nextNode[0] && currentY === nextNode[1]) {
      result = this.directions.RIGHT;
    } else if (currentX === nextNode[0] && currentY < nextNode[1]) {
      result = this.directions.DOWN;
    } else if (currentX > nextNode[0] && currentY === nextNode[1]) {
      result = this.directions.LEFT;
    }

    return result;
  }

  adjacentNodeContains(characterTexture) {
    const currentPosX = this.texture.x;
    const currentPosY = this.texture.y;
    const nextPosX = this.patrolCords[1].x * 32;
    const nextPosY = this.patrolCords[1].y * 32;
    const characterX = characterTexture.x;
    const characterY = characterTexture.y;
    if (
      currentPosX - 64 < characterX &&
      currentPosX + 64 > characterX &&
      currentPosY - 64 < characterY &&
      currentPosY + 64 > characterY
    ) {
      return true;
    }
    return false;
  }
}

// && currentPosX > characterX  - 32 &&
//             currentPosY < characterY + 32 && currentPosY > characterY  - 32
