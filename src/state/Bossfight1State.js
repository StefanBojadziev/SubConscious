class Bossfight1State extends Phaser.State {
    init() {
      this.game.global = {};
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q,
            Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
        this.wasd = {
            jump: this.game.input.keyboard.addKey(Phaser.Keyboard.C),
            attack: this.game.input.keyboard.addKey(Phaser.Keyboard.Q),
            //jump: game.input.keyboard.addKey(Phaser.Keyboard.Q), // dvorak
            //attack: game.input.keyboard.addKey(Phaser.Keyboard.J), // dvorak
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            eden: this.game.input.keyboard.addKey(Phaser.Keyboard.ONE),
            dva: this.game.input.keyboard.addKey(Phaser.Keyboard.TWO),
            tri: this.game.input.keyboard.addKey(Phaser.Keyboard.THREE)
        };
    }
  
    preload() {
    this.game.load.tilemap('level1', 'assets/Levels/Bossfight1.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles-1', 'assets/Tilesets/bosstiles1.jpg');
    this.game.load.spritesheet('boss', 'assets/iceboss.png',100,180);   
    this.game.load.image('background', 'assets/whitebg.jpg', 800, 600);
    this.game.load.audio('music', 'assets/music/Iceboss.mp3');
    this.game.load.atlasJSONArray('atlas', 'assets/player/Iceatlas.png', 'assets/player/atlas.json');
    //this.game.load.atlasJSONArray('atlas-props', 'assets/player/atlas-props.png', 'assets/player/atlas-props.json');
    this.game.load.image('hurtscreen', 'assets/player/Hurtscreen.png');
    this.game.load.image('Health33', 'assets/player/Health3.png');
    this.game.load.image('Health22', 'assets/player/Health2.png');
    this.game.load.image('Health11', 'assets/player/Health1.png');
    this.game.load.spritesheet('pill', 'assets/player/pill.png', 40, 40);
    this.game.load.image('fader', 'assets/fade.jpg');
    this.game.load.image('icespike', 'assets/Icespike.png');
    this.game.load.image('snowball', 'assets/snowball.png');
    this.game.load.image('bg', 'assets/Tilesets/Bossfight1background.png');
    this.game.load.image('iceshot', "assets/player/ice.png");
    this.game.load.image('fireshot', "assets/player/fire.png");
    this.game.load.image('greenshot', "assets/player/green.png");
    this.game.load.image('holyshot', "assets/player/holy.png");
    this.game.load.image('magicshot', "assets/player/magic.png");
    this.game.load.image('yetihealth1', " assets/ybosshealth1.png");
    this.game.load.image('yetihealth2', " assets/ybosshealth2.png");
    this.game.load.image('yetihealth3', " assets/ybosshealth3.png");
    this.game.load.image('krug', " assets/boss1drop.png");
    this.game.load.image('bossdead', "assets/icebossdead.png");
    this.jumpTimer = 0;
    }

    create() {
    //pozadina
    this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'bg');
    this.bg.fixedToCamera = true;
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('tiles-1', 'tiles-1');
    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    this.layer = this.map.createLayer('Tile Layer 1');
    //muzika
    this.music = this.game.add.audio('music');
    this.music.play(); 
    //kolizija
    //this.layer.debug = true;
    this.layer.resizeWorld();
    this.layer.wrap = true;
    this.game.physics.arcade.gravity.y = 500;
    //setup na karakter
    this.player = this.game.add.sprite(10, 500, 'atlas', 'player-idle-1');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.anchor.setTo(0.5);
    this.player.body.bounce.y = 0;
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(11, 40, 35, 24);
    //animaci
    this.player.animations.add('idle', Phaser.Animation.generateFrameNames('player-idle-', 1, 4, '', 0), 6, true);
    this.player.animations.add('run', Phaser.Animation.generateFrameNames('player-run-', 1, 10, '', 0), 10, true);
    this.player.animations.add('run-shot', Phaser.Animation.generateFrameNames('player-run-shot-', 1, 10, '', 0), 10, true);
    this.player.animations.add('duck', ['player-duck'], 10, true);
    this.player.animations.add('jump', Phaser.Animation.generateFrameNames('player-jump-', 1, 6, '', 0), 10, true);
    this.player.animations.add('fall', Phaser.Animation.generateFrameNames('player-jump-', 3, 6, '', 0), 10, true);
    this.player.animations.add('shooting', Phaser.Animation.generateFrameNames('player-stand-', 1, 3, '', 0), 15, true);
    this.player.animations.add('hurt', Phaser.Animation.generateFrameNames('player-hurt-', 1, 2, '', 0), 4, false);
    this.player.animations.play('idle');
    //pukanje
    this.weapontype = 2;
    this.damage = 3;
    this.weapon1 = this.game.add.weapon(60, 'iceshot');
    this.weapon1.trackSprite(this.player, 13, -4);
    this.weapon1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon1.bulletSpeed = 350;
    this.weapon1.fireRate = 400;
    this.weapon1.bulletAngleOffset = 0;
    this.weapon1.bulletGravity.y = -489;
    //deklaracija na oruzhje
    this.weapon2 = this.game.add.weapon(60, 'fireshot');
    this.weapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon2.trackSprite(this.player, 13, -4);
    this.weapon2.bulletSpeed = 400;
    this.weapon2.fireRate = 100;
    this.weapon2.bulletAngleOffset = 0;
    this.weapon2.bulletGravity.y = -500;
    //kontroli
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.hurtscreen = this.game.add.sprite( 0, 0, 'hurtscreen');
    this.hurtscreen.fixedToCamera = true;
    this.hurtscreen.alpha = 0;

    this.health1 = this.game.add.sprite(0, 0, 'Health11');
    this.health2 = this.game.add.sprite(0, 0, 'Health22');
    this.health3 = this.game.add.sprite(0, 0, 'Health33');
    this.health1.fixedToCamera = true;
    this.health2.fixedToCamera = true;
    this.health3.fixedToCamera = true;
    this.health3.alpha = 1;
    this.health2.alpha = 0;
    this.health1.alpha = 0;

    this.pills = this.game.add.group();
    this.pills.enableBody = true;
    this.pillonmap = false;

    this.boss = this.game.add.sprite(700, 250, 'boss');
    this.game.physics.enable(this.boss, Phaser.Physics.ARCADE);
    this.boss.anchor.setTo(0.5);
    this.boss.body.bounce.y = 0;
    this.boss.body.collideWorldBounds = true;
    this.bosshealth = 480;
    this.boss.scale.setTo(1, 1);
    this.boss.animations.add('walk');
    this.boss.animations.play('walk', 4, true);
    this.boss.scale.x = -1;


    this.faza1 = 1;
    this.faza2 = 2;
    this.faza3 = 3;

    this.icespikes = this.game.add.group();
    this.icespikes.enableBody = true;
    this.snowballs = this.game.add.group();
    this.snowballs.enableBody = true;
    this.bulletkillcount = 0;
    this.j = 0;
    this.jj = 0;

    this.PlayerHealth = 3;

    this.randombroj;
    this.vreme = 10;
    this.brojka = 8;

    this.kapka1 = this.game.add.sprite(0, 0, 'yetihealth3');
    this.kapka2 = this.game.add.sprite(0, 0, 'yetihealth2');
    this.kapka3 = this.game.add.sprite(0, 0, 'yetihealth1');

    this.fader = this.game.add.sprite(0,0, 'fader');
    this.fader.alpha = 0;


    this.vreme1 = 0;
    }

    update() {
    //kolizija
    this.game.physics.arcade.collide(this.player, this.layer,);
    this.game.physics.arcade.collide(this.snowballs, this.layer,);
    this.game.physics.arcade.overlap(this.weapon1.bullets, this.boss, this.bosshit,  null, this);
    this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.overlap(this.weapon2.bullets, this.boss, this.bosshit,  null, this);
    this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.collide(this.boss, this.layer);
    this.game.physics.arcade.collide(this.pills, this.layer);
    this.player.body.velocity.x = 100;
    //dvizhenje
    if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -200;
        this.player.scale.x = -1;
    } else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 200;
        this.player.scale.x = 1;
    } else {
        this.player.body.velocity.x = 0;
     }
    //puka
        if (this.wasd.attack.isDown) {
        this.weaponfire();
        this.shootingFlag = true;
    } 
    else
        this.shootingFlag = false;
    //Dali levo ili desno da puka
    if(this.player.scale.x == -1){
        this.weapon1.fireAngle = 180;
        this.weapon2.fireAngle = 180;
        this.weapon1.trackSprite(this.player, -13, -4);
        this.weapon2.trackSprite(this.player, -13, -4);
    }
    else if (this.player.scale.x == 1){
        this.weapon1.fireAngle = 0;
        this.weapon2.fireAngle = 0;
        this.weapon1.trackSprite(this.player, 13, -4);
        this.weapon2.trackSprite(this.player, 13, -4);
    }
    //skoka
    if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -300;
        this.jumpTimer = this.game.time.now + 300;
    }
    //dur e kleknat da se menva pukanjeto
        if(this.isDuck == true && this.player.body.velocity.x == 0){
            if(this.player.scale.x == 1){
                this.weapon1.trackSprite(this.player, 13, 8);
                this.weapon2.trackSprite(this.player, 13, 8);
            }
            if(this.player.scale.x == -1){
                this.weapon1.trackSprite(this.player, -13, 8);
                this.weapon2.trackSprite(this.player, -13, 8);
            }
        }
    //animaci
    if (this.player.body.onFloor()) {
        if (this.player.body.velocity.x != 0) {
            if (this.shootingFlag) {
                this.player.animations.play('run-shot');
            } else {
                this.player.animations.play('run');
            }
            } else {
                if (this.cursors.down.isDown) {
                    this.player.animations.play('duck');
                    this.isDuck = true;
                } else {
                    this.isDuck = false;
                    if (this.shootingFlag) {
                        this.player.animations.play('shooting');
                    } else {
                        this.player.animations.play('idle');
                    }
                }
            }
        } else {
            if (this.player.body.velocity.y > 0) {
                this.player.animations.play('fall');
            } else if (this.player.body.velocity.y < 0) {
                this.player.animations.play('jump');
            }
        }

        if(this.PlayerHealth == 3){
            this.health3.alpha = 1;
            this.health2.alpha = 0;
            this.health1.alpha = 0;
        }
        if(this.PlayerHealth == 2){
            this.health3.alpha = 0;
            this.health2.alpha = 1;
            this.health1.alpha = 0;
        }
        if(this.PlayerHealth == 1){
            this.health3.alpha = 0;
            this.health2.alpha = 0;
            this.health1.alpha = 1;
            if((Math.floor(Math.random() * 300) + 1) == 30 && this.pillonmap == false){
                this.pill = this.pills.create((Math.floor(Math.random() * 500) + 0), 0, 'pill');
                this.pill.animations.add('walk');
                this.pill.animations.play('walk', 4, true);
                this.pillonmap = true;
                this.pill.scale.setTo(1.5,1.5);
        }
        }
        if(this.PlayerHealth <= 0){
            if(this.bosshealth>0){
            this.music.destroy();
            this.game.state.start('bossfight1');
            }
        }
        if(this.game.physics.arcade.overlap(this.player, this.pills)){
            this.pillcollect(this.player, this.pill)
        }
        if(this.game.time.totalElapsedSeconds() >= this.vreme){
            this.vreme+=this.brojka;
            this.randombroj = Math.floor(Math.random() * 3) + 1;
            console.log(this.randombroj);
        }
        this.j+=10;
        if(this.j == 800){
            this.j=0;
        }
        if(this.randombroj == 1){
            if(this.j%100 == 0){ 
                this.icespike = this.icespikes.create(Math.floor(Math.random() * 800) + 1, 0, 'icespike');
                this.icespike.scale.setTo(0.3, 0.3);
                this.icespike.body.gravity.y = 10;
        }
          if(this.j%200 == 0){ 
            this.icespike = this.icespikes.create(Math.floor(Math.random() * 800) + 1, 0, 'icespike');
            this.icespike.scale.setTo(0.3, 0.3);
            this.icespike.body.gravity.y = 10;
        }

        }
        if(this.game.physics.arcade.overlap(this.player, this.icespikes)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.icespike)
        }
        if(this.randombroj == 2){
            if(this.j%600 == 0){ 
                this.snowball = this.snowballs.create(800,Math.floor(Math.random() * 200) + 1 , 'snowball');
                this.snowball.scale.setTo(0.8, 0.8);
                this.snowball.body.gravity.y = 10;
                this.snowball.body.bounce.y = 0.9;
                this.snowball.body.velocity.x =(Math.floor(Math.random() * 400) + 100) *-1;
        }


        }
        if(this.game.physics.arcade.overlap(this.player, this.snowballs)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.snowball)
        }
        this.jj+=10;
        if(this.jj == 1600){
            this.jj == 0;
        }
        if(this.randombroj == 3){
            if(this.jj%800 == 0){
                    this.snowball = this.snowballs.create(800, 400 , 'snowball');
                    this.snowball.scale.setTo(0.5, 0.5);
                    this.snowball.body.gravity.y = 10;
                    this.snowball.body.bounce.y = 0.2;
                    this.snowball.body.velocity.x =(Math.floor(Math.random() * 300) + 200) *-1; 

            }

        }
        if(this.game.physics.arcade.overlap(this.player, this.boss)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.boss);
        }
        if(this.bosshealth <= 300)
            this.brojka = 6;
        if(this.bosshealth <= 100)
            this.brojka = 1.5;
        //pukanje
        if(this.wasd.eden.isDown){
            this.weapontype = 1;
        }
        if(this.wasd.dva.isDown){
            this.weapontype = 2;
        }

        console.log(this.game.time.fps);
        if(this.bosshealth <= 400 && this.kapka3.alpha == 1 ){
            this.kapka3.alpha = 0.5;
        }
        if(this.bosshealth <= 320 && this.kapka3.alpha == 0.5 ){
            this.kapka3.alpha = 0;
        }
        if(this.bosshealth <= 240 && this.kapka3.alpha == 0 && this.kapka2.alpha == 1){
            this.kapka2.alpha = 0.5;
        }
        if(this.bosshealth <= 160 && this.kapka2.alpha == 0.5 ){
            this.kapka2.alpha = 0;
        }
        if(this.bosshealth <= 80 && this.kapka2.alpha == 0 ){
            this.kapka1.alpha = 0.5;
        }
        if(this.bosshealth <=0){     
            //ispukvanje na topche
            this.tochka.fire();
            //promena na agolot
            this.tochka.fireAngle -= 8;
            this.randombroj = 0;
            if(this.game.time.totalElapsedSeconds()>= this.vreme1){
                this.vreme1+=10;
                this.game.add.tween(this.fader).to( { alpha: 1 }, 2000 , Phaser.Easing.Linear.None, true), this; 
            }
            if(this.fader.alpha == 1){           
                this.music.destroy();
                this.game.state.start('cutscene4');
            }
        }


    }
    weaponfire(){
        if(this.weapontype == 1){
            this.damage = 1;
            this.weapon1.fire();
        }
        if(this.weapontype == 2){
            this.damage = 2;
            this.weapon2.fire();
        }
    }
    playerhurt (player, icespike){
        this.PlayerHealth--;
        this.hurtscreen.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.hurtscreen).to( { alpha: 0 }, 2000 , Phaser.Easing.Linear.None, true), this);
        this.player.animations.play('hurt')
        console.log(this.PlayerHealth);
    }
    pillcollect (player, pill){
        console.log('pillplayher');
        if(this.PlayerHealth == 2 || this.PlayerHealth == 1){
            pill.kill();
            this.pillonmap = false;
            this.PlayerHealth++;
        }
    }
    
    LayerKolizija (bullet, layer){
        bullet.kill();
        this.bulletkillcount++;
        console.log('bulletkill');
    }
    bosshit (boss, bullet) {
        bullet.kill();
        this.bulletkillcount++;
        this.bosshealth -= this.damage;
        if(this.bosshealth<=0){
            this.deadboss = this.game.add.sprite(this.boss.x, this.boss.y, 'bossdead');
            this.deadboss.anchor.setTo(0.5,0.5);
            this.boss.kill();
            //gi deklariram topchinjata
            this.tochka = this.game.add.weapon(600, 'krug');
            this.tochka.trackSprite(this.boss, -3, 20);
            //uslov za unishtuvanje na topchinjata
            this.tochka.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            //brzina na topchinjata
            this.tochka.bulletSpeed = 60;
            //brzina na ispukvanje na topchinjata
            this.tochka.fireRate = 100;
            //agol
            this.tochka.bulletAngleOffset = 0;
            //fizikata da ne igra nikakva uloga vrz topchinjata
            this.tochka.bulletGravity.y = -500;
            //pochetniot agol
            this.tochka.fireAngle =180;
            this.vreme1 = this.game.time.totalElapsedSeconds()+5;
            this.vreme+=20;
        }
      console.log(this.bosshealth);
    }

    shutdown() {
      
    }
  }
  
  export default Bossfight1State;
  