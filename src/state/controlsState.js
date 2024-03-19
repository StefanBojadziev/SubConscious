class ControlsState extends Phaser.State {
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
        this.game.load.tilemap('level2', 'assets/Levels/controllevel.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles-1', 'assets/Tilesets/lvl1tileset16x16.png');
        this.game.load.atlasJSONArray('atlas', 'assets/player/Atlas1.png', 'assets/player/atlas.json');
        //this.game.load.atlasJSONArray('atlas-props', 'assets/player/atlas-props.png', 'assets/player/atlas-props.json');
        this.game.load.image('fader', 'assets/fade.jpg');
        this.game.load.image('iceshot', "assets/player/ice.png");
        this.game.load.image('fireshot', "assets/player/fire.png");
        this.game.load.image('greenshot', "assets/player/green.png");
        this.game.load.image('holyshot', "assets/player/holy.png");
        this.game.load.image('magicshot', "assets/player/magic.png");
        this.game.load.image('123keys', "assets/Tutorial/123keys.png");
        this.game.load.image('arrowkeys', "assets/Tutorial/arrowkeys.png");
        this.game.load.image('downkey', "assets/Tutorial/downkey.png");
        this.game.load.image('Qkey', "assets/Tutorial/Qkey.png");
        this.game.load.image('spacebar', "assets/Tutorial/spacebar.png");
        this.jumpTimer = 0;
    }

    create() {
        //pozadina
        this.bg = this.game.add.sprite(0, 0, 'fader');
        this.bg.fixedToCamera = true;
        this.map = this.game.add.tilemap('level2');
        this.map.addTilesetImage('tiles-1', 'tiles-1');
        this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
        this.layer = this.map.createLayer('Tile Layer 1');
        //this.layer.debug = true;
        this.layer.resizeWorld();
        this.layer.wrap = true;
        this.game.physics.arcade.gravity.y = 500;
        //setup na karakter
        this.player = this.game.add.sprite(400, 500, 'atlas', 'player-idle-1');
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
        //kontroli
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //neprijatel tester
        this.isDuck = false;
        //tutorijal
        //strelki
        this.arrowkeys = this.game.add.sprite(100,100, 'arrowkeys');
        this.arrowkeys.scale.setTo(0.8, 0.8);
        this.arrowkeys.alpha = 1;
        this.leftkey = false;
        this.rightkey = false;
        //skokanje
        this.spacebarkey = this.game.add.sprite(100,100, 'spacebar');
        this.spacebarkey.scale.setTo(0.8, 0.8);
        this.spacebarkey.alpha = 0;
        this.spacebartrigger = false;
        //klechenje
        this.downkey = this.game.add.sprite(100,100, 'downkey');
        this.downkey.scale.setTo(0.8, 0.8);
        this.downkey.alpha = 0;
        this.downkeytrigger = false;
        //pukanje
        this.Qkey = this.game.add.sprite(100,100, 'Qkey');
        this.Qkey.scale.setTo(0.8, 0.8);
        this.Qkey.alpha = 0;
        this.Qkeytrigger = false;
        //attack change
        this.keys123 = this.game.add.sprite(100,100, '123keys');
        this.keys123.scale.setTo(0.8, 0.8);
        this.keys123.alpha = 0;
        this.key1 = false;
        this.key2 = false;
        this.key3 = false;
        this.keycount = 0;
        this.fadeout = this.game.add.sprite(0,0, 'fader')
        this.fadeout.alpha = 0;

    }

    update() { 
        this.game.physics.arcade.collide(this.player, this.layer,);
        this.game.physics.arcade.collide(this.weapon.bullets, this.layer,
        this.LayerKolizija,  null, this);

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
            if(this.Qkey.alpha == 1)
                this.Qkeytrigger = true;
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
        if (this.jumpButton.isDown && this.player.body.onFloor() || this.game.physics.arcade.overlap(this.player, this.platforms)  && this.game.time.now > this.jumpTimer)
        {
            this.player.body.velocity.y = -300;
            this.jumpTimer = this.game.time.now + 300;
            if(this.spacebarkey.alpha == 1)
                this.spacebartrigger = true;
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
            if(this.isDuck == true){
                if(this.player.scale.x == 1)
                this.weapon.trackSprite(this.player, 13, 8);
                if(this.player.scale.x == -1)
                this.weapon.trackSprite(this.player, -13, 8);
            }
            if (this.wasd.eden.isDown) {
                this.weapontype = 1;
                console.log('1');
            } 
            if (this.wasd.dva.isDown) {
                this.weapontype = 2;
                console.log('2');
            }
            if (this.wasd.tri.isDown) {
                this.weapontype = 3;
                console.log('3');
            }
            if(this.weapontype == 1){
                this.weapon.destroy(); 
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'iceshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 350;
                this.weapon.fireRate = 400;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -489;
                if(this.keys123.alpha == 1)
                    this.key1 = true;
            }
            if(this.weapontype == 2){
                this.weapon.destroy();
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'fireshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 400;
                this.weapon.fireRate = 100;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -500;
                if(this.keys123.alpha == 1)
                    this.key2 = true;
            }
            if(this.weapontype == 3){
                this.weapon.destroy();
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'holyshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 700;
                this.weapon.fireRate = 200;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -500;
                if(this.keys123.alpha == 1)
                    this.key3 = true;
            }
            if(this.arrowkeys.alpha == 1 ){
                if(this.cursors.left.isDown)
                    this.leftkey = true;
                if(this.cursors.right.isDown)
                    this.rightkey = true;
            }
            if(this.leftkey == true && this.rightkey == true)
                this.arrowkeys.alpha = 0;
            if(this.arrowkeys.alpha == 0){
                this.spacebarkey.alpha = 1;
            }
            if(this.spacebartrigger == true && this.spacebarkey.alpha == 1){
                this.spacebarkey.alpha = 0;
            }
            if(this.spacebarkey.alpha == 0 && this.spacebartrigger == true && this.downkeytrigger == false){
                this.downkey.alpha = 1;
            }
            if(this.isDuck == true && this.downkey.alpha == 1 && this.downkeytrigger == false){
                this.downkeytrigger = true;
                this.downkey.alpha = 0;
                this.Qkey.alpha = 1;
            }
            if(this.Qkeytrigger == true){
                this.Qkeytrigger = false;
                this.Qkey.alpha = 0;
                this.keys123.alpha = 1;
            }
            if(this.keys123.alpha == 1 && this.key1 == true && this.key2 == true && this.key3 == true && this.shootingFlag == true){
                this.keys123.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fadeout).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
            }
            if(this.fadeout.alpha == 1){
                this.game.cache.removeSound('music');
                this.game.state.start('menu');
            }
    }
    
    LayerKolizija (bullet, layer){
        bullet.kill();
        console.log('bulletkill');
    }

    shutdown() {
      
    }
  }
  
  export default ControlsState;
  