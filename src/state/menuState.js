class MenuState extends Phaser.State {
    init() {

      console.log("init");
    }
  
    preload() {
    	this.game.load.image('menunormal', 'assets/MenuNormal.png');
    	this.game.load.image('bluebrain', 'assets/BlueBrain.png');
    	this.game.load.image('greenbrain', 'assets/GreenBrain.png');
   		this.game.load.image('fade', 'assets/fade.jpg');
        this.game.load.audio('music', 'assets/music/loop1bookashade.wav')
    }
  
    create() {
    	//pozadina
    	this.bg = this.game.add.sprite(0, 0, 'menunormal'); 
    	//dvete hemisferi
 		this.greenb = this.game.add.sprite(0, 0, 'greenbrain');
    	this.blueb = this.game.add.sprite(0, 0, 'bluebrain');
    	this.blueb.alpha = 0;
    	this.blueb.anchor.set(0);
   		this.greenb.anchor.set(0);
    	this.greenb.alpha = 0;
    	this.blueb.inputEnabled = true;
    	this.greenb.inputEnabled = true;
    	this.blueb.input.pixelPerfectOver = true;
    	this.blueb.input.useHandCursor = true;
    	this.greenb.input.pixelPerfectOver = true;
    	this.greenb.input.useHandCursos = true;
    	//zatemnuvacho
    	this.fader = this.game.add.sprite(0, 0, 'fade');
    	this.fader.alpha = 0;
    	//triggeri za sledna tranzicija
    	this.cutscenetrigger = false;
    	this.controlstrigger = false;
    	//muzika
    	this.music = this.game.add.audio('music')
    	this.music.play();
    	this.music.loopFull(1);
        this.fadein = this.game.add.sprite(0,0,'fade');
        this.fadein.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fadein).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
    }

    onClick() {
    }
 
    update() {
    	if(this.fader.alpha == 0){
    		if(this.blueb.input.pointerOver()){
    			this.blueb.bringToTop();
    			this.blueb.alpha = 1;
   			}else
    			this.blueb.alpha = 0;
    		if(this.greenb.input.pointerOver()){
    			this.greenb.bringToTop();
    			this.greenb.alpha = 1;
    		}else
				this.greenb.alpha = 0;
    		this.greenb.events.onInputDown.add(this.tranzicija1, this);
    		this.blueb.events.onInputDown.add(this.tranzicija2, this);
    	}
		if(this.fader.alpha == 1){
    		if(this.cutscenetrigger == true)
    			this.game.state.start('cutscene1');
    		if(this.controlstrigger == true)
    			this.game.state.start('controls');
    	}
    	if(this.fader.alpha !=0){
    		this.blueb.alpha = 0;
    		this.greenb.alpha = 0;
    	}

   
      //console.log("update");
  
    }
    tranzicija1(){
    	if(this.fader.alpha == 0){
    		this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
    		this.cutscenetrigger = true;
    	}
    	this.blueb.alpha = 0;
    	this.greenb.alpha = 0;
      	console.log('cutscene');
    }
    tranzicija2(){
    	if(this.fader.alpha == 0){
    		this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
    		this.controlstrigger = true;
    	}
    	this.blueb.alpha = 0;
    	this.greenb.alpha = 0;
      	console.log('kontroli');
    }
    shutdown() {
      	console.log("shutdown");
      	this.background = null;
    }
  }
  
  export default MenuState;
  