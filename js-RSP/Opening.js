let gameTitle;
const boardText = 'Click to begin...';
let background;
let richText;
let blinkCounter = 0;
let moveLeft = true;
const OpenScreen = {
  start() {
    container = new PIXI.Container();
    Global.app.stage.addChild(container);
    const backgroundPath = 'assets/RSPGame/StartScreen.jpg';
    const landscapeTexture = PIXI.Texture.from(backgroundPath);
    const texture2 = new PIXI.Texture(landscapeTexture);
    background = new PIXI.Sprite(texture2);
    background.cursor = 'hover';
    background.interactive = true;
    background.buttonMode = true;

    background.on('pointerdown', function (e) {
      Global.app.stage.removeChild(container);
      Global.app.ticker.remove(Global.app.animationUpdate);
      gameEngine(State.JOINGAME);
    });

    background.scale.set(Global.imgScale, Global.imgScale);
    container.addChild(background);

    const gameTitle = getGameTitle();
    container.addChild(gameTitle);
    const box = getTextBoard();
    container.addChild(box);

    const fontStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 52,
      fill: '#ffffff', // gradient
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 340,
    });

    richText = new PIXI.Text('', fontStyle);
    richText.x = getScaledX(550);
    richText.y = getScaledY(600);

    container.addChild(richText);

    blinkLoop();

    // var myInterval = setInterval(function () {
    //   let winW = parseInt(Global.windowW);
    //   if (moveLeft) {
    //     gameTitle.x += 2;
    //     if (gameTitle.x >= (winW - gameTitle.width)) {
    //       moveLeft = false;
    //     }
    //   } else {
    //     gameTitle.x -= 2;
    //     if (gameTitle.x <= 0) {
    //       moveLeft = true;
    //     }
    //   }
    // }, 1);

    Global.app.animationUpdate = function (delta) {
      const winW = parseInt(Global.windowW);
      if (moveLeft) {
        gameTitle.x += 3 * delta;
        if (gameTitle.x >= winW - gameTitle.width) {
          moveLeft = false;
        }
      } else {
        gameTitle.x -= 3 * delta;
        if (gameTitle.x <= 0) {
          moveLeft = true;
        }
      }
    };

    Global.app.ticker.add(Global.app.animationUpdate);
  },
};

function blinkLoop() {
  const myInterval = setInterval(function () {
    typeText();
  }, 75);

  var typeText = function () {
    const baseText = 'Click to begin...';
    richText.text = richText.text.replace('_', '');
    const nextChar = baseText[richText.text.length];
    if (baseText.length === richText.text.length) {
      clearInterval(myInterval);

      const blinkIntveral = setInterval(function name() {
        blink();
      }, 500);

      var blink = function () {
        if (blinkCounter < 7) {
          if (!richText.visible) {
            richText.visible = true;
          } else {
            richText.visible = false;
          }
          blinkCounter++;
        } else {
          clearInterval(blinkIntveral);
          blinkCounter = 0;
          richText.visible = true;
          richText.text = '';
          blinkLoop();
        }
      };
    } else {
      richText.text += `${nextChar}_`;
    }
  };
}

function getWindowH(width) {
  let result = 1;
  // 1.78 or less keeps a close 16:9 aspect ratio
  while (width / result > 1.78) {
    result += 1;
  }
  return result;
}

function getGameTitle() {
  const texture = PIXI.Texture.from('assets/RSPGame/GameTitle.jpg');
  gameTitle = new PIXI.Sprite(texture);
  gameTitle.scale.set(Global.imgScale, Global.imgScale);
  // gameTitle.animationSpeed = .5;
  // gameTitle.anchor.set(0.5);

  gameTitle.x = 0; // parseInt(Global.app.view.style.width.replace("px", "")) / 2;

  gameTitle.y = getScaledY(55);
  return gameTitle;
}

function getTextBoard() {
  const texture = PIXI.Texture.from('assets/RSPGame/LargeDBox.png');
  const imgRes = new PIXI.Sprite(texture);
  imgRes.scale.set(Global.imgScale * 0.6, Global.imgScale * 0.6);
  imgRes.anchor.set(0.5);

  imgRes.x = parseInt(Global.app.view.style.width.replace('px', '')) / 2;

  imgRes.y = getScaledY(615);
  return imgRes;
}

function getScaledX(x) {
  const ratioX = Global.windowW / Global.virtualW;
  return Math.round(x * ratioX);
}

function getScaledY(y) {
  const ratioY = Global.windowH / Global.virtualH;
  return Math.round(y * ratioY);
}
