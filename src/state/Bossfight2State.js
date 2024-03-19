class Bossfight2State extends Phaser.State {
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
    this.game.load.tilemap('level1', 'assets/Levels/bossfight2.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles-1', 'assets/Tilesets/bossfight2tileset.png');
    this.game.load.image('background', 'assets/whitebg.jpg', 800, 600);
    this.game.load.atlasJSONArray('atlas', 'assets/player/Atlas1.png', 'assets/player/atlas.json');
    //this.game.load.atlasJSONArray('atlas-props', 'assets/player/atlas-props.png', 'assets/player/atlas-props.json');
    this.game.load.image('hurtscreen', 'assets/player/Hurtscreen.png');
    this.game.load.image('Health33', 'assets/player/Health3.png');
    this.game.load.image('Health22', 'assets/player/Health2.png');
    this.game.load.image('Health11', 'assets/player/Health1.png');
    this.game.load.spritesheet('pill', 'assets/player/pill.png', 40, 40);
    this.game.load.image('fader', 'assets/fade.jpg');
    //this.game.load.image('boss', 'assets/Gargboss.png');
    this.game.load.image('icespike', 'assets/Icespike.png');
    this.game.load.image('snowball', 'assets/snowball.png');
    this.game.load.image('bg', 'assets/Tilesets/bossfight2background.png');
    this.game.load.image('lavatile', 'assets/Tilesets/lavatile.png');
    this.game.load.image('filter', 'assets/Tilesets/filter.png');
    this.game.load.audio('grom', 'assets/music/Stormsound.mp3');
    this.game.load.audio('music1', 'assets/music/bossfight2music.mp3');
    this.game.load.image('boulder', 'assets/Tilesets/boulder.png');
    this.game.load.image('boulder1', 'assets/Tilesets/boulder1.png');
    this.game.load.image('boulder2', 'assets/Tilesets/boulder2.png');
    this.game.load.image('boulder3', 'assets/Tilesets/boulder3.png');
    this.game.load.image('boulder4', 'assets/Tilesets/boulder4.png');
    this.game.load.image('iceshot', "assets/player/ice.png");
    this.game.load.image('fireshot', "assets/player/fire.png");
    this.game.load.image('greenshot', "assets/player/green.png");
    this.game.load.image('holyshot', "assets/player/holy.png");
    this.game.load.image('magicshot', "assets/player/magic.png");
    this.game.load.image('bosshealth1', "assets/bosshealth1.png");
    this.game.load.image('bosshealth2', "assets/bosshealth2.png");
    this.game.load.image('bosshealth3', "assets/bosshealth3.png");
    this.game.load.image('raindrop', "assets/raindrop.png");
    this.game.load.image('bossdead', "assets/gargbossdead.png");
    this.game.load.spritesheet('boss', "assets/Gargspritesheet.png",136.533333333,119);

    this.jumpTimer = 0;
    }

    create() {
    //pozadina
    this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'bg');
    this.bg.fixedToCamera = true;
    this.lavatile = this.game.add.sprite(0, 600,'lavatile');
    this.lavatile.enableBody = true;
    this.game.physics.enable(this.lavatile, Phaser.Physics.ARCADE);
    this.lavatile.body.collideWorldBounds = true;
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('tiles-1', 'tiles-1');
    this.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    this.layer = this.map.createLayer('Tile Layer 1');
    this.kapka1 = this.game.add.sprite(0, 0, 'bosshealth1');
    this.kapka2 = this.game.add.sprite(0, 0, 'bosshealth2');
    this.kapka3 = this.game.add.sprite(0, 0, 'bosshealth3');

    //muzika
    this.music = this.game.add.audio('music1');
    this.music.play(); 
    //kolizija
    //this.layer.debug = true;
    this.layer.resizeWorld();
    this.layer.wrap = true;
    this.game.physics.arcade.gravity.y = 500;
    //setup na karakter
    this.player = this.game.add.sprite(250, 500, 'atlas', 'player-idle-1');
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
    this.weapon = this.game.add.weapon(150, 'iceshot');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapontype = 3;
    this.damage = 3;
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
    

    this.boss = this.game.add.sprite(350, 100, 'boss');
    this.boss.animations.add('walk');
    this.boss.animations.play('walk', 12, true);
    this.game.physics.enable(this.boss, Phaser.Physics.ARCADE);
    this.boss.anchor.setTo(0.5);
    this.boss.body.bounce.y = 0;
    this.boss.body.collideWorldBounds = true;
    this.bosshealth = 420;
    //420
    this.maxbosshealth = 420;
    this.boss.scale.setTo(1.2, 1.2);

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

    this.move1 = true;
    this.move2 = false;
    this.move3 = false;

    this.koordinati = false;
    this.koordx;
    this.koordy;

    this.filter = this.game.add.sprite(0, 0, 'filter');
    this.filter.alpha = 0;

    this.grom = this.game.add.audio('grom');

    this.boulder = this.game.add.sprite(700, 100, 'boulder');
    this.boulder.scale.setTo(0.2, 0.2);
    this.boulder.enableBody = true;
    this.game.physics.enable(this.boulder, Phaser.Physics.ARCADE);
    this.boulder.body.collideWorldBounds = true;
    this.boulderhealth = 10;

    this.trigger2 = false;
    this.BossBoulder = false;
    this.trigger3 = false;
    this.xmoovement = 0;
    this.trigger4 = false;
    this.bouldertrigger = false;
    this.randombroj = 2;
    this.fader = this.game.add.sprite(0, 0, 'fader');
    this.fader.alpha = 0;
    this.bosshitcounter = 0.1;
    this.krv1 = 1;
    this.krv2 = 1;
    this.krv3 = 1;
    this.gromogolemina;
    this.raintrigger = false;
    this.raindrops = this.game.add.group();
    this.raindrops.enableBody = true;
    this.game.physics.enable(this.raindrops, Phaser.Physics.ARCADE);
    this.raindropcounter = 0;
    }

    update() {
    if(this.boss.x >400)
        this.boss.scale.x = -1.2;
    else
        this.boss.scale.x = 1.2;
    //this.boulder.body.velocity.y = 200;
    this.boulder.body.velocity.x = 0;
    if(this.trigger2 == true)
        this.boss.body.velocity.y = -100;
    else
        this.boss.body.velocity.y = 50;
    //kolizija
    this.game.physics.arcade.collide(this.player, this.layer,);
    this.game.physics.arcade.collide(this.boulder, this.layer,);
    this.game.physics.arcade.collide(this.snowballs, this.layer,);
    this.game.physics.arcade.overlap(this.weapon.bullets, this.boss, this.bosshit,  null, this);
    this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija,  null, this);
    this.game.physics.arcade.collide(this.boss, this.layer);
    this.game.physics.arcade.collide(this.pills, this.layer);
    this.game.physics.arcade.collide(this.lavatile, this.layer);
    this.game.physics.arcade.overlap(this.raindrops, this.lavatile, this.rainkill,  null, this);
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
            if((Math.floor(Math.random() * 300) + 1) == 30 && this.pillonmap == false){
                this.pill = this.pills.create((Math.floor(Math.random() * 500) + 0), 0, 'pill');
                this.pill.animations.add('walk');
                this.pill.animations.play('walk', 4, true);
                this.pillonmap = true;
                this.pill.scale.setTo(1.5,1.5);
        }
        }
        if(this.PlayerHealth <= 0){
            this.music.destroy();
            this.game.state.start('level3-bossfight2');
            //console.log('wtfbruv')
        }
        if(this.game.physics.arcade.overlap(this.player, this.pills)){
            this.pillcollect(this.player, this.pill)
        }
        if(this.game.physics.arcade.overlap(this.lavatile, this.pills)){
            this.pill.kill();
            this.pillonmap = false;
            console.log('killpill');
        }
        this.j+=10;
        if(this.j == 800){
            this.j=0;
        }
        if(this.game.physics.arcade.overlap(this.player, this.lavatile)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.lavatile)
        }
        if(this.randombroj == 1 && this.boss.x != 400 && this.boss.y != 300 && this.koordinati == false){
            this.game.physics.arcade.moveToXY(this.boss, 400, 300, 200);
            this.koordx = this.player.x;
            this.koordy = this.player.y;   
        }
        if(this.randombroj == 1 && this.boss.x.toPrecision(3) <=405 && this.boss.x.toPrecision(3) >= 395 &&
         this.boss.y.toPrecision(3) >= 295 && this.boss.y.toPrecision(3) <= 305 ){
            this.koordinati = true;
            this.game.physics.arcade.moveToXY(this.boss, this.koordx, this.koordy, 100);
            this.filter.alpha = 1;
            this.grom.play();
            this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.filter).to( { alpha: 0 },
             4000, Phaser.Easing.Linear.None, true), this);
        }
        if(this.filter.alpha == 0 && this.koordinati == true)
            this.koordinati = false;

        if(this.game.physics.arcade.overlap(this.player, this.boss)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.boss);
        }
        
        if(this.randombroj == 2 && this.boss.x != 400 && this.boss.y != 50 && this.trigger2 == false && this.trigger3 == false){
            this.game.physics.arcade.moveToXY(this.boss, 400, 50, 200);
        }
        //ako se priblizhi
        if(this.randombroj == 2 && this.boss.x.toPrecision(3) <=405 && this.boss.x.toPrecision(3) >= 45 &&
         this.boss.y.toPrecision(3) >= 55 && this.boss.y.toPrecision(3) <= 305 && this.trigger2 == false &&
          this.trigger3 == false ){
            this.trigger2 = true;
            this.game.physics.arcade.moveToXY(this.boss, this.boulder.x, this.boulder.y, 100);

        }
        //da pochni dvizhenje
        if(this.game.physics.arcade.overlap(this.boss, this.boulder)){
            this.BossBoulder = true;
        }
        //prv setup
        if(this.randombroj == 2 && this.BossBoulder == true && this.trigger3 == false){

            if(this.filter.alpha == 0){
                this.filter.alpha = 1;
                this.gromogolemina = (Math.floor(Math.random() * 10) + 4)/10;
                this.filter.scale.setTo(this.gromogolemina, this.gromogolemina);
                console.log('works');
                this.raintrigger = true;
                this.grom.play();
                this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.filter).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            }
            this.trigger3 = true;
            this.trigger2 = false;
            this.xmoovement = 400;
            this.ymoovement = 50;
            this.BBspeed = 50;
        }

        //dvizhenje na boso
        if(this.randombroj == 2 && this.filter.alpha == 0 && this.trigger3 == true){
            this.game.physics.arcade.moveToObject(this.boulder, this.boss, this.BBspeed);
            this.game.physics.arcade.moveToXY(this.boss, this.xmoovement, this.ymoovement, this.BBspeed);
        }
        if(this.randombroj == 2 && this.boss.x.toPrecision(3) <=405 && this.boss.x.toPrecision(3) >= 45
         && this.boss.y.toPrecision(3) >= 55 && this.boss.y.toPrecision(3) <= 305 && this.trigger2 == false
         && this.trigger4 == false ){
            this.trigger4 = true;
        }
        //vtor setup
        if(this.trigger4 == true){
            this.xmoovement = this.player.x;
            this.ymoovement = 250;
            this.BBspeed = 100;
        }
        if(this.randombroj == 2 && this.boulder.x <= this.player.x+5 
            && this.boulder.x >= this.player.x-5 && this.trigger4 == true){
            this.trigger3 = false;
        }
        //ako bouldero e na zemja
        if(this.randombroj == 2 && this.boulder.body.onFloor() && this.trigger4 == true){
            this.game.physics.arcade.moveToXY(this.boss, this.boulder.x, this.boulder.y, 200); 
            if(this.filter.alpha == 0)
                this.bouldertrigger = true;
        }
        //udren od boulder
        if(this.game.physics.arcade.overlap(this.player, this.boulder)){
            if(this.hurtscreen.alpha == 0)
            this.playerhurt(this.player, this.boulder);

        }
        if(this.randombroj == 2 && this.filter.alpha != 1  && this.filter.alpha != 0
         && this.bouldertrigger == true) {
            this.boulderhealth--;
            this.bouldertrigger = false;
        }  
        if(this.boulderhealth == 7 && this.boulder.body.onFloor()){
            this.boulder.loadTexture('boulder1');
        } 
        if(this.boulderhealth == 5 && this.boulder.body.onFloor()){
            this.boulder.loadTexture('boulder2');
        } 

        if(this.boulderhealth == 3 && this.boulder.body.onFloor()){
            this.boulder.loadTexture('boulder3');
        } 
        if(this.boulderhealth == 1 && this.boulder.body.onFloor()){
            this.boulder.loadTexture('boulder4');
        } 
        if(this.boulderhealth == -1 && this.boulder.body.onFloor()){
            this.boulder.kill();
            this.randombroj = 1;
        }
        if(this.bosshealth <= 0){
            this.bosshealth = 550;
            this.bossdead = this.game.add.sprite(this.boss.x,this.boss.y,'bossdead');
            this.boss.kill();
            this.game.physics.enable(this.bossdead, Phaser.Physics.ARCADE);
            this.bossdead.anchor.setTo(0.5);
            this.bossdead.body.bounce.y = 0.4;
            this.bossdead.body.collideWorldBounds = true;
            this.bossdead.scale.setTo(1, 1);
            this.bossdead.body.velocity.y = -50;
            this.vreme = this.game.time.totalElapsedSeconds() + 5;
        }
        if(this.bosshealth >= 520){
            if(this.game.time.totalElapsedSeconds() >= this.vreme){
                this.game.time.events.add(Phaser.Timer.HOUR *4, this.game.add.tween(this.fader).to( { alpha: 1 },
                2000, Phaser.Easing.Linear.None, true), this);
                this.bosshealth = 510;
            }
        }
        if(this.bosshealth == 510 && this.fader.alpha == 1){
            this.music.destroy();
            this.game.state.start('cutscene5');
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
            this.damage = 1;
            this.weapon = this.game.add.weapon(60, 'iceshot');
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.weapon.bulletSpeed = 350;
            this.weapon.fireRate = 400;
            this.weapon.bulletAngleOffset = 0;
            this.weapon.bulletGravity.y = -489;
        }
        if(this.weapontype == 2){
            this.weapon.destroy();
            this.weapontype = 0;
            this.damage = 1;
            this.weapon = this.game.add.weapon(60, 'fireshot');
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.weapon.bulletSpeed = 400;
            this.weapon.fireRate = 100;
            this.weapon.bulletAngleOffset = 0;
            this.weapon.bulletGravity.y = -500;
        }
        if(this.weapontype == 3){
            this.weapon.destroy();
            this.weapontype = 0;
            this.damage = 2;
            this.weapon = this.game.add.weapon(60, 'holyshot');
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.weapon.bulletSpeed = 500;
            this.weapon.fireRate = 100;
            this.weapon.bulletAngleOffset = 0;
            this.weapon.bulletGravity.y = -500;
        }
        if(this.bosshealth <= 350 && this.kapka3.alpha == 1 ){
            this.kapka3.alpha = 0.5;
        }
        if(this.bosshealth <= 280 && this.kapka3.alpha == 0.5 ){
            this.kapka3.alpha = 0;
        }
        if(this.bosshealth <= 210 && this.kapka3.alpha == 0 && this.kapka2.alpha == 1){
            this.kapka2.alpha = 0.5;
        }
        if(this.bosshealth <= 140 && this.kapka2.alpha == 0.5 ){
            this.kapka2.alpha = 0;
        }
        if(this.bosshealth <= 70 && this.kapka2.alpha == 0 ){
            this.kapka1.alpha = 0.5;
        }

        //da vrni

        this.j+=10;
        if(this.j == 800){
            this.j=0;
        

    }
        if(this.raintrigger == true){
        if(this.j%80 == 0){ 
            this.raindrop = this.raindrops.create(Math.floor(Math.random() * 800) + 1, 0, 'raindrop');
            this.raindrop.body.gravity.y = 10;
            this.raindropcounter++;
        }
        if(this.j%160 == 0){ 
            this.raindrop = this.raindrops.create(Math.floor(Math.random() * 800) + 1, 0, 'raindrop');
            this.raindrop.body.gravity.y = 10
            this.raindropcounter++;
            }
        }

    }

    playerhurt (player, lavatile){
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
        bullet.kill();
        this.bosshitcounter += this.damage;
        this.bosshealth -= this.damage;
        if(this.bosshealth == 0){
        console.log('bossumrefaza');
    }
      console.log(this.bosshealth);
    }

    shutdown() {
      
    }
  }
  
  export default Bossfight2State;
  