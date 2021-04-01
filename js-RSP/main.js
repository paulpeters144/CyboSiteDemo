let State = {};

window.onload = function () {
  State = {
    OPENING: 0,
    JOINGAME: 1,
    PLAYGAME: 2,
    Location: 0,
  };

  function displayWindowSize() {
    const w = window.innerWidth;

    if (w > 575) {
      document.getElementById('rightHam').style.display = 'none';
    } else {
      document.getElementById('rightHam').style.display = '';
    }
  }
  displayWindowSize();
  gameEngine(State.OPENING);
};

function gameEngine(location) {
  State.Location = location;
  if (!Global.GameStarted) {
    Global.GameStarted = true;
    initGame();
  }

  switch (location) {
    case State.OPENING:
      OpenScreen.start();
      resizeHandler();
      break;

    case State.JOINGAME:
      JoinGame.start();
      break;

    case State.PLAYGAME:
      PlayGame.start();
      break;
  }
}

function initGame() {
  setupGlobals();
  const defaultIcon = "url('assets/RSPGame/cursor.png'),auto";
  // const hoverIcon = "url('assets/RSPGame/cursorA.png'),auto";
  Global.app.renderer.plugins.interaction.cursorStyles.pointer = defaultIcon;
  Global.app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;

  document.body.appendChild(Global.app.view);

  window.addEventListener('resize', resizeHandler, false);
}

function getWindowH(width) {
  let result = 1;
  // 1.78 or less keeps a close 16:9 aspect ratio
  while (width / result > 1.78) {
    result += 1;
  }
  return result;
}

function setupGlobals() {
  Global.windowW = 1920 * 0.8;
  Global.windowH = getWindowH(Global.windowW);
  Global.imgScale = Global.windowW / 1280;
  Global.virtualW = 1280;
  Global.virtualH = 720;

  Global.app = new PIXI.Application({
    width: Global.windowW,
    height: Global.windowH,
    autoResize: true,
    resolution: devicePixelRatio,
  });

  Global.Location = State.OPENING;
}

function resizeHandler() {
  const scaleFactor = Math.min(
    window.innerWidth / Global.virtualW,
    window.innerHeight / Global.virtualH
  );
  const newWidth = Math.ceil(Global.virtualW * scaleFactor * 0.9);
  const newHeight = Math.ceil(Global.virtualH * scaleFactor * 0.9);

  Global.app.view.style.width = `${newWidth}px`;
  Global.app.view.style.height = `${newHeight}px`;
  Global.imgScale = newWidth / 1280;
  Global.app.resize(newWidth, newHeight);
  // Global.GameContainer.scale.set(scaleFactor);
}
