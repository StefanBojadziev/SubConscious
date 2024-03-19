class Intro extends Phaser.State {
    init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  
    preload() {    
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.image('intro1', 'assets/intro/intro1.png');
      this.game.load.image('intro2', 'assets/intro/intro2.png');
      this.game.load.image('intro3', 'assets/intro/intro3.png');
      this.game.load.image('intro4', 'assets/intro/intro4.png');
      this.game.load.image('intro5', 'assets/intro/intro5.png');
    }
  
    create() {

        this.intro5 = this.game.add.sprite(0,0,'intro5');
        this.intro5.alpha = 1;
        this.intro4 = this.game.add.sprite(0,0,'intro4');
        this.intro4.alpha = 1;
        this.intro3 = this.game.add.sprite(0,0,'intro3');
        this.intro3.alpha = 1;
        this.intro2 = this.game.add.sprite(0,0,'intro2');
        this.intro2.alpha = 1;
        this.intro1 = this.game.add.sprite(0,0,'intro1');
        this.intro1.alpha = 1;
        this.fader = this.game.add.sprite(0,0,'fade');
    	this.fader.alpha = 0.9;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
        this.fader1 = this.game.add.sprite(0,0,'fade');
        this.fader1.alpha = 0;
    }
  
    update() {
  		if(this.game.input.activePointer.leftButton.isDown){
     		this.game.world.bringToTop(this.fader);
        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
    	}
    	if(this.fader.alpha == 1){
    		this.fader.alpha = 0;
    		this.fader1.alpha = 1;
			this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
    	}
     	if(this.intro5.alpha == 0)
     		this.game.state.start('menu');
     	  	if(this.fader.alpha == 0 && this.fader1.alpha == 1){
		    	if(this.intro1.alpha == 1){
		        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.intro1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
		        	this.game.world.bringToTop(this.intro2);
		    	}
		    	if(this.intro2.alpha == 1 && this.intro1.alpha == 0){
		        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.intro2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
		   			this.game.world.bringToTop(this.intro3);
		    	}
		    	if(this.intro3.alpha == 1 && this.intro2.alpha == 0){
		        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.intro3).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
		    		this.game.world.bringToTop(this.intro4);
		    	}
		    	if(this.intro4.alpha == 1 && this.intro3.alpha == 0){
		        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.intro4).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
		     		this.game.world.bringToTop(this.intro5);
		    	}
		    	if(this.intro5.alpha == 1 && this.intro4.alpha == 0){
		        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.intro5).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
		    	}
		    	this.game.world.bringToTop(this.fader1);
		    	this.game.world.bringToTop(this.fader);
     		}

     	console.log(this.fader1.alpha);
  	}


    shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }
  
  export default Intro;
  