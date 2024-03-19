class Cutscene1 extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {
      this.game.load.spritesheet('cutscene-slika1', 'assets/Cutscene1/Cutscene11.png', 800, 600);
      this.game.load.spritesheet('cutscene-slika2', 'assets/Cutscene1/Cutscene22.png', 800, 600);
      this.game.load.spritesheet('cutscene-slika3', 'assets/Cutscene1/Cutscene33.png', 800, 600);
      this.game.load.image('text1', 'assets/Cutscene1/Text1.png');
      this.game.load.image('text2', 'assets/Cutscene1/Text2.png');
      this.game.load.image('text3', 'assets/Cutscene1/Text3.png');
      this.game.load.image('text4', 'assets/Cutscene1/Slika2Text4.png');
      this.game.load.image('text5', 'assets/Cutscene1/Slika2Text5.png');
      this.game.load.image('text6', 'assets/Cutscene1/Slika3Text6.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.spritesheet('cutscene-slika4', 'assets/Cutscene1/cutscene44.png', 800, 600);
      console.log("preload");
    }
  
    create() {
    //setup
    //this.tekst2 = this.game.add.sprite(0, 0, 'text2');
    //this.tekst2.alpha = 0;
    //a fucking mess
   	this.tekst4 = this.game.add.sprite(0, 0, 'text4');
   	this.tekst4.alpha = 0;
  	this.tekst5 = this.game.add.sprite(0, 0, 'text5');
    this.tekst5.alpha = 0;
    this.slika1 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika1');
    this.slika1.animations.add('walk');
   	this.slika1.animations.play('walk', 12, true);
    this.tekst1 = this.game.add.sprite(0, 0, 'text1');
    this.tekst1.alpha = 1;
    this.tekst3 = this.game.add.sprite(0, 0, 'text3');
    this.tekst3.alpha = 0;
	this.tekst6 = this.game.add.sprite(0, 0, 'text6');
  	this.tekst6.alpha = 0;
    //osvetli
    this.fader = this.game.add.sprite(0, 0, 'fade');
    this.fader.alpha = 0.9;
    this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);


    console.log("create");
    }
  
    update() {
   	console.log("update");
  	if(this.game.input.activePointer.isDown){
  		if(this.tekst1.alpha == 1){
  			this.tekst1.alpha = 0;
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika1).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
  			this.slika2 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika2');
    		this.slika2.animations.add('walk');
   			this.slika2.animations.play('walk', 12, true);
   			this.slika2.alpha = 0;
   			this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
    		this.zadtekst.alpha = 1;
   			this.tekst2 = this.game.add.sprite(0, 0, 'text2');
   			this.tekst2.alpha = 0;
   			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst2).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);

  		}
  		if(this.tekst2.alpha == 1){
  			this.tekst2.alpha = 0;
   			this.slika3 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika3');
    		this.slika3.animations.add('walk');
   			this.slika3.animations.play('walk', 12, true);
   			this.slika3.alpha = 0;
   		  this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
    		this.zadtekst.alpha = 1;
   			this.tekst3 = this.game.add.sprite(0, 0, 'text3');
   			this.tekst3.alpha = 0;
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika2).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
   			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika3).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst3).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  		}
  		if(this.tekst3.alpha == 1){
  			this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
    		this.zadtekst.alpha = 1;
  			this.tekst3.alpha = 0;
   			this.tekst4 = this.game.add.sprite(0, 0, 'text4');
   			this.tekst4.alpha = 0;
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst4).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  		}
  		if(this.tekst4.alpha == 1){
  			this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
    		this.zadtekst.alpha = 1;
  			this.tekst4.alpha = 0;
        this.slika4 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika4');
        this.slika4.animations.add('move');
        this.slika4.animations.play('move', 12, true);
        this.slika4.alpha = 0;
  			this.tekst5 = this.game.add.sprite(0, 0, 'text5');
    		this.tekst5.alpha = 0;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika3).to( { alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.slika4).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst5).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  		}
  		if(this.tekst5.alpha == 1){
  			this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
    		this.zadtekst.alpha = 1;
  			this.tekst5.alpha = 0;
		  	this.tekst6 = this.game.add.sprite(0, 0, 'text6');
  			this.tekst6.alpha = 0;
  			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.tekst6).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
  		}
  		if(this.tekst6.alpha == 1){
  			this.game.cache.removeSound('music');
        this.game.state.start('menu-level')
  		}
    	console.log('stignav');
    }

	}
  
    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default Cutscene1;
  