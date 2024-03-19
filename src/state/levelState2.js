class LevelState3 extends Phaser.State {
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
    this.game.load.tilemap('level2', 'assets/Levels/level22.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles-1', 'assets/Tilesets/offtileset2.png');
    this.game.load.spritesheet('archer', 'assets/blob.png', 80, 30);
    this.game.load.image('background', 'assets/Tilesets/level2background.png');
    this.game.load.audio('music', 'assets/music/Level2.mp3');
    this.game.load.atlasJSONArray('atlas', 'assets/player/Iceatlas.png', 'assets/player/atlas.json');
    this.game.load.image('hurtscreen', 'assets/player/Hurtscreen.png');
    this.game.load.image('Health33', 'assets/player/Health3.png');
    this.game.load.image('Health22', 'assets/player/Health2.png');
    this.game.load.image('Health11', 'assets/player/Health1.png');
    this.game.load.image('pill', 'assets/player/pill.png', 16, 16);
    this.game.load.image('fader', 'assets/fade.jpg');
    this.game.load.image('iceshot', "assets/player/ice.png");
    this.game.load.image('fireshot', "assets/player/fire.png");
    this.game.load.image('greenshot', "assets/player/green.png");
    this.game.load.image('holyshot', "assets/player/holy.png");
    this.game.load.image('magicshot', "assets/player/magic.png");
    this.game.load.image('snowball', 'assets/snowball.png');
    this.game.load.image('snowplatform', 'assets/snowplatform.png');
    this.game.load.image('spike', 'assets/spike.png');
    this.game.load.image('cavetekst', 'assets/level2tekst.png');
    this.game.load.image('arrow', 'assets/arrow.png');
    this.game.load.image('flashback2', "assets/Flashbacks/flashback2.png");
    this.game.load.image('pickup', "assets/weapon2pickup.png");
    this.jumpTimer = 0;
    }

    create() {
    //pozadina
    this.bg = this.game.add.sprite(0, 0,'background');
    //this.bg.fixedToCamera = true;
    this.map = this.game.add.tilemap('level2');
    this.map.addTilesetImage('tiles-1', 'tiles-1');
    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    this.layer = this.map.createLayer('Tile Layer 1');
    //muzika
    this.music = this.game.add.audio('music');
    this.music.play(); 
    //this.layer.debug = true;
    this.layer.resizeWorld();
    this.layer.wrap = true;
    this.game.physics.arcade.gravity.y = 500;
    //setup na karakter
    this.player = this.game.add.sprite(10, 800, 'atlas', 'player-idle-1');
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
    //kamera
    this.game.camera.follow(this.player);
    //kontroli
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //sila
    this.PlayerHealth = 3;
    //hurtscreen
    this.hurtscreen = this.game.add.sprite( 0, 0, 'hurtscreen');
    this.hurtscreen.fixedToCamera = true;
    this.hurtscreen.alpha = 0;
    //sila
    this.health1 = this.game.add.sprite(0, 0, 'Health11');
    this.health2 = this.game.add.sprite(0, 0, 'Health22');
    this.health3 = this.game.add.sprite(0, 0, 'Health33');
    this.health1.fixedToCamera = true;
    this.health2.fixedToCamera = true;
    this.health3.fixedToCamera = true;
    this.health3.alpha = 1;
    this.health2.alpha = 0;
    this.health1.alpha = 0;
    //deklaracija na orbs za sobirvanje
    this.orbs = this.game.add.group();
    this.orbs.enableBody = true;
    this.orb1 = this.orbs.create(3660, 400, 'fireshot');
    this.orb2 = this.orbs.create(3415, 850, 'fireshot');
    this.orb1.scale.setTo(1.5,1.5);
    this.orb2.scale.setTo(1.5,1.5);
    this.isDuck = false;
    //deklaracija na snowballs
    this.snowball1 = this.game.add.sprite(1433, 400 , 'snowball');
    this.snowball1.enableBody = true;
    this.game.physics.enable(this.snowball1, Phaser.Physics.ARCADE);
    this.snowball1.scale.setTo(0.5, 0.5);
    this.snowball1.body.gravity.y = 10;
    this.snowball1.body.bounce.y = 0;
    this.snowball1.body.velocity.x =0; 
    this.snowball2 = this.game.add.sprite(2090, 560 , 'snowball');
    this.snowball2.enableBody = true;
    this.game.physics.enable(this.snowball2, Phaser.Physics.ARCADE);
    this.snowball2.scale.setTo(0.5, 0.5);
    this.snowball2.body.gravity.y = 10;
    this.snowball2.body.bounce.y = 0;
    this.snowball2.body.velocity.x =0; 
    //deklaracija na snowball platformite
    this.platforms = this.add.physicsGroup();
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.platforms.setAll('body.velocity.x', 0);
    this.snowball1trigger = true;
    this.snowball2trigger = true;
    //brojach na sobrani orboj
    this.orbcounter = 0;
    //tekst pri sluchaj na nesobrani orboj
    this.cavetekst = this.game.add.sprite(0,0,'cavetekst');
    this.cavetekst.alpha = 0;
    this.cavetekst.fixedToCamera = true;
    //deklaracija na neprijatel
    this.archer = this.game.add.sprite(3047, 460,'archer');
    this.archer.animations.add('walk');
    this.archer.animations.play('walk', 7, true);
    this.archer.scale.setTo(1.2,1.2);
    this.archer.anchor.setTo(0.5,0.5);
    this.game.physics.enable(this.archer, Phaser.Physics.ARCADE);
    this.archerhealth = 3;
    //deklaracija na proektilite na neprijatelot
    this.arrow = this.game.add.weapon(30,'arrow');
    this.arrow.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.arrow.bulletSpeed = 350;
    this.arrow.fireRate = 1500;
    this.arrow.fireAngle = 180;
    this.arrow.trackSprite(this.archer, 0, 0);
    this.arrow.bulletGravity.y = -479;
    //deklaracija na fadero za zatemnuvanje na slikata
    this.fader = this.game.add.sprite(0,0,'fader');
    this.fader.alpha = 0;
    this.fader.fixedToCamera = true;
    //spawn na archer
    this.game.add.sprite(200, 400, 'archer');
    //deklariram promenliva za falldamage
    this.falldamage = false;
    //deklaracija na oruzhje
    this.weapontype = 1 ;
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
    this.flashbacktrigger = false;
    this.flashback = this.game.add.sprite(0,0, 'flashback2');
    this.flashback.alpha = 0;
    this.flashback.fixedToCamera = true;
    this.flashbackcounter = 0;
    this.stillflash = false;
    this.pickup = this.game.add.sprite(250,150,'pickup');
    this.pickup.alpha = 0;
    this.pickup.fixedToCamera = true;
    }

    update() {
    //kolizija
    this.game.physics.arcade.collide(this.player, this.layer,);
    this.game.physics.arcade.overlap(this.weapon1.bullets, this.archer, this.archerhit,  null, this);
    this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.overlap(this.weapon2.bullets, this.archer, this.archerhit,  null, this);
    this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.collide(this.orbs, this.layer);
    this.game.physics.arcade.collide(this.snowball1, this.layer);
    this.game.physics.arcade.collide(this.player, this.snowball1);
    this.game.physics.arcade.collide(this.snowball2, this.layer);
    this.game.physics.arcade.collide(this.player, this.snowball2);
    this.game.physics.arcade.collide(this.player, this.platforms);
    this.game.physics.arcade.collide(this.archer, this.layer);
    this.game.physics.arcade.collide(this.arrow.bullets, this.layer, this.LayerKolizija, null,this);
    this.game.physics.arcade.collide(this.player, this.arrow.bullets, this.playerhurt, null,this);
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
    if (this.jumpButton.isDown && this.player.body.velocity.y == 0 && this.game.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -300;
        this.jumpTimer = this.game.time.now + 300;
    }
    //animaci
    if(this.player.body.velocity.y == 0) {
        if(this.player.body.velocity.x != 0) {
            if (this.shootingFlag) {
                this.player.animations.play('run-shot');
            } else {
                this.player.animations.play('run');
            }
            } else {
                if(this.cursors.down.isDown) {
                    this.player.animations.play('duck');
                    this.isDuck = true;
                } else {
                    this.isDuck = false;
                    if(this.shootingFlag) {
                        this.player.animations.play('shooting');
                    } else {
                        this.player.animations.play('idle');
                    }
                }
            }
        } else {
            if (this.player.body.velocity.y > 0) {
                this.player.animations.play('fall');
            } else if(this.player.body.velocity.y < 0) {
                this.player.animations.play('jump');
            }
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
        //proverva dali go nadminva limito na visina
       // console.log(this.player.body.velocity.y);
        //console.log(this.player.body.blocked.down);
        if(this.player.body.velocity.y >= 590)  
            this.falldamage = true;
        //proverva dali e na zemja od ko go nadmina limito
        if(this.falldamage == true && this.player.body.velocity.y <=10){
            this.playerhurt();
            this.falldamage = false;
        }
        //da se menva healthbaro spored srcata
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
        if(this.PlayerHealth <= 1){
            this.health3.alpha = 0;
            this.health2.alpha = 0;
            this.health1.alpha = 1;
        }
        //ako umri karaktero
        if(this.PlayerHealth <= 0 || this.player.y>1650){
            this.music.destroy();
            this.game.state.start('level2');
        }
        //berenje na orboj
        if(this.game.physics.arcade.overlap(this.player, this.orb1)){
            this.orb1.kill();
            this.orbcounter++;
        }
        if(this.game.physics.arcade.overlap(this.player, this.orb2)){
            this.orb2.kill();
            this.orbcounter++;
        }
        //sozdavanje na platformi pri unishtuvanje na snowballs
        if(this.snowball1.y >=1250 && this.snowball1trigger == true){
            this.snowball1trigger = false;
            this.snowball1.kill();
            this.platforms.create(1750, 1320, 'snowplatform');
            this.platforms.setAll('body.allowGravity', false);
            this.platforms.setAll('body.immovable', true);
            this.platforms.setAll('body.velocity.x', 0);
        }
        if(this.snowball2.y >=1250 && this.snowball2trigger == true){
            this.snowball2trigger = false;
            this.snowball2.kill();
            this.platforms.create(2420, 1349, 'snowplatform');
            this.platforms.setAll('body.allowGravity', false);
            this.platforms.setAll('body.immovable', true);
            this.platforms.setAll('body.velocity.x', 0);
        }
        //uslov za tranzicija vo sleden level
        if(this.player.y >=1120 && this.player.x >=3238){
            if(this.orbcounter>=2 && this.fader.alpha == 0)
                this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 2000 , Phaser.Easing.Linear.None, true), this);
            if(this.orbcounter<2){
                //ako gi nema sobrano orbojte
                this.cavetekst.alpha = 1;
            }
        }else
            this.cavetekst.alpha = 0;
            if(this.fader.alpha == 1){
                this.music.destroy();
                this.game.state.start('level2-cutscene3');
            }
        //neprijatelot da puka dur e zhiv
        if(this.archerhealth>0){
            this.arrow.fire();
        if(this.player.x<=this.archer.x){
            this.arrow.fireAngle = 180;
            this.archer.scale.x = 1.2;
        }
        if(this.player.x>=this.archer.x){
            this.arrow.fireAngle = 0;
            this.archer.scale.x = -1.2;
        }
        }

        //odredva koj vid na oruzhje da go ispuka
        if(this.wasd.eden.isDown){
            this.weapontype = 1;
        }
        if(this.wasd.dva.isDown && this.orbcounter>=2){
            this.weapontype = 2;
            this.pickup.alpha = 0;
        }
        if(this.player.x>=2800 && this.player.y >=1100 && this.flashbacktrigger == false){
            this.flashbacktrigger = true;
            this.stillflash = true;
            this.flashback.alpha = 1;
            this.tajmer = 700;
            if(this.flashbackcounter == 5)
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.flashback).to( { alpha: 0 },
                2000, Phaser.Easing.Linear.None, true), this);  
            else
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.flashback).to( { alpha: 0 },
                this.tajmer, Phaser.Easing.Linear.None, true), this);
                console.log('bla');
        }
        if(this.stillflash == true && this.flashback.alpha == 0){
            this.flashbacktrigger = false;
            this.flashbackcounter++;
            this.stillflash = false;
            this.tajmer-=100
        }
        if(this.flashbackcounter == 6){
            this.flashback.alpha = 0
            this.flashback.fixedToCamera = false;
            this.flashback.kill();
        }
        if(this.orbcounter == 2 && this.pickup.alpha == 0){
            this.pickup.alpha = 1
            this.orbcounter++;
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

    playerhurt (player, archer){
        if(this.hurtscreen.alpha == 0){
        this.PlayerHealth--;
        this.hurtscreen.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.hurtscreen).to( { alpha: 0 }, 2000 , Phaser.Easing.Linear.None, true), this);
        this.player.animations.play('hurt')}
        console.log(this.PlayerHealth);
    }
    orbcollect (orb, player){
        this.orb.kill();
        this.orbcounter++;
        console.log('stignav');
    }
    
    LayerKolizija (bullet, layer){
        bullet.kill();
        console.log('bulletkill');
    }
    archerhit (archer, bullet) {
        console.log('archerhit');
        bullet.kill();
        this.archerhealth--;
        if(this.archerhealth == 0){
        archer.kill();
        this.arrow.kill;
    }
      
        console.log(this.archerhealth);
    }

    shutdown() {
      
    }
  }
  
  export default LevelState3;
  