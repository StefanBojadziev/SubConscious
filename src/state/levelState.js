class LevelState extends Phaser.State {
    init() {
      this.game.global = {};
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q,
            Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
        this.wasd = {
            jump: this.game.input.keyboard.addKey(Phaser.Keyboard.C),
            attack: this.game.input.keyboard.addKey(Phaser.Keyboard.Q),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            eden: this.game.input.keyboard.addKey(Phaser.Keyboard.ONE),
            dva: this.game.input.keyboard.addKey(Phaser.Keyboard.TWO),
            tri: this.game.input.keyboard.addKey(Phaser.Keyboard.THREE)
        };
    }
  
    preload() {
        this.game.load.tilemap('level1', 'assets/Levels/Level1tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles-1', 'assets/Tilesets/lvl1tileset16x16.png');
        this.game.load.image('background', 'assets/whitebg.jpg', 800, 600.);
        this.game.load.audio('music', 'assets/music/Phaze.mp3');
        this.game.load.atlasJSONArray('atlas', 'assets/player/Atlas.png', 'assets/player/atlas.json');
        this.game.load.image('tekst7', 'assets/Cutscene1/level1tekst1.png');
        this.game.load.image('tekst8', 'assets/Cutscene1/level1tekst2.png');
        this.game.load.image('tekst9', 'assets/Cutscene1/level1tekst3.png');
        this.game.load.image('tekst10', 'assets/Cutscene1/level1tekst4.png');
        this.game.load.image('tekst11', 'assets/Cutscene1/level1tekst5.png');
        this.game.load.image('tekst12', 'assets/Cutscene1/level1tekst6.png');
        this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
        this.game.load.image('tekst13', 'assets/Cutscene1/triger 1/level1tekst7.png');
        this.game.load.image('tekst14', 'assets/Cutscene1/triger 1/level1tekst8.png');
        this.game.load.image('tekst15', 'assets/Cutscene1/triger 1/level1tekst9.png');
        this.game.load.image('hurtscreen', 'assets/player/Hurtscreen.png');
        this.game.load.image('Health33', 'assets/player/Health3.png');
        this.game.load.image('Health22', 'assets/player/Health2.png');
        this.game.load.image('Health11', 'assets/player/Health1.png');
        this.game.load.spritesheet('pill', 'assets/player/pill.png', 40, 40);
        this.game.load.image('fader', 'assets/fade.jpg');
        this.game.load.image('iceshot', "assets/player/ice.png");
        this.game.load.image('fireshot', "assets/player/fire.png");
        this.game.load.image('greenshot', "assets/player/green.png");
        this.game.load.image('holyshot', "assets/player/holy.png");
        this.game.load.image('magicshot', "assets/player/magic.png");
        this.game.load.image('flashback1', "assets/Flashbacks/flashback1.png");
        this.game.load.image('muzika', "assets/muzika.png");
        this.jumpTimer = 0;
    }

    create() {
        //pozadina
        this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'background');
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
        this.player = this.game.add.sprite(80, 80, 'atlas', 'player-idle-1');
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
        this.weapon = this.game.add.weapon(60, 'iceshot');
        this.weapon.trackSprite(this.player, 13, -4);
        this.weapontype = 1;
        this.damage = 2;
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon.bulletSpeed = 350;
        this.weapon.fireRate = 400;
        this.weapon.bulletAngleOffset = 0;
        this.weapon.bulletGravity.y = -489;
        //kontroli
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //teksto
        this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
        this.tekst1 = this.game.add.sprite(0, 0, 'tekst7');
        this.tekst2 = this.game.add.sprite(0, 0, 'tekst8');
        this.tekst3 = this.game.add.sprite(0, 0, 'tekst9');
        this.tekst4 = this.game.add.sprite(0, 0, 'tekst10');
        this.tekst5 = this.game.add.sprite(0, 0, 'tekst11');
        this.tekst6 = this.game.add.sprite(0, 0, 'tekst12');
        this.zadtekst.alpha = 1;
        this.tekst1.alpha = 1;
        this.tekst2.alpha = 0;
        this.tekst3.alpha = 0;
        this.tekst4.alpha = 0;
        this.tekst5.alpha = 0;
        this.tekst6.alpha = 0;
        this.tekst1.fixedToCamera = true;
        this.tekst2.fixedToCamera = true;
        this.tekst3.fixedToCamera = true;
        this.tekst4.fixedToCamera = true;
        this.tekst5.fixedToCamera = true;
        this.tekst6.fixedToCamera = true;
        this.tekst7 = this.game.add.sprite(0, 0, 'tekst13');
        this.tekst8 = this.game.add.sprite(0, 0, 'tekst14');
        this.tekst9 = this.game.add.sprite(0, 0, 'tekst15');
        this.tekst7.alpha = 0;
        this.tekst8.alpha = 0;
        this.tekst9.alpha = 0;
        this.tekst7.fixedToCamera = true;
        this.tekst8.fixedToCamera = true;
        this.tekst9.fixedToCamera = true;
        this.zadtekst.fixedToCamera = true;
        //BETA health system
        this.PlayerHealth = 3;
        this.immunity = 30;
        //neprijatel tester
        this.spider = this.game.add.sprite(8820, 300, 'atlas', 'crab-idle-1');
        this.spider.animations.add('idle', Phaser.Animation.generateFrameNames('crab-idle-', 1, 4, '', 0), 10, true);
        this.spider.animations.add('walk', Phaser.Animation.generateFrameNames('crab-walk-', 1, 4, '', 0), 10, true);
        this.spider.animations.play('walk');
        this.game.physics.enable(this.spider, Phaser.Physics.ARCADE);
        this.spider.anchor.setTo(0.5);
        this.spider.body.bounce.y = 0.3;
        this.spider.body.collideWorldBounds = true;
        this.spider.body.setSize(16, 25, 16, 7);
        this.trigger1 = true;
        this.trigger2 = true;
        this.trigger3 = false;
        this.spiderhealth = 10;
        this.spiderdead = false;
        this.spidermovetrigger = false;
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
        //apoj
        this.pills = this.game.add.group();
        this.pills.enableBody = true;
        this.pill = this.pills.create(7300, 0, 'pill');
        this.pill.scale.setTo(1.5, 1.5)
        this.pill.animations.add('walk');
        this.pill.animations.play('walk', 4, true);
        this.isDuck = false;
        this.flashbacktrigger = false;
        this.flashback = this.game.add.sprite(0,0, 'flashback1');
        this.flashback.alpha = 0;
        this.flashback.fixedToCamera = true;
        this.flashbackcounter = 0;
        this.stillflash = false;
        this.size1 = 1;

    }

    update() {
        //kolizija
        this.game.physics.arcade.collide(this.player, this.layer,);
        this.game.physics.arcade.overlap(this.weapon.bullets, this.spider, this.Spiderhit,  null, this);
        this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija,  null, this);
        this.game.physics.arcade.collide(this.spider, this.layer);
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
            this.weapon.fire();
            this.shootingFlag = true;
        } 
        else
            this.shootingFlag = false;
        //Dali levo ili desno da puka
        if(this.player.scale.x == -1){
            this.weapon.fireAngle = 180;
            this.weapon.trackSprite(this.player, -13, -4);
        }
        else if (this.player.scale.x == 1){
            this.weapon.fireAngle = 0;
            this.weapon.trackSprite(this.player, 13, -4);
        }
        //skoka
        if (this.jumpButton.isDown && this.player.body.onFloor()
        && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -300;
            this.jumpTimer = this.game.time.now + 300;
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
            //dur e kleknat da se menva pukanjeto
            if(this.isDuck == true && this.player.body.velocity.x == 0){
                if(this.player.scale.x == 1)
                this.weapon.trackSprite(this.player, 13, 8);
                if(this.player.scale.x == -1)
                this.weapon.trackSprite(this.player, -13, 8);
            }
            //tekst na pochetok
            if(this.tekst1.alpha == 1){
                this.tekst1.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst2).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);

            }
            else if(this.tekst2.alpha == 1){
                this.tekst2.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst3).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
            }
            else if(this.tekst3.alpha == 1){
                this.tekst3.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst4).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
            }
            else if(this.tekst4.alpha == 1){
                this.tekst4.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst5).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
            }
            else if(this.tekst5.alpha == 1){
                this.tekst5.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst6).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
            }
            else if(this.tekst6.alpha == 1){
                    this.game.time.events.add(Phaser.Timer.HOUR *4,
                    this.game.add.tween(this.tekst6).to( { alpha: 0 },
                    4000, Phaser.Easing.Linear.None, true), this);
                    this.game.time.events.add(Phaser.Timer.HOUR *4,
                    this.game.add.tween(this.zadtekst).to( { alpha: 0 },
                    4000, Phaser.Easing.Linear.None, true), this);
            }
            this.playerspiderdistancex = this.player.x - this.spider.x;
            this.playerspiderdistancey = this.player.y - this.spider.y;
            //ko kje stigni
            if(this.trigger1 == true && this.player.x >= 7250){
                this.trigger1 = false;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst7).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
                this.spidermovetrigger = true;
            }
            if(this.tekst7.alpha == 1){
                this.tekst7.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst8).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
            }
            if(this.tekst8.alpha == 1){
                this.tekst8.alpha = 0;

            }
            if(this.spiderdead == true){
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.tekst9).to( { alpha: 1 },
                4000, Phaser.Easing.Linear.None, true), this);
                this.spiderdead = false;
            }
            if(this.tekst9.alpha == 1)
                this.game.add.tween(this.tekst9).to( { alpha: 0 },
                4000, Phaser.Easing.Linear.None, true), this;
            //dvizhenje na spidero
            if(this.spidermovetrigger == true){
                if(this.playerspiderdistancex > 0)
                    this.spider.body.velocity.x = 100;
                if(this.playerspiderdistancex < 0)
                    this.spider.body.velocity.x = -100;
                if(this.spider.body.blocked.right ||
                 this.spider.body.blocked.left){
                    this.spider.body.velocity.y = -300;
                }
            }
             if(this.game.physics.arcade.overlap(this.player, this.spider))
                if(this.hurtscreen.alpha == 0)
                this.playerhurt(this.player, this.spider);
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
            if(this.PlayerHealth <= 0){
                this.music.destroy();
                this.game.state.start('menu-level');
            }
            if(this.game.physics.arcade.overlap(this.player, this.pill)){
                this.pillcollect(this.player, this.pill)
            }
            if(this.trigger2 == true && this.player.x >= 11500){
                this.trigger2 = false;
                this.fader = this.game.add.sprite(0, 0, 'fader');
                this.fader.alpha = 0;
                this.fader.fixedToCamera = true;
                this.game.time.events.add(Phaser.Timer.HOUR *4,
                this.game.add.tween(this.fader).to( { alpha: 1 },
                3000, Phaser.Easing.Linear.None, true), this);
                this.trigger3 = true;
            }
            if(this.trigger3 == true && this.fader.alpha == 1){
                this.game.state.start('cutscene2');
                this.music.destroy();
                //sleden cutscene
                //pa tranzicija vo nov state
            }
            if(this.player.x>=10600 && this.flashbacktrigger == false){
                this.flashbacktrigger = true;
                this.stillflash = true;
                this.flashback.alpha = 1;
                this.tajmer = 700;
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
    }

    playerhurt (player, spider){
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
            this.PlayerHealth++;
        }
    }
    
    LayerKolizija (bullet, layer){
        bullet.kill();
        console.log('bulletkill');
    }
    Spiderhit (spider, bullet) {
        console.log('Spiderhit');
        bullet.kill();
        this.spiderhealth--;
        if(this.spiderhealth == 0){
        spider.kill();
        this.spiderdead = true;
        this.spidermovetrigger = false;
    }
      
        console.log(this.spiderhealth);
    }

    shutdown() {
      
    }
  }
  
  export default LevelState;
  