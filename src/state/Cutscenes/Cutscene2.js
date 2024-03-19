class Cutscene2 extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
      this.game.load.spritesheet('nslika1', 'assets/Cutscene2/null1.png',800,600);     
      this.game.load.spritesheet('nslika2', 'assets/Cutscene2/null2.png',800,600);  
      this.game.load.image('ntekst1', 'assets/Cutscene2/nullteskt1.png'); 
      this.game.load.image('ntekst2', 'assets/Cutscene2/nulltekst2.png'); 
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');

      console.log("preload");
    }
  
    create() {
      this.zadtekst = this.game.add.sprite(0,0,'zadtekst');
      this.slika1 = this.game.add.sprite(400, 300,'nslika1');
      this.slika1.anchor.setTo(0.5,0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);

      this.tekst1 = this.game.add.sprite(0,0,'ntekst1')
      this.tekst1.alpha = 1;

      this.slika2 = this.game.add.sprite(400,300,'nslika2');
      this.slika2.anchor.setTo(0.5,0.5);
      this.slika2.alpha = 0;
      this.slika2.animations.add('walk');
      this.slika2.animations.play('walk', 12, true);

      this.fader1 = this.game.add.sprite(0,0,'fade');
      this.fader1.alpha = 0;


      this.tekst2 = this.game.add.sprite(0,0,'ntekst2');
      this.tekst2.alpha = 0;


    console.log("create");
    }
  
    update() {
      if(this.game.input.activePointer.isDown){
      if(this.slika1.alpha == 1){
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika1).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst1).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
      }
      if(this.slika2.alpha == 1){
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader1).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst2).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
      }
      if(this.fader1.alpha == 1)
        this.game.state.start('level2');
	}
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default Cutscene2;
  