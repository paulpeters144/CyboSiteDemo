const BeginStory = {
  container: null,
  elapTimer: null,
  loader: null,
  start() {
    BeginStory.container = new PIXI.Container();
    Global.app.stage.addChild(BeginStory.container);
    BeginStory.loader = new PIXI.Loader();
    BeginStory.loader.baseUrl = 'assets/CyboShellAssets/';
    BeginStory.loader
      .add('btnUp', 'Buttons/greenButtonUP.png')
      .add('blueBox', 'Cards_Boxes/blueBox.png')
      .add('shadow', 'Backgrounds/CitySkylineLayers/shadow.png')
      .add('layer1', 'Backgrounds/CitySkylineLayers/layer1.png')
      .add('layer2', 'Backgrounds/CitySkylineLayers/layer2.png')
      .add('layer3', 'Backgrounds/CitySkylineLayers/layer3.png')
      .add('sky', 'Backgrounds/CitySkylineLayers/sky.png');
    BeginStory.loader.onProgress.add(BeginStory.showProgress);
    BeginStory.loader.onError.add(BeginStory.reportError);
    BeginStory.loader.onComplete.add(BeginStory.doneLoading);
    BeginStory.loader.load();
  },
  showProgress(e) {
    console.log(e.progress);
  },
  reportError(e) {
    console.log(e);
  },
  doneLoading(e) {
    BeginStory.container.scale.set(Global.imgScale, Global.imgScale);

    const sky = PIXI.Sprite.from(BeginStory.loader.resources.sky.texture);
    const sky2 = PIXI.Sprite.from(BeginStory.loader.resources.sky.texture);
    BeginStory.container.addChild(sky);
    BeginStory.container.addChild(sky2);
    sky2.x = sky.width * -1;

    const layer3 = PIXI.Sprite.from(BeginStory.loader.resources.layer3.texture);
    const layer3_2 = PIXI.Sprite.from(
      BeginStory.loader.resources.layer3.texture
    );
    BeginStory.container.addChild(layer3);
    BeginStory.container.addChild(layer3_2);
    layer3_2.x = layer3.width * -1;

    const layer2 = PIXI.Sprite.from(BeginStory.loader.resources.layer2.texture);
    const layer2_2 = PIXI.Sprite.from(
      BeginStory.loader.resources.layer2.texture
    );
    BeginStory.container.addChild(layer2);
    BeginStory.container.addChild(layer2_2);
    layer2_2.x = layer2.width * -1;

    const layer1 = PIXI.Sprite.from(BeginStory.loader.resources.layer1.texture);
    const layer1_2 = PIXI.Sprite.from(
      BeginStory.loader.resources.layer1.texture
    );
    BeginStory.container.addChild(layer1);
    BeginStory.container.addChild(layer1_2);
    layer1_2.x = layer1.width * -1;

    const shadow = PIXI.Sprite.from(BeginStory.loader.resources.shadow.texture);
    const shadow2 = PIXI.Sprite.from(
      BeginStory.loader.resources.shadow.texture
    );
    BeginStory.container.addChild(shadow);
    BeginStory.container.addChild(shadow2);
    shadow2.x = shadow.width * -1;

    const blueBox = PIXI.Sprite.from(
      BeginStory.loader.resources.blueBox.texture
    );
    blueBox.anchor.set(0.5);
    blueBox.x = 1030;
    blueBox.y = 630;
    BeginStory.container.addChild(blueBox);

    const btn = PIXI.Sprite.from(BeginStory.loader.resources.btnUp.texture);
    btn.scale.set(Global.imgScale * 0.85, Global.imgScale * 0.85);
    btn.anchor.set(0.5);
    btn.x = blueBox.x + 100;
    btn.y = blueBox.y + 40;
    btn.interactive = true;
    BeginStory.container.addChild(btn);

    btn.on('pointerdown', function (e) {
      btn.y = blueBox.y + 43;
      text2.y = btn.y - 23;
    });
    btn.on('pointerup', function (e) {
      btn.y = blueBox.y + 40;
      text2.y = btn.y - 23;
      Global.app.stage.removeChild(BeginStory.container);
      Global.app.stage.removeChild(Global.app.animationUpdate);
      gameEngine(State.STORYMODE);
    });

    const textStyle = new PIXI.TextStyle({
      fontFamily: 'vt',
      fontSize: 52,
      fill: '#ffffff',
      stroke: '#4a1850',
      wordWrap: true,
      wordWrapWidth: 640,
    });

    const text = new PIXI.Text('Begin the story demo!', textStyle);
    text.x = blueBox.x - 168;
    text.y = blueBox.y - 70;
    BeginStory.container.addChild(text);

    const text2 = new PIXI.Text('Start', textStyle);
    text2.x = btn.x - 46;
    text2.y = btn.y - 23;
    BeginStory.container.addChild(text2);

    Global.app.animationUpdate = function (delta) {
      BeginStory.elapTimer += Global.app.ticker.elapsedMS;
      if (BeginStory.elapTimer > 10) {
        // BeginStory.scollRepeat(shadow, shadow2, .35);
        BeginStory.scollRepeat(layer1, layer1_2, 0.7);
        BeginStory.scollRepeat(layer2, layer2_2, 0.35);
        BeginStory.scollRepeat(layer3, layer3_2, 0.15);
        // BeginStory.scollRepeat(sky, sky2, .05);
        BeginStory.elapTimer = 0;
      }
    };

    Global.app.ticker.add(Global.app.animationUpdate);
  },
  scollRepeat(texture, texture2, speed) {
    if (texture.x >= Global.virtualW) texture.x = texture2.x - texture.width;

    if (texture2.x >= Global.virtualW) texture2.x = texture.x - texture2.width;

    texture.x += speed;
    texture2.x += speed;
  },
};
