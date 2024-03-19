class Cutscene5 extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
      this.game.load.spritesheet('slika1', 'assets/cutscene5/garg1.png', 800, 600);     
      this.game.load.spritesheet('slika2', 'assets/cutscene5/garg2.png',800, 600);     
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.image('gargtekst1', 'assets/Cutscene5/tekstgarg1.png');
      this.game.load.image('gargtekst2', 'assets/Cutscene5/tekstgarg2.png');
      console.log("preload");
    }
  
    create() {
      this.game.add.sprite(0,0,'zadtekst');
      this.slika1 = this.game.add.sprite(400, 200,'slika1');
      this.slika1.anchor.setTo(0.5,0.5);
      this.slika1.alpha = 1;
      this.tekst1 = this.game.add.sprite(0,0,'gargtekst1')
      this.tekst1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.slika2 = this.game.add.sprite(400,300,'slika2');
      this.slika2.anchor.setTo(0.5,0.5);
      this.slika2.alpha = 0;
      this.slika2.animations.add('walk');
      this.slika2.animations.play('walk', 12, true);
      this.fader = this.game.add.sprite(0,0,'fade');
      this.tekst2 = this.game.add.sprite(0,0,'gargtekst2');
      this.tekst2.alpha = 0;
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);

    console.log("create");
    }
  
    update() {
  	if(this.game.input.activePointer.isDown){
      if(this.slika1.alpha == 1){
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst1).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika1).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  		}
      if(this.slika2.alpha == 1){
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst2).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
   			}
      }
      if(this.fader.alpha == 1)
        this.game.state.start('cutscene5-finalboss');
	}
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default Cutscene5;
  