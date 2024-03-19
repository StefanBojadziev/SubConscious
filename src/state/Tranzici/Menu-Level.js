class MenuLevel extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  
    create() {
    this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
    this.bg.animations.add('walk');
    this.bg.animations.play('walk', 40, true);
    this.bg.fixedToCamera = true;
    this.bg.inputEnabled = true;
    this.bg.input.useHandCursos = true;
    this.fader = this.game.add.sprite(0, 0, 'fade');
    this.fader.alpha = 0.9;
    this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);

    console.log("create");
    }
  
    update() {
      console.log("update");


      if(this.fader.alpha == 0)
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if(this.fader.alpha == 1){
          this.game.state.start('level');
          console.log('gatov');
        }


  
    }
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default MenuLevel;
  