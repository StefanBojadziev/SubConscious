class LoadingState extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
        this.game.load.spritesheet('loadingscreen', 'assets/LoadingScreen1.png', 800, 600);
        console.log("preload");
    }
  
    create() {
        this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
        this.bg.animations.add('walk');
        this.bg.animations.play('walk', 40, true);
        this.bg.fixedToCamera = true;
        console.log("create");
        //
        //
        //dont forget this lol
        //
        //
        //this.game.state.start('level');
        this.game.state.start('intro');
        //this.game.state.start('bossfight2');
        //this.game.state.start('menu');
    }
  
    update() {
      console.log("update");
  
    }
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default LoadingState;
  