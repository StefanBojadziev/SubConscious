window.WebFontConfig = {
    ready: false,
    active: function () {
        this.ready = true;
    }, google: {families: ['Oswald']}
};

class BootState extends Phaser.State {
  init() {

  }

  preload() {
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.game.load.image('loader_background', 'assets/fade.jpg');
  }

  create() {
    
    this.game.time.advancedTiming = true;
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setMinMax(0, 0, 1640, 1080);
    if (!this.game.device.desktop) {
      this.scale.forceOrientation(true, false);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    }
  }

  update() {
    if (WebFontConfig.ready) {
      WebFontConfig.ready = false;
      this.game.state.start('loading');
    }
  }
}

export default BootState;