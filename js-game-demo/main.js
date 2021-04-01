const State = {
  OPENING: 0,
  BEGINSTORY: 1,
  STORYMODE: 2,
  PLAYGAME: 3,
  STAGINGAREA: 4,
  CONSOLE_APP: 5,
};
const Global = {};
const startingState = State.OPENING;

function gameEngine(location) {
  Global.location = location;
  switch (location) {
    case State.BEGINSTORY:
      BeginStory.start();
      break;
    case State.OPENING:
      OpenScreen.start();
      break;
    case State.STORYMODE:
      StoryMode.start();
      break;
    case State.STAGINGAREA:
      StagingArea.start();
      break;
    case State.CONSOLE_APP:
      ConsoleApp.start();
      break;
    default:
      throw new Error('what are you doing???');
  }
}

function initGame() {
  setupGlobals();
  const defaultIcon = "url('assets/RSPGame/cursor.png'),auto";
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
}

function resizeHandler() {
  const scaleFactor = Math.min(
    window.innerWidth / Global.virtualW,
    window.innerHeight / Global.virtualH
  );

  const newWidth = Math.ceil(Global.virtualW * scaleFactor * 0.99);
  const newHeight = Math.ceil(Global.virtualH * scaleFactor * 0.99);

  Global.app.view.style.width = `${newWidth}px`;
  Global.app.view.style.height = `${newHeight}px`;
  Global.app.resize(newWidth, newHeight);
}

// eslint-disable-next-line no-undef
window.onload = function onLoad() {
  initGame();
  gameEngine(startingState);
  resizeHandler();
};
