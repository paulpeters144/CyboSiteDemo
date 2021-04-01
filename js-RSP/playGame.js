let waitingText;
let blinkElip;
let dBoxSprite;
let kidSpriteP;
let kidSpriteO;
let kidRevealP;
let kidRevealO;
let rspSign;
let rockCardP;
let paperCardP;
let sciCardP;
let sciCardO;
let rockCardO;
let paperCardO;
let rockPic;
let paperPic;
let sciPic;
let playBtnR;
let playBtnP;
let playBtnS;
let thoughtBubP;
let thoughtBubO;
let thinkTextP;
let thinkTextO;
let thinkElip;
let statsBoard;
let thinkTextStyle;
let statStyle;
let statText;
let waitStyle;
let optionStyle;
let winnerText;
let btnUp1;
let btnUp2;
let leaveText;
let rematchText;

const PlayGame = {
  start() {
    container = new PIXI.Container();

    Global.app.stage.addChild(container);
    const backgrounPath = 'assets/RSPGame/PlayGame.jpg';
    const landscapeTexture = PIXI.Texture.from(backgrounPath);
    const texture = new PIXI.Texture(landscapeTexture);
    background = new PIXI.Sprite(texture);
    background.scale.set(1.5, 1.5);
    container.addChild(background);

    const dBoxPath = 'assets/RSPGame/LargeDBox.png';
    const getDBox = PIXI.Texture.from(dBoxPath);
    const dBoxTexture = new PIXI.Texture(getDBox);
    dBoxSprite = new PIXI.Sprite(dBoxTexture);
    dBoxSprite.scale.set(1.5, 1.5);
    dBoxSprite.x = getScaledX(340);
    dBoxSprite.y = getScaledY(180);
    container.addChild(dBoxSprite);

    waitStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 72,
      fill: '#ffffff', // gradient
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 640,
    });

    optionStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 62,
      fill: '#ffffff', // gradient
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 640,
    });

    waitingText = new PIXI.Text('Waiting for opponent', waitStyle);
    waitingText.needsUpdating = true;
    waitingText.x = getScaledX(455);
    waitingText.y = getScaledY(285);

    blinkElip = setInterval(() => {
      const defaultText = 'Waiting for opponent';
      if (waitingText.text !== 'Waiting for opponent...') {
        waitingText.text += '.';
      } else {
        waitingText.text = defaultText;
      }
    }, 350);

    container.addChild(waitingText);

    // setupGame();

    Global.app.animationUpdate = function (delta) {};
    Global.app.ticker.add(Global.app.animationUpdate);
  },
};

socket.on('ready', (msg) => {
  socket.emit('playerGameInfo', JSON.stringify(Global.player));
});

socket.on('playerData', (msg) => {
  const jObject = JSON.parse(msg);
  const o = {};
  Global.opponent = o;
  Global.opponent.sockId = jObject.sockId;
  Global.opponent.name = jObject.name;
  Global.opponent.wins = 0;
  console.log(JSON.stringify(Global.opponent));
  clearInterval(blinkElip);
  container.removeChild(waitingText);
  dBoxSprite.visible = false;
  setupGame();
});

function getScaledX(x) {
  const ratioX = Global.windowW / Global.virtualW;
  return Math.round(x * ratioX);
}

function getScaledY(y) {
  const ratioY = Global.windowH / Global.virtualH;
  return Math.round(y * ratioY);
}

function setupGame() {
  // setup kid images...
  kidSpriteP = setupImg('assets/RSPGame/redHair.png');
  kidSpriteP.scale.set(1.5 * 0.88, 1.5 * 0.88);

  kidSpriteP.x = 450;
  kidSpriteP.y = 500;

  kidSpriteO = setupImg('assets/RSPGame/redHair.png');
  kidSpriteO.scale.set(1.5 * 0.88, 1.5 * 0.88);

  kidSpriteO.x = 900;
  kidSpriteO.y = 330;

  kidSpriteO.anchor.x = 1;
  kidSpriteO.scale.x *= -1;

  container.addChild(kidSpriteP);
  container.addChild(kidSpriteO);

  kidRevealP = setupImg('assets/RSPGame/redReveal.png');
  kidRevealP.x = 483;
  kidRevealP.y = 472;
  kidRevealP.scale.set(1.5 * 0.88, 1.5 * 0.88);
  kidRevealP.visible = false;

  kidRevealO = setupImg('assets/RSPGame/redReveal.png');
  kidRevealO.x = 842;
  kidRevealO.y = 299;
  kidRevealO.scale.set(1.5 * 0.9, 1.5 * 0.9);
  kidRevealO.anchor.x = 1;
  kidRevealO.scale.x *= -1;
  kidRevealO.visible = false;

  container.addChild(kidRevealO);
  container.addChild(kidRevealP);

  const baseCardPosXP = 615;
  const baseCardPosYP = 505;

  rockCardP = setupImg('assets/RSPGame/rockCard.png');
  rockCardP.x = baseCardPosXP;
  rockCardP.y = baseCardPosYP;
  rockCardP.visible = false;
  container.addChild(rockCardP);

  const baseCardPosXO = 860;
  const baseCardPosYO = 335;

  rockCardO = setupImg('assets/RSPGame/rockCard.png');
  rockCardO.x = baseCardPosXO;
  rockCardO.y = baseCardPosYO - 5;
  rockCardO.visible = false;
  container.addChild(rockCardO);

  paperCardP = setupImg('assets/RSPGame/paperCard.png');
  paperCardP.x = baseCardPosXP;
  paperCardP.y = baseCardPosYP - 5;
  paperCardP.visible = false;
  container.addChild(paperCardP);

  paperCardO = setupImg('assets/RSPGame/paperCard.png');
  paperCardO.x = baseCardPosXO;
  paperCardO.y = baseCardPosYO;
  paperCardO.visible = false;
  container.addChild(paperCardO);

  sciCardP = setupImg('assets/RSPGame/scissorCard.png');
  sciCardP.x = baseCardPosXP + 3;
  sciCardP.y = baseCardPosYP - 5;
  sciCardP.visible = false;
  container.addChild(sciCardP);

  sciCardO = setupImg('assets/RSPGame/scissorCard.png');
  sciCardO.x = baseCardPosXO + 3;
  sciCardO.y = baseCardPosYO - 5;
  sciCardO.visible = false;
  container.addChild(sciCardO);

  rspSign = setupImg('assets/RSPGame/rspSign.png');
  rspSign.x = 990;
  rspSign.y = 625;
  container.addChild(rspSign);

  statsBoard = setupImg('assets/RSPGame/statsBoard.png');
  statsBoard.x = 25;
  statsBoard.y = 25;
  container.addChild(statsBoard);

  statStyle = new PIXI.TextStyle({
    fontFamily: 'vt',
    fontSize: 42,
    fill: '#000000', // gradient
    stroke: '#4a1850',
    wordWrap: true,
    wordWrapWidth: 340,
  });

  statText = new PIXI.Text(
    `${Global.player.name} wins: ${Global.player.wins}\n\n${Global.opponent.name} wins: ${Global.opponent.wins}`,
    statStyle
  );

  statText.x = 60;
  statText.y = 70;
  container.addChild(statText);

  const cardOffsetX = 20;
  const cardOffsetY = 10;

  playBtnR = setupImg('assets/RSPGame/playBtnUp.png');
  playBtnR.x = rspSign.x + 75;
  playBtnR.y = rspSign.y + 35;
  playBtnR.interactive = true;
  playBtnR.buttonMode = true;
  container.addChild(playBtnR);

  rockPic = setupImg('assets/RSPGame/rock.png');
  rockPic.x = playBtnR.x + cardOffsetX;
  rockPic.y = playBtnR.y + cardOffsetY;
  container.addChild(rockPic);

  playBtnR.on('pointerdown', function (e) {
    playBtnR.y += 3;
    rockPic.y += 3;
  });
  playBtnR.on('pointerup', function (e) {
    playBtnR.y -= 3;
    rockPic.y -= 3;

    Global.player.ready = true;
    Global.player.ready = true;
    thinkTextP.visible = false;
    thoughtBubP.visible = false;

    btnVisibleStats(false);
    Global.player.cardPlayed = 'rock';
    socket.emit('playerReady', 'rock');
    if (Global.opponent.ready) {
      revealCardHands();
      updatePlayerScore();
      endRoundIn(3);
    }
  });

  playBtnP = setupImg('assets/RSPGame/playBtnUp.png');
  playBtnP.x = playBtnR.x + 125;
  playBtnP.y = playBtnR.y;
  playBtnP.interactive = true;
  playBtnP.buttonMode = true;
  container.addChild(playBtnP);

  paperPic = setupImg('assets/RSPGame/paper.png');
  paperPic.x = playBtnP.x + cardOffsetX;
  paperPic.y = playBtnP.y + cardOffsetY;
  container.addChild(paperPic);

  playBtnP.on('pointerdown', function (e) {
    playBtnP.y += 3;
    paperPic.y += 3;
  });
  playBtnP.on('pointerup', function (e) {
    playBtnP.y -= 3;
    paperPic.y -= 3;

    Global.player.ready = true;
    Global.player.ready = true;
    thinkTextP.visible = false;
    thoughtBubP.visible = false;

    btnVisibleStats(false);
    Global.player.cardPlayed = 'paper';
    socket.emit('playerReady', 'paper');
    if (Global.opponent.ready) {
      revealCardHands();
      updatePlayerScore();
      endRoundIn(3);
    }
  });

  playBtnS = setupImg('assets/RSPGame/playBtnUp.png');
  playBtnS.x = playBtnP.x + 125;
  playBtnS.y = playBtnP.y;
  playBtnS.interactive = true;
  playBtnS.buttonMode = true;
  container.addChild(playBtnS);

  sciPic = setupImg('assets/RSPGame/scissors.png');
  sciPic.x = playBtnS.x + cardOffsetX;
  sciPic.y = playBtnS.y + cardOffsetY;
  container.addChild(sciPic);

  playBtnS.on('pointerdown', function (e) {
    playBtnS.y += 3;
    sciPic.y += 3;
  });
  playBtnS.on('pointerup', function (e) {
    playBtnS.y -= 3;
    sciPic.y -= 3;

    Global.player.ready = true;
    Global.player.ready = true;
    thinkTextP.visible = false;
    thoughtBubP.visible = false;

    btnVisibleStats(false);
    Global.player.cardPlayed = 'sci';
    socket.emit('playerReady', 'sci');
    if (Global.opponent.ready) {
      revealCardHands();
      updatePlayerScore();
      endRoundIn(3);
    }
  });

  thoughtBubP = setupImg('assets/RSPGame/dialogueBx.png');
  thoughtBubP.x = 560;
  thoughtBubP.y = 450;
  container.addChild(thoughtBubP);

  thoughtBubO = setupImg('assets/RSPGame/dialogueBx.png');
  thoughtBubO.x = 880;
  thoughtBubO.y = 280;
  thoughtBubO.anchor.x = 1;
  thoughtBubO.scale.x *= -1;
  container.addChild(thoughtBubO);

  thinkTextStyle = new PIXI.TextStyle({
    fontFamily: 'vt',
    fontSize: 72,
    fill: '#000000', // gradient
    stroke: '#4a1850',
    wordWrap: true,
    wordWrapWidth: 340,
  });

  thinkTextP = new PIXI.Text('...', thinkTextStyle);
  thinkTextP.x = thoughtBubP.x + 23;
  thinkTextP.y = thoughtBubP.y - 10;
  container.addChild(thinkTextP);

  thinkTextO = new PIXI.Text('...', thinkTextStyle);
  thinkTextO.x = thoughtBubO.x + 23;
  thinkTextO.y = thoughtBubO.y - 10;
  container.addChild(thinkTextO);

  thinkElip = setInterval(() => {
    const defaultText = '';
    if (thinkTextP.text !== '...') {
      thinkTextP.text += '.';
    } else {
      thinkTextP.text = defaultText;
    }

    if (thinkTextO.text !== '...') {
      thinkTextO.text += '.';
    } else {
      thinkTextO.text = defaultText;
    }
  }, 350);
}

function revealCardHands() {
  kidSpriteP.visible = false;
  kidSpriteO.visible = false;

  kidRevealO.visible = true;
  kidRevealP.visible = true;
  const o = Global.opponent.cardPlayed;
  const p = Global.player.cardPlayed;
  if (p === 'rock') {
    rockCardP.visible = true;
  } else if (p === 'paper') {
    paperCardP.visible = true;
  } else {
    sciCardP.visible = true;
  }

  if (o === 'rock') {
    rockCardO.visible = true;
  } else if (o === 'paper') {
    paperCardO.visible = true;
  } else {
    sciCardO.visible = true;
  }
}

function setupImg(path) {
  const texturePath = PIXI.Texture.from(path);
  const texture = new PIXI.Texture(texturePath);
  return new PIXI.Sprite(texture);
}

socket.on('oppReady', (msg) => {
  Global.opponent.ready = true;
  thinkTextO.visible = false;
  thoughtBubO.visible = false;
  Global.opponent.cardPlayed = msg;
  Global.opponent.ready = true;
  if (Global.player.ready) {
    revealCardHands();
    updatePlayerScore();
    endRoundIn(3);
  }
});

function updatePlayerScore() {
  const o = Global.opponent.cardPlayed;
  const p = Global.player.cardPlayed;
  const cardsPlayed = `${p} ${o}`;
  switch (cardsPlayed) {
    case 'rock rock':
      /* do nothing */ break;
    case 'rock paper':
      Global.opponent.wins++;
      break;
    case 'rock sci':
      Global.player.wins++;
      break;
    case 'paper rock':
      Global.player.wins++;
      break;
    case 'paper paper':
      /* do nothing */ break;
    case 'paper sci':
      Global.opponent.wins++;
      break;
    case 'sci rock':
      Global.opponent.wins++;
      break;
    case 'sci paper':
      Global.player.wins++;
      break;
    case 'sci sci ':
      /* do nothing */ break;
  }
  statText.text =
    `${Global.player.name} wins: ${Global.player.wins}` +
    `\n\n${Global.opponent.name} wins: ${Global.opponent.wins}`;
}

function endRoundIn(seconds) {
  const mili = seconds * 1000;
  const endRound = setTimeout(() => {
    if (Global.player.wins === 5 || Global.opponent.wins === 5) {
      showGameIsOver();
    } else {
      btnVisibleStats(true);

      kidSpriteP.visible = true;
      kidSpriteO.visible = true;
      thinkTextP.visible = true;
      thoughtBubP.visible = true;
      thinkTextO.visible = true;
      thoughtBubO.visible = true;

      kidRevealO.visible = false;
      kidRevealP.visible = false;
      rockCardP.visible = false;
      paperCardP.visible = false;
      sciCardP.visible = false;
      rockCardO.visible = false;
      paperCardO.visible = false;
      sciCardO.visible = false;

      Global.player.ready = false;
      Global.opponent.ready = false;
    }
  }, mili);
}

function showGameIsOver() {
  makeEverythingVisible(false);
  let gameWinner = '';
  if (Global.player.wins > Global.opponent.wins) {
    gameWinner = Global.player.name;
  } else {
    gameWinner = Global.opponent.name;
  }

  dBoxSprite.visible = true;
  winnerText = new PIXI.Text(`${gameWinner} won!`, waitStyle);
  winnerText.needsUpdating = true;
  winnerText.x = getScaledX(495);
  winnerText.y = getScaledY(295);

  container.addChild(winnerText);

  const btnUp1RP = PIXI.Texture.from('assets/RSPGame/btnUp.png');
  const textureB1 = new PIXI.Texture(btnUp1RP);
  btnUp1 = new PIXI.Sprite(textureB1);
  btnUp1.scale.set(1.5, 1.5);
  btnUp1.x = 670; // parseInt(x);
  btnUp1.y = 415; // getScaledY(y);
  btnUp1.interactive = true;
  btnUp1.buttonMode = true;
  container.addChild(btnUp1);

  btnUp1.on('pointerup', function (e) {
    socket.emit('playerLeft', '');
    location.reload();
  });

  const rawPath = PIXI.Texture.from('assets/RSPGame/btnUp.png');
  const textureB2 = new PIXI.Texture(rawPath);
  btnUp2 = new PIXI.Sprite(textureB2);
  btnUp2.scale.set(1.5, 1.5);
  btnUp2.x = 900; // parseInt(x);
  btnUp2.y = 415; // getScaledY(y);
  btnUp2.interactive = true;
  btnUp2.buttonMode = true;
  container.addChild(btnUp2);

  btnUp2.on('pointerup', function (e) {
    Global.player.wins = 0;
    Global.opponent.wins = 0;
    revealAnotherMatch();
    Global.player.cardsPlayed = '';
    Global.opponent.cardPlayed = '';
    Global.player.ready = false;
    Global.opponent.ready = false;
  });

  leaveText = new PIXI.Text('Leave', optionStyle);
  leaveText.x = btnUp1.x + 35;
  leaveText.y = btnUp1.y + 10;
  rematchText = new PIXI.Text('Rematch', optionStyle);
  rematchText.x = btnUp2.x + 15;
  rematchText.y = btnUp2.y + 10;

  container.addChild(leaveText);
  container.addChild(rematchText);
}

function btnVisibleStats(state) {
  playBtnP.visible = state;
  playBtnR.visible = state;
  playBtnS.visible = state;
  paperPic.visible = state;
  rockPic.visible = state;
  sciPic.visible = state;
}

function makeEverythingVisible(viz) {
  try {
    waitingText.visible = viz;
    blinkElip.visible = viz;
    dBoxSprite.visible = viz;
    kidSpriteP.visible = viz;
    kidSpriteO.visible = viz;
    kidRevealP.visible = viz;
    kidRevealO.visible = viz;
    rspSign.visible = viz;
    rockCardP.visible = viz;
    paperCardP.visible = viz;
    sciCardP.visible = viz;
    sciCardO.visible = viz;
    rockCardO.visible = viz;
    paperCardO.visible = viz;
    rockPic.visible = viz;
    paperPic.visible = viz;
    sciPic.visible = viz;
    playBtnR.visible = viz;
    playBtnP.visible = viz;
    playBtnS.visible = viz;
    thoughtBubP.visible = viz;
    thoughtBubO.visible = viz;
    thinkTextP.visible = viz;
    thinkTextO.visible = viz;
    thinkElip.visible = viz;
    statsBoard.visible = viz;
    thinkTextStyle.visible = viz;
    statStyle.visible = viz;
    statText.visible = viz;
    waitStyle.visible = viz;
    winnerText.visible = viz;
    btnUp1.visible = viz;
    btnUp2.visible = viz;
    leaveText.visible = viz;
    rematchText.visible = viz;
  } catch (err) {}
}

function revealAnotherMatch() {
  makeEverythingVisible(false);
  kidSpriteP.visible = true;
  kidSpriteO.visible = true;
  rspSign.visible = true;
  rockPic.visible = true;
  paperPic.visible = true;
  sciPic.visible = true;
  playBtnR.visible = true;
  playBtnP.visible = true;
  playBtnS.visible = true;
  thoughtBubP.visible = true;
  thoughtBubO.visible = true;
  thinkTextP.visible = true;
  thinkTextO.visible = true;
  thinkElip.visible = true;
  statsBoard.visible = true;
  thinkTextStyle.visible = true;
  statStyle.visible = true;
  statText.visible = true;
  statText.text = `${Global.player.name} wins: ${Global.player.wins}\n\n
  ${Global.opponent.name} wins: ${Global.opponent.wins}`;
}

socket.on('opLeft', (msg) => {
  const confir = confirm('Opponant left.');
  location.reload();
});
