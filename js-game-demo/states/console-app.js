const fakePlayerVars = {
  username: 'pqp144',
  fontSettings: {
    fontSize: '18px',
    fontFamily: 'Monospaced', // TODO: Clean up console usage
    padding: '5px',
    width: '350px',
    color: '#eaed37',
    weight: '800',
  },
};
const playerVars = fakePlayerVars; // TODO: get from somewhere ???
let returnKey = keyboard('Enter');

const ConsoleApp = {
  container: null,
  loader: null,
  turnText: null,
  Player: {},
  assetsArr: [],
  input: null,
  start: function () {
    ConsoleApp.container = new PIXI.Container();
    // TODO: use Bitmap font to save memory if needed
    const fontStyle = new PIXI.TextStyle({
      fontFamily: 'Monospaced',
      fontSize: fakePlayerVars.fontSettings.fontSize,
      fill: '#ffffff', // gradient
      stroke: '#0f0',
      wordWrap: true,
      wordWrapWidth: 340,
    });

    const cmdResults = [
      'fira',
      'this thing happened',
      'then this thing happened',
      'this was the last thing',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
    ];
    const textMetrics = PIXI.TextMetrics.measureText('test string', fontStyle);
    // console.log(textMetrics);
    const { lineHeight } = textMetrics;
    const resultsConsoleHeight = 200;
    const numberLinesThatFit = Math.floor(resultsConsoleHeight / lineHeight);
    console.log(`Lines that fit: ${numberLinesThatFit} at ${lineHeight} px`);

    const visibleCmds = cmdResults.slice(0, numberLinesThatFit);
    const resultsCmdsStr = [...visibleCmds]
      .reverse()
      .reduce((acc, cmd, i) => `${acc}${i !== 0 ? '\n' : ''}${cmd}`, '');

    const textBox = new PIXI.Text(resultsCmdsStr, fontStyle);

    const resultsConsoleYTop = 75;
    const resultsConsoleXLeft = 170;
    const paddingBottom = 10;
    const paddingLeft = 10;

    textBox.x = resultsConsoleXLeft + paddingLeft;
    const textHeight = visibleCmds.length * lineHeight;
    textBox.y =
      resultsConsoleYTop + resultsConsoleHeight - textHeight - paddingBottom;

    // g.beginFill(color);
    // g.drawRect(0, 0, w, h);
    // const texture = PIXI.RenderTexture.create(w, h);
    // const fillStyle = new PIXI.FillStyle()
    // fillStyle.texture = texture;
    // test.lineStyle(2, 0x861f8a, 1);
    // test.beginFill(0x99914e).drawRect(0, 75, 390, 200).endFill();

    ConsoleApp.container.addChild(textBox);

    // const consoleWrapper = new PIXI.Sprite(makeRectTexture(50, 50, 0xff0000));
    // consoleWrapper.visible = true;
    //consoleContainer.height
    // consoleWrapper.ConsoleApp.container = new PIXI.Container();
    ConsoleApp.loader = new PIXI.Loader();
    ConsoleApp.Player.name = playerVars.username;
    Global.app.stage.addChild(ConsoleApp.container);

    ConsoleApp.loader.baseUrl = 'assets/CyboShellAssets/';
    ConsoleApp.loader.add('background', 'Backgrounds/openingScreen.png');

    ConsoleApp.loader.onProgress.add(ConsoleApp.showProgress);
    ConsoleApp.loader.onComplete.add(ConsoleApp.doneLoading);
    ConsoleApp.loader.onError.add(ConsoleApp.reportError);
    ConsoleApp.loader.load();
  },
  showProgress: function (e) {
    console.log(e.progress);
  },
  reportError: function (e) {
    console.log('Error: ', e.message);
  },
  doneLoading: function (e) {
    const backgroundText = PIXI.Texture.from(
      ConsoleApp.loader.resources.background.url
    );
    const backgroundSprite = new PIXI.Sprite(backgroundText);
    backgroundSprite.x = 0;
    backgroundSprite.y = 0;
    // ConsoleApp.container.addChild(backgroundSprite);
    ConsoleApp.setupConsoles();
  },
  clearAssets() {
    ConsoleApp.assetsArr.forEach((asset) =>
      ConsoleApp.container.removeChild(asset)
    );
  },
  setupConsoles() {
    // FIXME: Wrap all this in a container and put console in side-by-side format
    ConsoleApp.clearAssets();
    const consoleView = new PIXI.Graphics();
    consoleView.lineStyle(2, 0x57ff8a, 1);
    consoleView.buttonMode = true;
    consoleView.interactive = true;
    const y = 75;
    consoleBGColor = 0x31914e;
    consoleView
      .beginFill(consoleBGColor, 0.25)
      .drawRoundedRect(0, y, 390, 200, 16)
      .endFill();

    const consoleResult = consoleView.clone();
    consoleResult.x = 170;
    ConsoleApp.container.addChild(consoleResult);

    const consoleMain = consoleView.clone();
    consoleMain.x = 570;
    ConsoleApp.container.addChild(consoleMain);

    const consoleHelper = consoleView.clone();
    consoleHelper.x = 970;
    ConsoleApp.container.addChild(consoleHelper);

    ConsoleApp.input = new PIXI.TextInput({
      input: playerVars.fontSettings,
      box: {
        default: { fill: null, rounded: 0, stroke: null },
        focused: { fill: null, rounded: 0, stroke: null },
        disabled: { fill: 0xdbdbdb, rounded: 5 },
      },
    });

    // TODO: Look up PIXI Input
    // Where did the line go? 🤷‍♂️
    // Should not let you delete your username
    // When you press enter, it should submit the command and go to the next line
    // When you hit "space", it should automatically pull up the helper commands
    // Need to add the object literal for traversing commands
    ConsoleApp.input.x = consoleMain.x + 10; // Global.app.view.width / 2 - ConsoleApp.input.width / 2;
    ConsoleApp.input.y = 225;

    ConsoleApp.container.addChild(ConsoleApp.input);
    ConsoleApp.input.focus();
    ConsoleApp.input.text = `${this.Player.name}> `;

    /* Where the magic happens: */

    let cmd = '';
    ConsoleApp.input.on('input', (e) => {
      cmd = e.trim().split(`${fakePlayerVars.username}> `)[1].trim();
    });

    returnKey.press = () => {
      const result = runBattleCmd(cmd);
      console.log(result);
      // TODO: consoleResult.addTextLine(result) // need to add this method to it; use PIXI.Text
      cmd = '';
      // TODO: defimitely has to be a better way to clear out the text
      ConsoleApp.input.text = '';
      ConsoleApp.input.text = `${this.Player.name}> `;
      // TODO: appear to move to the "next line" in the terminal
    };

    /* end magic */
  },
};
