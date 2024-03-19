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
        this.game.load.tilemap('level1', 'assets/Levels/level3.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles-1', 'assets/Tilesets/lvl3tileset.png');
        this.game.load.image('background', 'assets/Tilesets/level3background.png');
        this.game.load.audio('music', 'assets/music/Level3.mp3');
        this.game.load.atlasJSONArray('atlas', 'assets/player/Atlas1.png', 'assets/player/atlas.json');
        //this.game.load.atlasJSONArray('atlas-props', 'assets/player/atlas-props.png', 'assets/player/atlas-props.json');
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
        this.game.load.image('rock', "assets/Tilesets/lvl3rock.png");
        this.game.load.spritesheet('grobber', "assets/graverobber.png",210,320);
        this.game.load.spritesheet('bear', "assets/bear.png",227,138);
        this.game.load.image('gattack', "assets/graverobberattack.png");
        this.game.load.image('flashback3', "assets/Flashbacks/flashback3.png");
        this.game.load.image('pickup', "assets/weapon3pickup.png");
        this.jumpTimer = 0;
    }

    create() {
        //pozadina
        this.bg = this.game.add.sprite(0, 0,'background');
        //this.bg.fixedToCamera = true;
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
        this.player.animations.add('run', Phaser.Animation.generateFrameNames('player-run-', 1, 10, '', 0), 12, true);
        this.player.animations.add('run-shot', Phaser.Animation.generateFrameNames('player-run-shot-', 1, 10, '', 0), 10, true);
        this.player.animations.add('duck', ['player-duck'], 10, true);
        this.player.animations.add('jump', Phaser.Animation.generateFrameNames('player-jump-', 1, 6, '', 0), 10, true);
        this.player.animations.add('fall', Phaser.Animation.generateFrameNames('player-jump-', 3, 6, '', 0), 10, true);
        this.player.animations.add('shooting', Phaser.Animation.generateFrameNames('player-stand-', 1, 3, '', 0), 15, true);
        this.player.animations.add('hurt', Phaser.Animation.generateFrameNames('player-hurt-', 1, 2, '', 0), 4, false);
        this.player.animations.play('idle');
        //kamera
        this.game.camera.follow(this.player);
        //deklaracija na oruzhje
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
        //deklaracija na oruzhje
        this.weapon3 = this.game.add.weapon(60, 'holyshot');
        this.weapon3.trackSprite(this.player, 13, -4);
        this.weapon3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon3.bulletSpeed = 700;
        this.weapon3.fireRate = 200;
        this.weapon3.bulletAngleOffset = 0;
        this.weapon3.bulletGravity.y = -500;
        //kontroli
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //teksto
        //BETA health system
        this.PlayerHealth = 3;
        //neprijatel tester
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

        this.isDuck = false;


        this.platforms = this.add.physicsGroup();
        this.platforms.setAll('body.allowGravity', false);
        this.platforms.setAll('body.immovable', true);
        this.platforms.setAll('body.velocity.x', 0);
        this.rocky = this.platforms.create(3850, 1123, 'rock');
        this.rocky.scale.setTo(0.3,0.3);
        this.platforms.setAll('body.allowGravity', false);
        this.platforms.setAll('body.immovable', true);
        this.platforms.setAll('body.velocity.x', 0);

        this.bear = this.game.add.sprite(5820, 1000, 'bear');
        this.game.physics.enable(this.bear, Phaser.Physics.ARCADE);
        this.bear.anchor.setTo(0.5,0.5);
        this.bear.body.bounce.y = 0;
        this.bear.body.collideWorldBounds = true;
        this.bearhealth = 10000;
        this.beardead = false;
        this.bearmovetrigger = false;
        this.bear.animations.add('walk');
        this.bear.animations.play('walk', 7, true);
        this.bear.scale.setTo(0.4,0.5);

        this.key = this.game.add.sprite(4150, 1350, 'holyshot');
        this.game.physics.enable(this.key, Phaser.Physics.ARCADE);
        this.key.enableBody = true;
        this.key.scale.setTo(1.3,1.3);
        this.key.anchor.setTo(0.5,0.5);
        this.boolkey = false;

        this.fader = this.game.add.sprite(0, 0, 'fader');
        this.fader.alpha = 0;
        this.fader.fixedToCamera = true;

        this.robber = this.game.add.sprite(3450,1100,'grobber');
        this.robber.animations.add('shoot');
        this.robber.animations.play('shoot', 7, true);
        this.robber.scale.setTo(0.3,0.2);
        this.game.physics.enable(this.robber, Phaser.Physics.ARCADE);
        this.robber.anchor.setTo(0.5);
        this.robber.body.bounce.y = 0;
        this.robber.body.collideWorldBounds = true;
        this.robberhealth = 12;
        this.gweapon = this.game.add.weapon(60, 'gattack');
        this.gweapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.gweapon.bulletSpeed = 400;
        this.gweapon.fireRate = 1900;
        this.gweapon.bulletGravity.y = -500;
        this.gweapon.trackSprite(this.robber, 0, 0);
        this.gweapon.fireAngle = 180;  
        this.flashbacktrigger = false;
        this.flashback = this.game.add.sprite(0,0, 'flashback3');
        this.flashback.alpha = 0;
        this.flashback.fixedToCamera = true;
        this.flashbackcounter = 0;
        this.stillflash = false;
        this.pickup = this.game.add.sprite(250,150,'pickup');
        this.pickup.alpha = 0;
        this.pickup.fixedToCamera = true;

    }

    update() {
        console.log(this.player.x);
        if(this.player.x<=this.robber.x){
            this.gweapon.fireAngle = 180;
            this.robber.scale.x = 0.3;
        }
        if(this.player.x>=this.robber.x){
            this.gweapon.fireAngle = 0;
            this.robber.scale.x = -0.3;
        }
        if(this.robberhealth>0)
        this.gweapon.fire();
        if(this.player.x<=this.bear.x){
            this.bear.scale.x = -0.4;
        }
        if(this.player.x>=this.bear.x){
            this.bear.scale.x = 0.4;
        }
        //kolizija
        this.game.physics.arcade.collide(this.player, this.layer,);
        this.game.physics.arcade.overlap(this.gweapon.bullets, this.player, this.playerhurt,  null, this);
        this.game.physics.arcade.collide(this.gweapon.bullets, this.layer, this.LayerKolizija,  null, this);
        this.game.physics.arcade.overlap(this.weapon1.bullets, this.bear, this.bearhit,  null, this);
        this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija,  null, this);
        this.game.physics.arcade.overlap(this.weapon2.bullets, this.bear, this.bearhit,  null, this);
        this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija,  null, this);
        this.game.physics.arcade.overlap(this.weapon3.bullets, this.bear, this.bearhit,  null, this);
        this.game.physics.arcade.collide(this.weapon3.bullets, this.layer, this.LayerKolizija,  null, this);
        this.game.physics.arcade.collide(this.bear, this.layer);
        this.game.physics.arcade.collide(this.rock, this.layer);
        this.game.physics.arcade.collide(this.key, this.layer);
        this.game.physics.arcade.collide(this.robber, this.layer);
        this.game.physics.arcade.overlap(this.weapon1.bullets, this.robber, this.robberhit,  null, this);
        this.game.physics.arcade.overlap(this.weapon2.bullets, this.robber, this.robberhit,  null, this);
        this.game.physics.arcade.overlap(this.weapon3.bullets, this.robber, this.robberhit,  null, this);

            this.game.physics.arcade.collide(this.player, this.platforms);
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
            this.weapon3.fireAngle = 180;
            this.weapon1.trackSprite(this.player, -13, -4);
            this.weapon2.trackSprite(this.player, -13, -4);
            this.weapon3.trackSprite(this.player, -13, -4);
        }
        else if (this.player.scale.x == 1){
            this.weapon1.fireAngle = 0;
            this.weapon2.fireAngle = 0;
            this.weapon3.fireAngle = 0;
            this.weapon1.trackSprite(this.player, 13, -4);
            this.weapon2.trackSprite(this.player, 13, -4);
            this.weapon3.trackSprite(this.player, 13, -4);
        }
        //skoka
        if (this.jumpButton.isDown && this.player.body.velocity.y == 0 && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -300;
            this.jumpTimer = this.game.time.now + 300;
        }
        //animaci
        if (this.player.body.velocity.y == 0) {
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
                if(this.player.scale.x == 1){
                    this.weapon1.trackSprite(this.player, 13, 8);
                    this.weapon2.trackSprite(this.player, 13, 8);
                    this.weapon3.trackSprite(this.player, 13, 8);
                }
                if(this.player.scale.x == -1){
                    this.weapon1.trackSprite(this.player, -13, 8);
                    this.weapon2.trackSprite(this.player, -13, 8);
                    this.weapon3.trackSprite(this.player, -13, 8);
                }
            }
            if(this.wasd.eden.isDown){
                this.weapontype = 1;
            }
            if(this.wasd.dva.isDown){
                this.weapontype = 2;
            }
            if(this.wasd.tri.isDown && this.boolkey == true){
                this.weapontype = 3;
                this.pickup.alpha = 0;
            }
            if(this.game.physics.arcade.overlap(this.player, this.bear))
                if(this.hurtscreen.alpha == 0)
                this.playerhurt(this.player, this.bear);

            if(this.bearmovetrigger == true){
                this.playerbeardistancex = this.player.x - this.bear.x;
                console.log(this.playerbeardistancex);
                if(this.playerbeardistancex > 0)
                    this.bear.body.velocity.x = 140;
                if(this.playerbeardistancex < 0)
                    this.bear.body.velocity.x = -140;
            }
            if(this.player.x >=5396)
                this.bearmovetrigger = true;
            if(this.game.physics.arcade.overlap(this.bear, this.rocky))
                this.rocky.body.velocity.x = -140;
            if(this.rocky.x <= 3700)
                this.rocky.body.velocity.y = 500;
            if(this.player.y >= 1480)
                this.PlayerHealth = 0;
            if(this.bear.y >= 1480)
                this.bear.kill();
            //tekst na pochetok
            if(this.game.physics.arcade.overlap(this.player, this.key)){
                this.key.kill();
                this.boolkey = true;
                this.pickup.alpha = 1;
            }

            if(this.player.x >=7500 && this.fader.alpha == 0 && this.boolkey == true){
                this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            }
            if(this.fader.alpha == 1){
                this.music.destroy();
                this.game.state.start('level3-bossfight2');
            }
            //ko kje stigni

            //dvizhenje na bearo
            //console.log('x ' + this.player.x);
            //console.log('y ' + this.player.y);

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
                this.game.state.start('level3');
            }
            if(this.player.x>=7037 && this.flashbacktrigger == false){
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

    playerhurt (player, bear){
        if(this.hurtscreen.alpha == 0){
        this.PlayerHealth--;
        this.hurtscreen.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.hurtscreen).to( { alpha: 0 }, 2000 , Phaser.Easing.Linear.None, true), this);
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
        if(this.weapontype == 3){
            this.damage = 1;
            this.weapon3.fire();
        }
    }
    LayerKolizija (bullet, layer){
        bullet.kill();
        console.log('bulletkill');
    }
    bearhit (bear, bullet) {
        console.log('bearhit');
        bullet.kill();
        this.beardead = true;
        this.bearmovetrigger = false;
        console.log(this.bearhealth);
    }
    robberhit (robber, bullet) {
        bullet.kill();
        this.robberhealth -= this.damage;
        if(this.robberhealth<=0)
            robber.kill();
    }

    shutdown() {
      
    }
  }
  
  export default LevelState3;
  