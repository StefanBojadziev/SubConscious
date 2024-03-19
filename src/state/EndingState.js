class Endingstate extends Phaser.State {
    init() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }
  
    preload() {
        this.game.load.image('fader', 'assets/whitebg.jpg');
        this.game.load.image('fader1', 'assets/fade.jpg')
        this.game.load.image('0', 'assets/numbers/0.png');
        this.game.load.image('1', 'assets/numbers/1.png');
        this.game.load.image('2', 'assets/numbers/2.png');
        this.game.load.image('3', 'assets/numbers/3.png');
        this.game.load.image('4', 'assets/numbers/4.png');
        this.game.load.image('5', 'assets/numbers/5.png');
        this.game.load.image('6', 'assets/numbers/6.png');
        this.game.load.image('7', 'assets/numbers/7.png');
        this.game.load.image('8', 'assets/numbers/8.png');
        this.game.load.image('9', 'assets/numbers/9.png');    
        this.game.load.image('whitedot', 'assets/numbers/whitedot.png');
        this.game.load.image('krug', "assets/krug.png");
        this.game.load.image('screen', "assets/player/hurtscreen.png");
        this.game.load.image('observant', "assets/observant.png")
    }

    create() {
        //pozadina
        this.bg = this.game.add.sprite(0, 0, 'fader');
        this.bg.fixedToCamera = true;
        this.i = -1;
        this.brojach1 = -1;
        this.brojach2 = -1;
        this.brojach3 = -1;
        this.brojach4 = -1;
        this.brojach5 = -1;
        this.brojach6 = -1;
        this.broj0 = this.game.add.sprite(100, 200 , this.i);
        this.broj0.scale.setTo(0.3,0.3);
        this.broj1 = this.game.add.sprite(200, 200 , this.i);
        this.broj1.scale.setTo(0.3,0.3);
        this.broj2 = this.game.add.sprite(300, 200 , this.i);
        this.broj2.scale.setTo(0.3,0.3);
        this.broj3 = this.game.add.sprite(400, 200 , this.i);
        this.broj3.scale.setTo(0.3,0.3);
        this.broj4 = this.game.add.sprite(500, 200 , this.i);
        this.broj4.scale.setTo(0.3,0.3);
        this.broj5 = this.game.add.sprite(600, 200 , this.i);
        this.broj5.scale.setTo(0.3,0.3);
        this.vreme = 0.8;
        this.j = 0;
        this.game.input.onDown.add(this.brojkasort, this);
        this.fader = this.game.add.sprite(0,0,'fader1');
        this.fader.alpha = 0;
        this.game.physics.arcade.gravity.y = 500;
        //deklariram sredina od kaj sho kje izlegvat topchinjata
        this.sredina = this.game.add.sprite(400,300,'krug');
        this.sredina.alpha = 0;
        //gi deklariram topchinjata
        this.tochka = this.game.add.weapon(600, 'krug');
        this.tochka.trackSprite(this.sredina, 0, 0);
        //uslov za unishtuvanje na topchinjata
        this.tochka.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        //brzina na topchinjata
        this.tochka.bulletSpeed = 60;
        //brzina na ispukvanje na topchinjata
        this.tochka.fireRate = 1;
        //agol
        this.tochka.bulletAngleOffset = 0;
        //fizikata da ne igra nikakva uloga vrz topchinjata
        this.tochka.bulletGravity.y = -500;
        //pochetniot agol
        this.tochka.fireAngle =180;
        this.whitedot = this.game.add.sprite(800,600,'whitedot');
        this.whitedot.alpha = 0;
        this.screen = this.game.add.sprite(0,0,'screen');
        this.screen.alpha = 0;
        this.observant = this.game.add.sprite(0,0,'observant');

        this.greshki = 0;
    }

    update() { 
    console.log(this.i);        	
        if(this.game.time.totalElapsedSeconds() >= this.vreme && this.fader.alpha == 0 ){
     		this.i++;
    		if(this.i==10)
    			this.i = 0;
        	this.vreme+=0.8;
        	this.slowbrojki();
        }
        this.brojkivrtat();
        if(this.brojach6 != -1)
        	this.endscenario();
        if(this.fader.alpha == 1){
        	//ispukvanje na topche
        	this.tochka.fire();
       		//promena na agolot
        	this.tochka.fireAngle -= 1.61803398875;
        	if(this.game.time.totalElapsedSeconds()>=this.vreme){
        		this.game.state.start('Cutscene6');
        	}
        }
        if(this.greshki >= 2)
        	this.game.state.start('cutscene7');

    }

    brojkivrtat (){
    	this.j++;
    	if(this.j == 10)
    		this.j = 0;
		if(this.brojach1 == -1)
			this.broj1.loadTexture(this.j);
    	if(this.brojach2 == -1)
			this.broj2.loadTexture(this.j);
		if(this.brojach3 == -1)
			this.broj3.loadTexture(this.j);
		if(this.brojach4 == -1)
			this.broj4.loadTexture(this.j);
		if(this.brojach5 == -1)
			this.broj5.loadTexture(this.j);
    }

    brojkasort (){
	    if(this.whitedot.alpha == 0){  
	    	this.whitedot.alpha = 1;
	    	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.whitedot).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);  	
	    	if(this.brojach6 == -1 && this.brojach5 != -1){
	    		this.brojach6 = this.i;
	    	}
	    	if(this.brojach5 == -1 && this.brojach4 != -1){
	    		this.brojach5 = this.i;
	    	}
	    	if(this.brojach4 == -1 && this.brojach3 != -1){
	    		this.brojach4 = this.i;
	    	}
	    	if(this.brojach3 == -1 && this.brojach2 != -1){
	    		this.brojach3 = this.i;
	    	}
	    	if(this.brojach2 == -1 && this.brojach1 != -1){
	    		this.brojach2 = this.i;
	    	}
	    	if(this.brojach1 == -1){
	    		this.brojach1 = this.i;
	    	}
	    	this.i = this.j;
	    	console.log(' ' + this.brojach1 + ' ' + this.brojach2+ ' ' + this.brojach3 +  ' ' +this.brojach4 +  ' ' +this.brojach5 +  ' ' +this.brojach6);
	    }
    }

    slowbrojki (){
    	if(this.brojach1 == -1){
			this.broj0.loadTexture(this.i);
    	}
    	if(this.brojach2 == -1)
			this.broj1.loadTexture(this.i);
    	if(this.brojach3 == -1)
			this.broj2.loadTexture(this.i);
		if(this.brojach4 == -1)
			this.broj3.loadTexture(this.i);
		if(this.brojach5 == -1)
			this.broj4.loadTexture(this.i);
		if(this.brojach6 == -1)
			this.broj5.loadTexture(this.i);
    }

    endscenario (){        

    	if(this.brojach1 == 1 && this.brojach2 == 1 && this.brojach3 == 2
        	&& this.brojach4 == 3 && this.brojach5 == 5 && this.brojach6 == 8
        	&& this.fader.alpha == 0){
        	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
       	this.observant.alpha = 0;
		this.vreme = this.game.time.totalElapsedSeconds() + 15;
    	}
		else{
       	this.screen.alpha = 1;
       	this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.screen).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
       	this.brojach1 = -1;
        this.brojach2 = -1;
        this.brojach3 = -1;
        this.brojach4 = -1;
        this.brojach5 = -1;
        this.brojach6 = -1;
        this.greshki++;
        console.log(this.greshki);
        }
    }

    shutdown() {
      
    }
  }
  
  export default Endingstate;
  