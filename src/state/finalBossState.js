class FinalBossState extends Phaser.State {
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
    this.game.load.tilemap('level1', 'assets/Levels/finalboss.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles-1', 'assets/Tilesets/finalbosstileset.png');
    this.game.load.image('background', 'assets/Tilesets/finalbossbackground.png');
    this.game.load.image('whitebg', 'assets/whitebg.jpg', 800, 600);
    this.game.load.atlasJSONArray('atlas', 'assets/player/Atlas1.png', 'assets/player/atlas.json');
    //this.game.load.atlasJSONArray('atlas-props', 'assets/player/atlas-props.png', 'assets/player/atlas-props.json');
    this.game.load.image('hurtscreen', 'assets/player/Hurtscreen.png');
    this.game.load.image('Health33', 'assets/player/Health3.png');
    this.game.load.image('Health22', 'assets/player/Health2.png');
    this.game.load.image('Health11', 'assets/player/Health1.png');
    this.game.load.image('fader', 'assets/fade.jpg');
    this.game.load.image('boss', 'assets/Finalboss.png');
    this.game.load.image('icespike', 'assets/Icespike.png');
    this.game.load.image('snowball', 'assets/snowball.png');
    this.game.load.image('bg', 'assets/Tilesets/bossfight2background.png');
    this.game.load.image('lavatile', 'assets/Tilesets/lavatile.png');
    this.game.load.image('filter', 'assets/Tilesets/filter.png');
    this.game.load.audio('grom', 'assets/music/Stormsound.mp3');
    this.game.load.audio('music1', 'assets/music/Final.mp3');
    this.game.load.image('iceshot', "assets/player/ice.png");
    this.game.load.image('fireshot', "assets/player/fire.png");
    this.game.load.image('greenshot', "assets/player/green.png");
    this.game.load.image('holyshot', "assets/player/holy.png");
    this.game.load.image('magicshot', "assets/player/magic.png");
    this.game.load.image('shield', "assets/shield.png");
    this.game.load.image('bosshealth3', "assets/Finalbosshealth3.png");
    this.game.load.image('bosshealth2', "assets/Finalbosshealth2.png");
    this.game.load.image('bosshealth1', "assets/Finalbosshealth1.png");
    this.game.load.image('shieldplayer', "assets/shieldoverplayer.png");
    this.game.load.image('bosshitimage', "assets/bosshit.png");
    this.game.load.audio('finalmusic', "assets/music/Final.mp3");
    this.game.load.image('muzika', "assets/muzika.png");
    this.game.load.image('dream', "assets/dream.png");
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
    this.music = this.game.add.audio('finalmusic');
    this.music.play();
    //kolizija
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
    //pukanje
    this.weapon = this.game.add.weapon(0, 'iceshot');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapontype = 0;
    this.damage = 1;
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

    this.shields = this.game.add.group();
    this.shieldonmap = false; 
    this.shields.enableBody = true;
    this.shieldonplayer = false;  
    this.orbs = this.game.add.group();
    this.orbs.enableBody = true;
    this.orbs.scale.setTo(1.5,1.5);

    this.boss = this.game.add.sprite(390, 260, 'boss');
    this.boss.anchor.setTo(0.5);
    this.bosshealth = 424;
    this.maxbosshealth = 424;
    this.boss.scale.setTo(1.2, 1.2);

    this.game.physics.enable(this.boss, Phaser.Physics.ARCADE);

    this.boss.body.immovable = true;

    this.PlayerHealth = 3;
    this.vreme = 4;

    this.shieldplayer = this.game.make.sprite(0,0,'shieldplayer');
    this.shieldplayer.anchor.setTo(0.5,0.5);
    this.shieldplayer.alpha = 0;
    this.player.addChild(this.shieldplayer);


    this.bossweapon = this.game.add.weapon(60, 'magicshot');
    this.bossweapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.bossweapon.bulletSpeed = 400;
    this.bossweapon.fireRate = 100;
    this.bossweapon.bulletAngleOffset = 0;
    this.bossweapon.bulletGravity.y = -500;
    this.bossweapon.fireAngle =180;
    this.bossweapon.trackSprite(this.boss, -30, -5);

    this.bossweapon2 = this.game.add.weapon(6000, 'magicshot');
    this.bossweapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.bossweapon2.bulletSpeed = 400;
    this.bossweapon2.fireRate = 100;
    this.bossweapon2.bulletAngleOffset = 0;
    this.bossweapon2.bulletGravity.y = -500;
    this.bossweapon2.fireAngle =0;
    this.bossweapon2.trackSprite(this.boss, -30, -5);

    
    this.faza = 1;
    this.angleznak = 1;
    this.vreme1 = 4;

    this.bhealth1 = this.game.add.sprite(0,0,'bosshealth1');
    this.bhealth1.alpha = 0;
    this.bhealth2 = this.game.add.sprite(0,0,'bosshealth2');
    this.bhealth2.alpha = 0;
    this.bhealth3 = this.game.add.sprite(0,0,'bosshealth3');

    this.bosshitimage = this.game.add.sprite(0,0,'bosshitimage');
    this.bosshitimage.alpha = 0;

    this.muzika = this.game.add.sprite(0,0,'muzika');
    this.muzika.alpha = 1;
    this.orbonmap = false;

    this.lavatile = this.game.add.sprite(0, 595,'lavatile');
    this.lavatile.enableBody = true;
    this.game.physics.enable(this.lavatile, Phaser.Physics.ARCADE);
    this.lavatile.body.collideWorldBounds = true;
    this.dream = this.game.add.sprite(0,0,'dream');
    this.dream.alpha = 0;
    this.whitebg = this.game.add.sprite(0,0,'whitebg');
    this.whitebg.alpha = 0;
    }

    update() {
    //kolizija
    this.boss.body.velocity.y = -500;
    this.game.physics.arcade.collide(this.player, this.layer,);
    this.game.physics.arcade.collide(this.boulder, this.layer,);
    this.game.physics.arcade.collide(this.snowballs, this.layer,);
    this.game.physics.arcade.overlap(this.weapon.bullets, this.boss, this.bosshit,  null, this);
    this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.collide(this.boss, this.layer);
    this.game.physics.arcade.collide(this.shields, this.layer);
    this.game.physics.arcade.collide(this.orbs, this.layer);
    this.game.physics.arcade.collide(this.lavatile, this.layer);
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
    if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
    {
        this.player.body.velocity.y = -300;
        this.jumpTimer = this.game.time.now + 300;
    }
    //dur e kleknat da se menva pukanjeto
        if(this.isDuck == true && this.player.body.velocity.x == 0){
        if(this.player.scale.x == 1)
            this.weapon.trackSprite(this.player, 13, 8);
        if(this.player.scale.x == -1)
            this.weapon.trackSprite(this.player, -13, 8);
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

        }
        if(this.PlayerHealth <= 0){
            this.music.destroy();
            this.game.state.start('cutscene5-finalboss');
        }
        if(this.game.physics.arcade.overlap(this.player, this.shields)){
            this.shieldcollect(this.player, this.shield)
        }
        if(this.game.physics.arcade.overlap(this.player, this.bossweapon.bullets)){
            this.playerhurt();
        }
        if(this.game.physics.arcade.overlap(this.player, this.bossweapon2.bullets)){
            this.playerhurt();
        }
        if(this.game.physics.arcade.overlap(this.player, this.orb)){
            this.weapontype = 3;
            this.orbcollect(this.player, this.orb)
        }
        if(this.game.physics.arcade.overlap(this.player, this.boss)){
            this.playerhurt();
            if(this.faza == 1){
                if(this.shieldplayer.alpha!=0){
                    this.bosshit();
                }
            }
        }
         if(this.game.physics.arcade.overlap(this.player, this.lavatile))
            this.playerhurt();
        if(this.bosshealth <= 0){
            this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.dream).to( { alpha: 1 }, 2000 , Phaser.Easing.Linear.None, true), this);
            this.faza = -1;
            this.bosshealth = 1000;
            this.playerhealth = 10;

        }
        if(this.dream.alpha == 1 && this.whitebg.alpha == 0){
            this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.whitebg).to( { alpha: 1 }, 2000 , Phaser.Easing.Linear.None, true), this);
        }
        if(this.whitebg.alpha == 1){
            this.music.destroy();
            this.game.state.start('ending');
        }
        if(this.faza!=1){
        if(this.weapontype == 3){
            this.weapon.destroy();
            this.weapontype = 0;
            this.damage = 4;
            this.weapon =this.game.add.weapon(60, 'greenshot');
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.weapon.bulletSpeed = 500;
            this.weapon.fireRate = 100;
            this.weapon.bulletAngleOffset = 0;
            this.weapon.bulletGravity.y = -500;
        }
    }


        if(this.game.time.totalElapsedSeconds() >= this.vreme&& this.shieldonmap == false && this.faza == 1){
            if(Math.floor(Math.random() * 2) + 1 == 1)
                this.shield = this.shields.create(115, 60, 'shield');
            else
                this.shield = this.shields.create(580, 100, 'shield');  
            this.shield.scale.setTo(0.8,0.8);
            this.shieldonmap = true;
        }
        if(this.game.time.totalElapsedSeconds() >= this.vreme&& this.orbonmap == false && this.faza == 2){
            this.orbonplayer = false;
            this.orb = this.orbs.create(257, 10, 'greenshot');
            this.orbonmap = true;
        }
        if(this.game.time.totalElapsedSeconds() >= this.vreme1){
            this.vreme1+=12;
            this.randombroj = Math.floor(Math.random() * 3) + 1;
            console.log(this.randombroj);
                this.bossweapon.bulletSpeed = 400;
                this.bossweapon.fireRate = 100;
                this.bossweapon.bulletAngleOffset = 0;
                this.bossweapon.bulletGravity.y = -500;
                if(this.randombroj == 3)
                    this.bossweapon.fireAngle =-150;
                else
                    this.bossweapon.fireAngle = 180;
                this.bossweapon2.fireAngle = 0;
                if(this.faza == 2)
                    this.faza = 5;
        }
        if(this.faza == 1){
            if(this.bosshealth == 423){
                this.bhealth3.alpha = 0;
                this.bhealth2.alpha = 1;
            }
            if(this.bosshealth == 422){
                this.bhealth2.alpha = 0;
                this.bhealth1.alpha = 1;
            }
            if(this.bosshealth == 421 && this.bosshitimage.alpha == 0){
                this.faza = 5;
                this.bhealth3.alpha = 0;
                this.bhealth1.alpha = 0;
            }
            if(this.randombroj == 1){
                this.bossweapon.fire();
                this.bossweapon.fireAngle -=1;
                this.bossweapon.fireRate = 250;
                this.bossweapon.bulletspeed = 10;
                this.bossweapon2.fire();
                this.bossweapon2.fireAngle +=1;
                this.bossweapon2.fireRate = 250;
                this.bossweapon2.bulletspeed = 10;
            this.bossweapon.bulletGravity.y =  -500;
        }
            if(this.randombroj == 2){
                this.bossweapon.fire();
                this.bossweapon.fireAngle -=0.5;
                this.bossweapon.fireRate = 100;
                this.bossweapon.bulletspeed = 500;
                this.bossweapon2.fire();
                this.bossweapon2.fireAngle -=0.5;
                this.bossweapon2.fireRate = 100;
                this.bossweapon2.bulletspeed = 500;
                this.bossweapon.bulletGravity.y =  -500;
            }
            if(this.randombroj == 3){
                this.bossweapon.fireRate = Math.floor(Math.random() * 50) + 30;
                this.bossweapon.bulletspeed = 200;
                this.bossweapon.fire();
                if(this.bossweapon.fireAngle >= -30){
                    this.angleznak = true;
                }
                if(this.bossweapon.fireAngle <=-150)
                    this.angleznak = false;
                if(this.angleznak == true){
                    this.bossweapon.fireAngle--;
                }
                if(this.angleznak == false)
                    this.bossweapon.fireAngle++;
                this.bossweapon.bulletGravity.y =  -100;
            }

        }
        if(this.faza == 5){
            this.faza = 2;
            this.bossweapon2.bulletSpeed = 400;
            this.bossweapon2.fireRate = 100;
            this.bossweapon2.bulletAngleOffset = 0;
            this.bossweapon2.bulletGravity.y = -500;
            this.bossweapon2.fireAngle =0;
            this.bossweapon.bulletSpeed = 400;
            this.bossweapon.fireRate = 100;
            this.bossweapon.bulletAngleOffset = 0;
            this.bossweapon.bulletGravity.y = -500;
            this.bossweapon.fireAngle =180;


        }
        if(this.faza == 2){
            if(this.randombroj == 1){
                this.bossweapon.fire();
                this.bossweapon.fireAngle -=1;
                this.bossweapon.fireRate = 300;
                this.bossweapon.bulletspeed = 100;
                this.bossweapon2.fire();
                this.bossweapon2.fireAngle -=1;
                this.bossweapon2.fireRate = 300;
                this.bossweapon2.bulletspeed = 100;
            }
            if(this.randombroj == 2){
                this.bossweapon.fire();
                this.bossweapon.fireAngle +=0.5;
                this.bossweapon.fireRate = 70;
                this.bossweapon.bulletspeed = 200;
            }
            if(this.randombroj == 3){
                this.bossweapon.fireAngle -=12;
                this.bossweapon.fireRate = 120;
                this.bossweapon.bulletspeed = 200;
                this.bossweapon.fire();
                this.bossweapon2.fireAngle -=12;
                this.bossweapon2.fireRate = 120;
                this.bossweapon2.bulletspeed = 200;
                this.bossweapon2.fire();
            }



        }

    }

    playerhurt (player, lavatile){
        if(this.hurtscreen.alpha == 0 && this.shieldplayer.alpha == 0){
        this.PlayerHealth--;
        this.hurtscreen.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.hurtscreen).to( { alpha: 0 }, 2000 , Phaser.Easing.Linear.None, true), this);
    }
        console.log(this.PlayerHealth);
    }
    
    shieldcollect (player, shield){
        console.log('shieldplayher');
            shield.kill();
            this.shieldonmap = false;
            this.shieldonplayer = true;
            this.vreme = this.game.time.totalElapsedSeconds() + 12;
            this.shieldplayer.alpha = 1;
            this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.shieldplayer).to( { alpha: 0 }, 4000 , Phaser.Easing.Linear.None, true), this);

    }
    orbcollect (player, orb){
        orb.kill();
        this.orbonmap = false;
        this.orbonplayer = true;
        this.vreme = this.game.time.totalElapsedSeconds() + 12;
    }
    rainkill(lavatile, raindrop){
        raindrop.kill();
        this.raindropcounter--;
        console.log(this.raindropcounter);
    }
    
    LayerKolizija (bullet, layer){
        bullet.kill();
        this.bulletkillcount++;
        console.log('bulletkill');
    }
    bosshit (boss, bullet) {
        if(this.faza == 1){
            if(this.bosshitimage.alpha == 0){
                this.bosshealth -= this.damage;
                this.bosshitimage.alpha = 1;
                this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.bosshitimage).to( { alpha: 0 }, 2000 , Phaser.Easing.Linear.None, true), this);
            }
        }
        if(this.faza == 2){
            this.bosshealth -= this.damage;
            bullet.kill();
        }
            console.log(this.bosshealth);

    }   
   

    shutdown() {
      
    }
  }
  
  export default FinalBossState;
  