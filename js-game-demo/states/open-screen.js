const OpenScreen = {
  gameTitle: null,
  boardText: null,
  textStyle: null,
  background: null,
  richText: null,
  blinkCounter: 0,
  moveLeft: true,
  nur1: null,
  Logo: null,
  Seren: null,
  cubeBuild: null,
  cubeFrames: {},
  cubeAnimation: null,
  serenBuild1: null,
  displayNueric: 0,
  elapTime: 0,
  container: null,
  loader: null,

  start() {
    OpenScreen.container = new PIXI.Container();
    Global.app.stage.addChild(OpenScreen.container);
    OpenScreen.loader = new PIXI.Loader();
    OpenScreen.loader.baseUrl = 'assets/CyboShellAssets/';
    OpenScreen.loader
      .add('openingBack', 'Backgrounds/openingScreen.png')
      .add('Logo', 'Logo.png')
      .add('Seren', 'Characters/SerenLarge.png')
      .add('SerenBuild1', 'Characters/SerenBuild1.png')
      .add('nur1', 'Cybos/LargeImgs/nur1.png')
      .add('nur2', 'Cybos/LargeImgs/nur2.png')
      .add('nur3', 'Cybos/LargeImgs/nur3.png')
      .add('cubeBuild', 'cubeBuild.png');

    OpenScreen.loader.onProgress.add(OpenScreen.showProgress);
    OpenScreen.loader.onComplete.add(OpenScreen.doneLoading);
    OpenScreen.loader.onError.add(OpenScreen.reportError);
    OpenScreen.loader.load();
  },
  showProgress(e) {
    console.log(e.progress);
  },
  reportError(e) {
    console.log('Error: ', e.message);
  },
  initOpenScreenLoop() {
    console.log('DONE LOADING!!');

    OpenScreen.background = PIXI.Sprite.from(
      OpenScreen.loader.resources.openingBack.texture
    );
    OpenScreen.background.scale.set(Global.imgScale, Global.imgScale);
    OpenScreen.background.interactive = true;
    OpenScreen.background.buttonMode = true;

    OpenScreen.background.on('pointerdown', function (e) {
      Global.app.stage.removeChild(OpenScreen.container);
      Global.app.stage.removeChild(Global.app.animationUpdatenodm);
      OpenScreen.loader = null;
      gameEngine(State.BEGINSTORY);
    });
    OpenScreen.container.addChild(OpenScreen.background);

    OpenScreen.Logo = PIXI.Sprite.from(
      OpenScreen.loader.resources.Logo.texture
    );
    OpenScreen.Logo.scale.set(Global.imgScale * 0.95, Global.imgScale * 0.95);
    OpenScreen.Logo.anchor.set(0.5);
    OpenScreen.Logo.x = Global.windowW / 2;
    OpenScreen.Logo.y = 125;
    OpenScreen.container.addChild(OpenScreen.Logo);

    OpenScreen.Seren = PIXI.Sprite.from(
      OpenScreen.loader.resources.Seren.texture
    );
    OpenScreen.Seren.scale.set(Global.imgScale * 0.6, Global.imgScale * 0.6);
    OpenScreen.Seren.x = 930;
    OpenScreen.Seren.y = 375;
    OpenScreen.container.addChild(OpenScreen.Seren);

    OpenScreen.nur1 = PIXI.Sprite.from(
      OpenScreen.loader.resources.nur1.texture
    );
    OpenScreen.nur1.scale.set(Global.imgScale, Global.imgScale);
    OpenScreen.nur1.x = 450;
    OpenScreen.nur1.y = 460;
    OpenScreen.nur1.visible = true;
    OpenScreen.container.addChild(OpenScreen.nur1);

    OpenScreen.nur2 = PIXI.Sprite.from(
      OpenScreen.loader.resources.nur2.texture
    );
    OpenScreen.nur2.scale.set(Global.imgScale, Global.imgScale);
    OpenScreen.nur2.x = 425;
    OpenScreen.nur2.y = 395;
    OpenScreen.nur2.visible = false;
    OpenScreen.container.addChild(OpenScreen.nur2);

    OpenScreen.nur3 = PIXI.Sprite.from(
      OpenScreen.loader.resources.nur3.texture
    );
    OpenScreen.nur3.scale.set(Global.imgScale * 0.9, Global.imgScale * 0.9);
    OpenScreen.nur3.x = 390;
    OpenScreen.nur3.y = 345;
    OpenScreen.nur3.visible = false;
    OpenScreen.container.addChild(OpenScreen.nur3);

    OpenScreen.serenBuild1 = PIXI.Sprite.from(
      OpenScreen.loader.resources.SerenBuild1.texture
    );
    const serenSheet = PIXI.BaseTexture.from(
      OpenScreen.loader.resources.SerenBuild1.url
    );
    const serenWidth = 442;
    const serenHeight = 442;
    const serenBuildFrames = 6;

    OpenScreen.serenBuild1.anim = [];
    for (let i = 0; i < serenBuildFrames; i++) {
      OpenScreen.serenBuild1.anim.push(
        new PIXI.Texture(
          serenSheet,
          new PIXI.Rectangle(i * serenWidth, 0, serenWidth, serenHeight)
        )
      );
    }

    OpenScreen.SerenBuildAnim = new PIXI.AnimatedSprite(
      OpenScreen.serenBuild1.anim
    );
    OpenScreen.SerenBuildAnim.scale.set(
      Global.imgScale * 0.58,
      Global.imgScale * 0.5
    );
    OpenScreen.SerenBuildAnim.animationSpeed = 0.17;
    OpenScreen.SerenBuildAnim.loop = true;
    OpenScreen.SerenBuildAnim.x = 855;
    OpenScreen.SerenBuildAnim.y = 350;
    OpenScreen.container.addChild(OpenScreen.SerenBuildAnim);
    OpenScreen.SerenBuildAnim.play();
    OpenScreen.SerenBuildAnim.visible = false;

    OpenScreen.cubeBuild = PIXI.Sprite.from(
      OpenScreen.loader.resources.cubeBuild.texture
    );
    OpenScreen.cubeBuild.scale.set(Global.imgScale, Global.imgScale);
    OpenScreen.cubeBuild.x = 400;
    OpenScreen.cubeBuild.y = 400;

    const sheet = PIXI.BaseTexture.from(
      OpenScreen.loader.resources.cubeBuild.url
    );
    const width = 248;
    const height = 240;
    const numFrames = 58;

    OpenScreen.cubeBuild.anim = [];
    for (let i = 0; i < numFrames; i++) {
      OpenScreen.cubeBuild.anim.push(
        new PIXI.Texture(sheet, new PIXI.Rectangle(i * width, 0, width, height))
      );
    }

    OpenScreen.cubeAnimation = new PIXI.AnimatedSprite(
      OpenScreen.cubeBuild.anim
    );
    OpenScreen.cubeAnimation.scale.set(
      Global.imgScale * 1.65,
      Global.imgScale * 1.65
    );
    OpenScreen.cubeAnimation.animationSpeed = 0.35;
    OpenScreen.cubeAnimation.loop = false;
    OpenScreen.cubeAnimation.x = 275;
    OpenScreen.cubeAnimation.y = 225;
    OpenScreen.container.addChild(OpenScreen.cubeAnimation);
    OpenScreen.cubeAnimation.visible = false;
    OpenScreen.runImageSwitchLoop();
    OpenScreen.cubeAnimation.onComplete = function () {
      OpenScreen.cubeAnimation.visible = false;

      if (OpenScreen.displayNueric === 0) {
        OpenScreen.displayNueric++;
        OpenScreen.nur1.visible = false;
        OpenScreen.nur2.visible = true;
        OpenScreen.nur3.visible = false;
      } else if (OpenScreen.displayNueric === 1) {
        OpenScreen.displayNueric++;
        OpenScreen.nur1.visible = false;
        OpenScreen.nur2.visible = false;
        OpenScreen.nur3.visible = true;
      } else {
        OpenScreen.displayNueric = 0;
        OpenScreen.nur1.visible = true;
        OpenScreen.nur2.visible = false;
        OpenScreen.nur3.visible = false;
      }

      OpenScreen.Seren.visible = true;
      OpenScreen.SerenBuildAnim.visible = false;
      OpenScreen.runImageSwitchLoop();
    };

    OpenScreen.textStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 72,
      fill: '#ffffff',
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 640,
    });

    OpenScreen.boardText = new PIXI.Text('', OpenScreen.textStyle);
    OpenScreen.boardText.x = 630;
    OpenScreen.boardText.y = 750;

    OpenScreen.container.addChild(OpenScreen.boardText);

    Global.app.animationUpdate = function (delta) {
      OpenScreen.runBlinkingText();
    };

    Global.app.ticker.add(Global.app.animationUpdate);
  },
  runBlinkingText() {
    const baseBoardText = 'Click to begin...';
    OpenScreen.elapTime += Math.floor(Global.app.ticker.elapsedMS);
    if (OpenScreen.elapTime > 50) {
      let boardT = OpenScreen.boardText.text.replace('_', '');
      if (boardT !== baseBoardText) {
        OpenScreen.elapTime = 0;
        boardT += `${baseBoardText[boardT.length]}_`;
      } else if (OpenScreen.elapTime > 750) {
        if (OpenScreen.blinkCounter > 4) {
          OpenScreen.blinkCounter = 0;
          OpenScreen.boardText.visible = true;
          boardT = '';
        } else {
          OpenScreen.blinkCounter++;
          if (OpenScreen.boardText.visible) {
            OpenScreen.boardText.visible = false;
          } else {
            OpenScreen.boardText.visible = true;
          }
        }
        OpenScreen.elapTime = 0;
      }
      OpenScreen.boardText.text = boardT;
    }
  },
  doneLoading(e) {
    OpenScreen.initOpenScreenLoop();
  },
  runImageSwitchLoop() {
    setTimeout(() => {
      OpenScreen.cubeAnimation.visible = true;
      OpenScreen.nur1.visible = false;
      OpenScreen.nur2.visible = false;
      OpenScreen.nur3.visible = false;
      OpenScreen.Seren.visible = false;
      OpenScreen.SerenBuildAnim.visible = true;
      OpenScreen.cubeAnimation.gotoAndPlay(0);
    }, 5500);
  },
};
