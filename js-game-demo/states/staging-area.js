const StagingArea = {
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
    StagingArea.container = new PIXI.Container();
    Global.app.stage.addChild(StagingArea.container);
    StagingArea.loader = new PIXI.Loader();
    StagingArea.loader.baseUrl = 'assets/CyboShellAssets/';
    StagingArea.loader
      .add('openingBack', 'Backgrounds/openingScreen.png')
      .add('Logo', 'Logo.png')
      .add('Seren', 'Characters/SerenLarge.png')
      .add('SerenBuild1', 'Characters/SerenBuild1.png')
      .add('nur1', 'Cybos/LargeImgs/nur1.png')
      .add('nur2', 'Cybos/LargeImgs/nur2.png')
      .add('nur3', 'Cybos/LargeImgs/nur3.png')
      .add('cubeBuild', 'cubeBuild.png');

    StagingArea.loader.onProgress.add(StagingArea.showProgress);
    StagingArea.loader.onComplete.add(StagingArea.doneLoading);
    StagingArea.loader.onError.add(StagingArea.reportError);
    StagingArea.loader.load();
  },
  showProgress(e) {
    console.log(e.progress);
  },
  reportError(e) {
    console.log('Error: ', e.message);
  },
  initStagingAreaLoop() {
    console.log('DONE LOADING!!');

    StagingArea.background = PIXI.Sprite.from(
      StagingArea.loader.resources.openingBack.texture
    );
    StagingArea.background.scale.set(Global.imgScale, Global.imgScale);
    StagingArea.background.interactive = true;
    StagingArea.background.buttonMode = true;

    StagingArea.background.on('pointerdown', function (e) {
      Global.app.stage.removeChild(StagingArea.container);
      Global.app.stage.removeChild(Global.app.animationUpdatenodm);
      StagingArea.loader = null;
      gameEngine(State.BEGINSTORY);
    });
    StagingArea.container.addChild(StagingArea.background);

    StagingArea.Logo = PIXI.Sprite.from(
      StagingArea.loader.resources.Logo.texture
    );
    StagingArea.Logo.scale.set(Global.imgScale * 0.95, Global.imgScale * 0.95);
    StagingArea.Logo.anchor.set(0.5);
    StagingArea.Logo.x = Global.windowW / 2;
    StagingArea.Logo.y = 125;
    StagingArea.container.addChild(StagingArea.Logo);

    StagingArea.Seren = PIXI.Sprite.from(
      StagingArea.loader.resources.Seren.texture
    );
    StagingArea.Seren.scale.set(Global.imgScale * 0.6, Global.imgScale * 0.6);
    StagingArea.Seren.x = 930;
    StagingArea.Seren.y = 375;
    StagingArea.container.addChild(StagingArea.Seren);

    StagingArea.nur1 = PIXI.Sprite.from(
      StagingArea.loader.resources.nur1.texture
    );
    StagingArea.nur1.scale.set(Global.imgScale, Global.imgScale);
    StagingArea.nur1.x = 450;
    StagingArea.nur1.y = 460;
    StagingArea.nur1.visible = true;
    StagingArea.container.addChild(StagingArea.nur1);

    StagingArea.nur2 = PIXI.Sprite.from(
      StagingArea.loader.resources.nur2.texture
    );
    StagingArea.nur2.scale.set(Global.imgScale, Global.imgScale);
    StagingArea.nur2.x = 425;
    StagingArea.nur2.y = 395;
    StagingArea.nur2.visible = false;
    StagingArea.container.addChild(StagingArea.nur2);

    StagingArea.nur3 = PIXI.Sprite.from(
      StagingArea.loader.resources.nur3.texture
    );
    StagingArea.nur3.scale.set(Global.imgScale * 0.9, Global.imgScale * 0.9);
    StagingArea.nur3.x = 390;
    StagingArea.nur3.y = 345;
    StagingArea.nur3.visible = false;
    StagingArea.container.addChild(StagingArea.nur3);

    StagingArea.serenBuild1 = PIXI.Sprite.from(
      StagingArea.loader.resources.SerenBuild1.texture
    );
    const serenSheet = PIXI.BaseTexture.from(
      StagingArea.loader.resources.SerenBuild1.url
    );
    const serenWidth = 442;
    const serenHeight = 442;
    const serenBuildFrames = 6;

    StagingArea.serenBuild1.anim = [];
    for (let i = 0; i < serenBuildFrames; i++) {
      StagingArea.serenBuild1.anim.push(
        new PIXI.Texture(
          serenSheet,
          new PIXI.Rectangle(i * serenWidth, 0, serenWidth, serenHeight)
        )
      );
    }

    StagingArea.SerenBuildAnim = new PIXI.AnimatedSprite(
      StagingArea.serenBuild1.anim
    );
    StagingArea.SerenBuildAnim.scale.set(
      Global.imgScale * 0.58,
      Global.imgScale * 0.5
    );
    StagingArea.SerenBuildAnim.animationSpeed = 0.17;
    StagingArea.SerenBuildAnim.loop = true;
    StagingArea.SerenBuildAnim.x = 855;
    StagingArea.SerenBuildAnim.y = 350;
    StagingArea.container.addChild(StagingArea.SerenBuildAnim);
    StagingArea.SerenBuildAnim.play();
    StagingArea.SerenBuildAnim.visible = false;

    StagingArea.cubeBuild = PIXI.Sprite.from(
      StagingArea.loader.resources.cubeBuild.texture
    );
    StagingArea.cubeBuild.scale.set(Global.imgScale, Global.imgScale);
    StagingArea.cubeBuild.x = 400;
    StagingArea.cubeBuild.y = 400;

    const sheet = PIXI.BaseTexture.from(
      StagingArea.loader.resources.cubeBuild.url
    );
    const width = 248;
    const height = 240;
    const numFrames = 58;

    StagingArea.cubeBuild.anim = [];
    for (let i = 0; i < numFrames; i++) {
      StagingArea.cubeBuild.anim.push(
        new PIXI.Texture(sheet, new PIXI.Rectangle(i * width, 0, width, height))
      );
    }

    StagingArea.cubeAnimation = new PIXI.AnimatedSprite(
      StagingArea.cubeBuild.anim
    );
    StagingArea.cubeAnimation.scale.set(
      Global.imgScale * 1.65,
      Global.imgScale * 1.65
    );
    StagingArea.cubeAnimation.animationSpeed = 0.35;
    StagingArea.cubeAnimation.loop = false;
    StagingArea.cubeAnimation.x = 275;
    StagingArea.cubeAnimation.y = 225;
    StagingArea.container.addChild(StagingArea.cubeAnimation);
    StagingArea.cubeAnimation.visible = false;
    StagingArea.runImageSwitchLoop();
    StagingArea.cubeAnimation.onComplete = function () {
      StagingArea.cubeAnimation.visible = false;

      if (StagingArea.displayNueric === 0) {
        StagingArea.displayNueric++;
        StagingArea.nur1.visible = false;
        StagingArea.nur2.visible = true;
        StagingArea.nur3.visible = false;
      } else if (StagingArea.displayNueric === 1) {
        StagingArea.displayNueric++;
        StagingArea.nur1.visible = false;
        StagingArea.nur2.visible = false;
        StagingArea.nur3.visible = true;
      } else {
        StagingArea.displayNueric = 0;
        StagingArea.nur1.visible = true;
        StagingArea.nur2.visible = false;
        StagingArea.nur3.visible = false;
      }

      StagingArea.Seren.visible = true;
      StagingArea.SerenBuildAnim.visible = false;
      StagingArea.runImageSwitchLoop();
    };

    StagingArea.textStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 72,
      fill: '#ffffff',
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 640,
    });

    StagingArea.boardText = new PIXI.Text('', StagingArea.textStyle);
    StagingArea.boardText.x = 630;
    StagingArea.boardText.y = 750;

    StagingArea.container.addChild(StagingArea.boardText);

    Global.app.animationUpdate = function (delta) {
      StagingArea.runBlinkingText();
    };

    Global.app.ticker.add(Global.app.animationUpdate);
  },
  runBlinkingText() {
    const baseBoardText = 'Click to begin...';
    StagingArea.elapTime += Math.floor(Global.app.ticker.elapsedMS);
    if (StagingArea.elapTime > 50) {
      let boardT = StagingArea.boardText.text.replace('_', '');
      if (boardT !== baseBoardText) {
        StagingArea.elapTime = 0;
        boardT += `${baseBoardText[boardT.length]}_`;
      } else if (StagingArea.elapTime > 750) {
        if (StagingArea.blinkCounter > 4) {
          StagingArea.blinkCounter = 0;
          StagingArea.boardText.visible = true;
          boardT = '';
        } else {
          StagingArea.blinkCounter++;
          if (StagingArea.boardText.visible) {
            StagingArea.boardText.visible = false;
          } else {
            StagingArea.boardText.visible = true;
          }
        }
        StagingArea.elapTime = 0;
      }
      StagingArea.boardText.text = boardT;
    }
  },
  doneLoading(e) {
    StagingArea.initStagingAreaLoop();
  },
  runImageSwitchLoop() {
    setTimeout(() => {
      StagingArea.cubeAnimation.visible = true;
      StagingArea.nur1.visible = false;
      StagingArea.nur2.visible = false;
      StagingArea.nur3.visible = false;
      StagingArea.Seren.visible = false;
      StagingArea.SerenBuildAnim.visible = true;
      StagingArea.cubeAnimation.gotoAndPlay(0);
    }, 5500);
  },
};
