class Cutscene3 extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
      this.game.load.spritesheet('slika1', 'assets/cutscene3/ice1.png',800,600);     
      this.game.load.spritesheet('slika2', 'assets/cutscene3/ice2.png',800,600);   
      this.game.load.image('icetekst', 'assets/cutscene3/icetekst.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  
    create() {
      this.slika1 = this.game.add.sprite(400, 300,'slika1');
      this.slika1.anchor.setTo(0.5,0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.game.add.sprite(0,0,'icetekst');
      this.fader = this.game.add.sprite(0,0,'fade');
      this.fader.alpha = 0;

    console.log("create");
    }
  
    update() {
  	if(this.game.input.activePointer.isDown){
      this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
    if(this.fader.alpha == 1)
      this.game.state.start('bossfight1');
        
	}
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default Cutscene3;
  