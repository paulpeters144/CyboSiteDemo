let background2;
const socket = io();
let container;
const sprites = {};
const JoinGame = {
  start() {
    container = new PIXI.Container();

    Global.app.stage.addChild(container);
    const backgrounPath = 'assets/RSPGame/Login.jpg';
    const landscapeTexture = PIXI.Texture.from(backgrounPath);
    const texture2 = new PIXI.Texture(landscapeTexture);
    background2 = new PIXI.Sprite(texture2);
    background2.scale.set(1.5, 1.5);
    container.addChild(background2);

    // let btnPath = "assets/RSPGame/" + fileName;

    const woodSignRP = PIXI.Texture.from('assets/RSPGame/woodSign.png');
    const texture = new PIXI.Texture(woodSignRP);
    const woodSign = new PIXI.Sprite(texture);
    woodSign.scale.set(1, 1);
    woodSign.x = getScaledX(500);
    woodSign.y = getScaledY(-400);
    container.addChild(woodSign);

    // let btnUp1 = getImg("btnUp.png", 570, 235, 1.5);

    const btnPath = PIXI.Texture.from('assets/RSPGame/btnUp.png');
    const btnPathTexture = new PIXI.Texture(btnPath);
    const btnUp1 = new PIXI.Sprite(btnPathTexture);
    btnUp1.scale.set(1, 1);
    btnUp1.x = 660; // getScaledX(570);
    btnUp1.y = 235; // getScaledY(235);

    btnUp1.interactive = true;
    btnUp1.buttonMode = true;
    btnUp1.visible = false;
    container.addChild(btnUp1);

    // let btnUp2 = getImg("btnUp.png", 760, 235, 1.5);

    const btnUp2RP = PIXI.Texture.from('assets/RSPGame/btnUp.png');
    const btnUp2Texture = new PIXI.Texture(btnUp2RP);
    const btnUp2 = new PIXI.Sprite(btnUp2Texture);
    btnUp2.scale.set(1, 1);
    btnUp2.x = 810; // getScaledX(760);
    btnUp2.y = 235; // getScaledY(235);

    btnUp2.interactive = true;
    btnUp2.buttonMode = true;
    btnUp2.visible = false;
    container.addChild(btnUp2);

    const createText = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 52,
      fill: '#ffffff', // gradient
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 340,
    });

    const joinText = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 52,
      fill: '#ffffff', // gradient
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 340,
    });

    const richTextC = new PIXI.Text('Create', createText);
    richTextC.visible = false;

    const richTextJ = new PIXI.Text('Join', joinText);
    richTextJ.visible = false;

    richTextC.x = btnUp1.x + 10;
    richTextC.y = btnUp1.y + 8;

    richTextJ.x = btnUp2.x + 33;
    richTextJ.y = btnUp2.y + 8;

    btnUp1.on('pointerdown', function (e) {
      richTextC.y += 3;
      btnUp1.y += 3;
    });
    btnUp1.on('pointerup', function (e) {
      richTextC.y -= 3;
      btnUp1.y -= 3;
      openModal('create');
    });

    btnUp2.on('pointerdown', function (e) {
      richTextJ.y += 3;
      btnUp2.y += 3;
    });
    btnUp2.on('pointerup', function (e) {
      richTextJ.y -= 3;
      btnUp2.y -= 3;
      openModal('join');
    });

    container.addChild(richTextC);
    container.addChild(richTextJ);

    Global.app.animationUpdate = function (delta) {
      if (woodSign.y < 0) {
        woodSign.y += 7 * delta;
      }
      if (woodSign.y >= 0 && !btnUp1.visible) {
        btnUp1.visible = true;
        btnUp2.visible = true;
        richTextC.visible = true;
        richTextJ.visible = true;
        woodSign.y = 0;
      }
    };
    Global.app.ticker.add(Global.app.animationUpdate);
  },
};

socket.on('noHash', (msg) => {
  noRoomHash();
});

function noRoomHash() {
  alert('No room found.');
}

function getScaledX(x) {
  const ratioX = Global.windowW / Global.virtualW;
  return Math.round(x * ratioX);
}

function getScaledY(y) {
  const ratioY = Global.windowH / Global.virtualH;
  return Math.round(y * ratioY);
}

function openModal(type) {
  $('#signinModal').modal({
    backdrop: 'static',
  });
  if (type === 'create') {
    document.getElementById('enterHash').style.display = 'none';
    document.getElementById('gameHash').style.display = 'none';
  } else {
    document.getElementById('enterHash').style.display = 'block';
    document.getElementById('gameHash').style.display = 'block';
  }
}

function getImg(fileName, x, y, scale) {
  const btnPath = `assets/RSPGame/${fileName}`;

  const rawPath = PIXI.Texture.from(btnPath);
  const texture = new PIXI.Texture(rawPath);
  const imgRes = new PIXI.Sprite(texture);
  imgRes.scale.set(scale, scale);
  imgRes.x = getScaledX(x);
  imgRes.y = getScaledY(y);
  return imgRes;
}

socket.on('nextStage', (msg) => {
  closeModal();
  Global.app.stage.removeChild(container);
  Global.app.ticker.remove(Global.app.animationUpdate);
  gameEngine(State.PLAYGAME);
});

socket.on('playerInfo', (msg) => {
  const msgArr = msg.split(' ');
  const p = {};
  Global.player = p;
  Global.player.sockId = msgArr[0];
  Global.player.name = msgArr[1];
  Global.player.room = msgArr[2];
  Global.player.wins = 0;
  Global.player.ready = false;
  Global.player.cardPlayed = '';

  console.log(JSON.stringify(Global.player));
});
