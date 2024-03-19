(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _bootState = require('state/bootState');

var _bootState2 = _interopRequireDefault(_bootState);

var _loadingState = require('state/loadingState');

var _loadingState2 = _interopRequireDefault(_loadingState);

var _menuState = require('state/menuState');

var _menuState2 = _interopRequireDefault(_menuState);

var _levelState = require('state/levelState');

var _levelState2 = _interopRequireDefault(_levelState);

var _MenuLevel = require('state/tranzici/Menu-Level');

var _MenuLevel2 = _interopRequireDefault(_MenuLevel);

var _Level1Cutscene = require('state/tranzici/Level1-cutscene2');

var _Level1Cutscene2 = _interopRequireDefault(_Level1Cutscene);

var _Level2Cutscene = require('state/tranzici/Level2-cutscene3');

var _Level2Cutscene2 = _interopRequireDefault(_Level2Cutscene);

var _Level3Bossfight = require('state/tranzici/Level3-bossfight2');

var _Level3Bossfight2 = _interopRequireDefault(_Level3Bossfight);

var _cutscene5Finalboss = require('state/tranzici/cutscene5-finalboss');

var _cutscene5Finalboss2 = _interopRequireDefault(_cutscene5Finalboss);

var _Cutscene = require('state/Cutscenes/Cutscene1');

var _Cutscene2 = _interopRequireDefault(_Cutscene);

var _Cutscene3 = require('state/Cutscenes/Cutscene2');

var _Cutscene4 = _interopRequireDefault(_Cutscene3);

var _Cutscene5 = require('state/Cutscenes/Cutscene3');

var _Cutscene6 = _interopRequireDefault(_Cutscene5);

var _Cutscene7 = require('state/Cutscenes/Cutscene4');

var _Cutscene8 = _interopRequireDefault(_Cutscene7);

var _Cutscene9 = require('state/Cutscenes/Cutscene5');

var _Cutscene10 = _interopRequireDefault(_Cutscene9);

var _Cutscene11 = require('state/Cutscenes/Cutscene6');

var _Cutscene12 = _interopRequireDefault(_Cutscene11);

var _Cutscene13 = require('state/Cutscenes/Cutscene7');

var _Cutscene14 = _interopRequireDefault(_Cutscene13);

var _Bossfight1State = require('state/Bossfight1State');

var _Bossfight1State2 = _interopRequireDefault(_Bossfight1State);

var _Bossfight2State = require('state/Bossfight2State');

var _Bossfight2State2 = _interopRequireDefault(_Bossfight2State);

var _levelState3 = require('state/levelState3');

var _levelState4 = _interopRequireDefault(_levelState3);

var _levelState5 = require('state/levelState2');

var _levelState6 = _interopRequireDefault(_levelState5);

var _controlsState = require('state/controlsState');

var _controlsState2 = _interopRequireDefault(_controlsState);

var _finalBossState = require('state/finalBossState');

var _finalBossState2 = _interopRequireDefault(_finalBossState);

var _EndingState = require('state/EndingState');

var _EndingState2 = _interopRequireDefault(_EndingState);

var _Intro = require('state/Intro');

var _Intro2 = _interopRequireDefault(_Intro);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.AUTO, 'game', false));

		_this.state.add('boot', _bootState2.default, true);
		_this.state.add('loading', _loadingState2.default);
		_this.state.add('menu', _menuState2.default);
		_this.state.add('level', _levelState2.default);
		_this.state.add('menu-level', _MenuLevel2.default);
		_this.state.add('level1-cutscene2', _Level1Cutscene2.default);
		_this.state.add('level2-cutscene3', _Level2Cutscene2.default);
		_this.state.add('cutscene5-finalboss', _cutscene5Finalboss2.default);
		_this.state.add('level3-bossfight2', _Level3Bossfight2.default);
		_this.state.add('cutscene1', _Cutscene2.default);
		_this.state.add('cutscene2', _Cutscene4.default);
		_this.state.add('cutscene3', _Cutscene6.default);
		_this.state.add('cutscene4', _Cutscene8.default);
		_this.state.add('cutscene5', _Cutscene10.default);
		_this.state.add('cutscene6', _Cutscene12.default);
		_this.state.add('cutscene7', _Cutscene14.default);
		_this.state.add('bossfight1', _Bossfight1State2.default);
		_this.state.add('bossfight2', _Bossfight2State2.default);
		_this.state.add('level3', _levelState4.default);
		_this.state.add('level2', _levelState6.default);
		_this.state.add('controls', _controlsState2.default);
		_this.state.add('finalboss', _finalBossState2.default);
		_this.state.add('ending', _EndingState2.default);
		_this.state.add('intro', _Intro2.default);
		return _this;
	}

	return Game;
}(Phaser.Game);

window.g = new Game();

},{"state/Bossfight1State":2,"state/Bossfight2State":3,"state/Cutscenes/Cutscene1":4,"state/Cutscenes/Cutscene2":5,"state/Cutscenes/Cutscene3":6,"state/Cutscenes/Cutscene4":7,"state/Cutscenes/Cutscene5":8,"state/Cutscenes/Cutscene6":9,"state/Cutscenes/Cutscene7":10,"state/EndingState":11,"state/Intro":12,"state/bootState":13,"state/controlsState":14,"state/finalBossState":15,"state/levelState":16,"state/levelState2":17,"state/levelState3":18,"state/loadingState":19,"state/menuState":20,"state/tranzici/Level1-cutscene2":21,"state/tranzici/Level2-cutscene3":22,"state/tranzici/Level3-bossfight2":23,"state/tranzici/Menu-Level":24,"state/tranzici/cutscene5-finalboss":25}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Bossfight1State = function (_Phaser$State) {
    _inherits(Bossfight1State, _Phaser$State);

    function Bossfight1State() {
        _classCallCheck(this, Bossfight1State);

        return _possibleConstructorReturn(this, (Bossfight1State.__proto__ || Object.getPrototypeOf(Bossfight1State)).apply(this, arguments));
    }

    _createClass(Bossfight1State, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
            this.game.load.tilemap('level1', 'assets/Levels/Bossfight1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles-1', 'assets/Tilesets/bosstiles1.jpg');
            this.game.load.spritesheet('boss', 'assets/iceboss.png', 100, 180);
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
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'bg');
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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

            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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

            this.fader = this.game.add.sprite(0, 0, 'fader');
            this.fader.alpha = 0;

            this.vreme1 = 0;
        }
    }, {
        key: 'update',
        value: function update() {
            //kolizija
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.snowballs, this.layer);
            this.game.physics.arcade.overlap(this.weapon1.bullets, this.boss, this.bosshit, null, this);
            this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.overlap(this.weapon2.bullets, this.boss, this.bosshit, null, this);
            this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija, null, this);
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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon1.fireAngle = 180;
                this.weapon2.fireAngle = 180;
                this.weapon1.trackSprite(this.player, -13, -4);
                this.weapon2.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon1.fireAngle = 0;
                this.weapon2.fireAngle = 0;
                this.weapon1.trackSprite(this.player, 13, -4);
                this.weapon2.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer) {
                this.player.body.velocity.y = -300;
                this.jumpTimer = this.game.time.now + 300;
            }
            //dur e kleknat da se menva pukanjeto
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) {
                    this.weapon1.trackSprite(this.player, 13, 8);
                    this.weapon2.trackSprite(this.player, 13, 8);
                }
                if (this.player.scale.x == -1) {
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

            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
                if (Math.floor(Math.random() * 300) + 1 == 30 && this.pillonmap == false) {
                    this.pill = this.pills.create(Math.floor(Math.random() * 500) + 0, 0, 'pill');
                    this.pill.animations.add('walk');
                    this.pill.animations.play('walk', 4, true);
                    this.pillonmap = true;
                    this.pill.scale.setTo(1.5, 1.5);
                }
            }
            if (this.PlayerHealth <= 0) {
                if (this.bosshealth > 0) {
                    this.music.destroy();
                    this.game.state.start('bossfight1');
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.pills)) {
                this.pillcollect(this.player, this.pill);
            }
            if (this.game.time.totalElapsedSeconds() >= this.vreme) {
                this.vreme += this.brojka;
                this.randombroj = Math.floor(Math.random() * 3) + 1;
                console.log(this.randombroj);
            }
            this.j += 10;
            if (this.j == 800) {
                this.j = 0;
            }
            if (this.randombroj == 1) {
                if (this.j % 100 == 0) {
                    this.icespike = this.icespikes.create(Math.floor(Math.random() * 800) + 1, 0, 'icespike');
                    this.icespike.scale.setTo(0.3, 0.3);
                    this.icespike.body.gravity.y = 10;
                }
                if (this.j % 200 == 0) {
                    this.icespike = this.icespikes.create(Math.floor(Math.random() * 800) + 1, 0, 'icespike');
                    this.icespike.scale.setTo(0.3, 0.3);
                    this.icespike.body.gravity.y = 10;
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.icespikes)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.icespike);
            }
            if (this.randombroj == 2) {
                if (this.j % 600 == 0) {
                    this.snowball = this.snowballs.create(800, Math.floor(Math.random() * 200) + 1, 'snowball');
                    this.snowball.scale.setTo(0.8, 0.8);
                    this.snowball.body.gravity.y = 10;
                    this.snowball.body.bounce.y = 0.9;
                    this.snowball.body.velocity.x = (Math.floor(Math.random() * 400) + 100) * -1;
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.snowballs)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.snowball);
            }
            this.jj += 10;
            if (this.jj == 1600) {
                this.jj == 0;
            }
            if (this.randombroj == 3) {
                if (this.jj % 800 == 0) {
                    this.snowball = this.snowballs.create(800, 400, 'snowball');
                    this.snowball.scale.setTo(0.5, 0.5);
                    this.snowball.body.gravity.y = 10;
                    this.snowball.body.bounce.y = 0.2;
                    this.snowball.body.velocity.x = (Math.floor(Math.random() * 300) + 200) * -1;
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.boss)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.boss);
            }
            if (this.bosshealth <= 300) this.brojka = 6;
            if (this.bosshealth <= 100) this.brojka = 1.5;
            //pukanje
            if (this.wasd.eden.isDown) {
                this.weapontype = 1;
            }
            if (this.wasd.dva.isDown) {
                this.weapontype = 2;
            }

            console.log(this.game.time.fps);
            if (this.bosshealth <= 400 && this.kapka3.alpha == 1) {
                this.kapka3.alpha = 0.5;
            }
            if (this.bosshealth <= 320 && this.kapka3.alpha == 0.5) {
                this.kapka3.alpha = 0;
            }
            if (this.bosshealth <= 240 && this.kapka3.alpha == 0 && this.kapka2.alpha == 1) {
                this.kapka2.alpha = 0.5;
            }
            if (this.bosshealth <= 160 && this.kapka2.alpha == 0.5) {
                this.kapka2.alpha = 0;
            }
            if (this.bosshealth <= 80 && this.kapka2.alpha == 0) {
                this.kapka1.alpha = 0.5;
            }
            if (this.bosshealth <= 0) {
                //ispukvanje na topche
                this.tochka.fire();
                //promena na agolot
                this.tochka.fireAngle -= 8;
                this.randombroj = 0;
                if (this.game.time.totalElapsedSeconds() >= this.vreme1) {
                    this.vreme1 += 10;
                    this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this;
                }
                if (this.fader.alpha == 1) {
                    this.music.destroy();
                    this.game.state.start('cutscene4');
                }
            }
        }
    }, {
        key: 'weaponfire',
        value: function weaponfire() {
            if (this.weapontype == 1) {
                this.damage = 1;
                this.weapon1.fire();
            }
            if (this.weapontype == 2) {
                this.damage = 2;
                this.weapon2.fire();
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, icespike) {
            this.PlayerHealth--;
            this.hurtscreen.alpha = 1;
            this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            this.player.animations.play('hurt');
            console.log(this.PlayerHealth);
        }
    }, {
        key: 'pillcollect',
        value: function pillcollect(player, pill) {
            console.log('pillplayher');
            if (this.PlayerHealth == 2 || this.PlayerHealth == 1) {
                pill.kill();
                this.pillonmap = false;
                this.PlayerHealth++;
            }
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            this.bulletkillcount++;
            console.log('bulletkill');
        }
    }, {
        key: 'bosshit',
        value: function bosshit(boss, bullet) {
            bullet.kill();
            this.bulletkillcount++;
            this.bosshealth -= this.damage;
            if (this.bosshealth <= 0) {
                this.deadboss = this.game.add.sprite(this.boss.x, this.boss.y, 'bossdead');
                this.deadboss.anchor.setTo(0.5, 0.5);
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
                this.tochka.fireAngle = 180;
                this.vreme1 = this.game.time.totalElapsedSeconds() + 5;
                this.vreme += 20;
            }
            console.log(this.bosshealth);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return Bossfight1State;
}(Phaser.State);

exports.default = Bossfight1State;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Bossfight2State = function (_Phaser$State) {
    _inherits(Bossfight2State, _Phaser$State);

    function Bossfight2State() {
        _classCallCheck(this, Bossfight2State);

        return _possibleConstructorReturn(this, (Bossfight2State.__proto__ || Object.getPrototypeOf(Bossfight2State)).apply(this, arguments));
    }

    _createClass(Bossfight2State, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
            this.game.load.spritesheet('boss', "assets/Gargspritesheet.png", 136.533333333, 119);

            this.jumpTimer = 0;
        }
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'bg');
            this.bg.fixedToCamera = true;
            this.lavatile = this.game.add.sprite(0, 600, 'lavatile');
            this.lavatile.enableBody = true;
            this.game.physics.enable(this.lavatile, Phaser.Physics.ARCADE);
            this.lavatile.body.collideWorldBounds = true;
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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

            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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
    }, {
        key: 'update',
        value: function update() {
            if (this.boss.x > 400) this.boss.scale.x = -1.2;else this.boss.scale.x = 1.2;
            //this.boulder.body.velocity.y = 200;
            this.boulder.body.velocity.x = 0;
            if (this.trigger2 == true) this.boss.body.velocity.y = -100;else this.boss.body.velocity.y = 50;
            //kolizija
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.boulder, this.layer);
            this.game.physics.arcade.collide(this.snowballs, this.layer);
            this.game.physics.arcade.overlap(this.weapon.bullets, this.boss, this.bosshit, null, this);
            this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.collide(this.boss, this.layer);
            this.game.physics.arcade.collide(this.pills, this.layer);
            this.game.physics.arcade.collide(this.lavatile, this.layer);
            this.game.physics.arcade.overlap(this.raindrops, this.lavatile, this.rainkill, null, this);
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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon.fireAngle = 180;
                this.weapon.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon.fireAngle = 0;
                this.weapon.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer) {
                this.player.body.velocity.y = -300;
                this.jumpTimer = this.game.time.now + 300;
            }
            //dur e kleknat da se menva pukanjeto
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) this.weapon.trackSprite(this.player, 13, 8);
                if (this.player.scale.x == -1) this.weapon.trackSprite(this.player, -13, 8);
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
            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
                if (Math.floor(Math.random() * 300) + 1 == 30 && this.pillonmap == false) {
                    this.pill = this.pills.create(Math.floor(Math.random() * 500) + 0, 0, 'pill');
                    this.pill.animations.add('walk');
                    this.pill.animations.play('walk', 4, true);
                    this.pillonmap = true;
                    this.pill.scale.setTo(1.5, 1.5);
                }
            }
            if (this.PlayerHealth <= 0) {
                this.music.destroy();
                this.game.state.start('level3-bossfight2');
                //console.log('wtfbruv')
            }
            if (this.game.physics.arcade.overlap(this.player, this.pills)) {
                this.pillcollect(this.player, this.pill);
            }
            if (this.game.physics.arcade.overlap(this.lavatile, this.pills)) {
                this.pill.kill();
                this.pillonmap = false;
                console.log('killpill');
            }
            this.j += 10;
            if (this.j == 800) {
                this.j = 0;
            }
            if (this.game.physics.arcade.overlap(this.player, this.lavatile)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.lavatile);
            }
            if (this.randombroj == 1 && this.boss.x != 400 && this.boss.y != 300 && this.koordinati == false) {
                this.game.physics.arcade.moveToXY(this.boss, 400, 300, 200);
                this.koordx = this.player.x;
                this.koordy = this.player.y;
            }
            if (this.randombroj == 1 && this.boss.x.toPrecision(3) <= 405 && this.boss.x.toPrecision(3) >= 395 && this.boss.y.toPrecision(3) >= 295 && this.boss.y.toPrecision(3) <= 305) {
                this.koordinati = true;
                this.game.physics.arcade.moveToXY(this.boss, this.koordx, this.koordy, 100);
                this.filter.alpha = 1;
                this.grom.play();
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.filter).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);
            }
            if (this.filter.alpha == 0 && this.koordinati == true) this.koordinati = false;

            if (this.game.physics.arcade.overlap(this.player, this.boss)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.boss);
            }

            if (this.randombroj == 2 && this.boss.x != 400 && this.boss.y != 50 && this.trigger2 == false && this.trigger3 == false) {
                this.game.physics.arcade.moveToXY(this.boss, 400, 50, 200);
            }
            //ako se priblizhi
            if (this.randombroj == 2 && this.boss.x.toPrecision(3) <= 405 && this.boss.x.toPrecision(3) >= 45 && this.boss.y.toPrecision(3) >= 55 && this.boss.y.toPrecision(3) <= 305 && this.trigger2 == false && this.trigger3 == false) {
                this.trigger2 = true;
                this.game.physics.arcade.moveToXY(this.boss, this.boulder.x, this.boulder.y, 100);
            }
            //da pochni dvizhenje
            if (this.game.physics.arcade.overlap(this.boss, this.boulder)) {
                this.BossBoulder = true;
            }
            //prv setup
            if (this.randombroj == 2 && this.BossBoulder == true && this.trigger3 == false) {

                if (this.filter.alpha == 0) {
                    this.filter.alpha = 1;
                    this.gromogolemina = (Math.floor(Math.random() * 10) + 4) / 10;
                    this.filter.scale.setTo(this.gromogolemina, this.gromogolemina);
                    console.log('works');
                    this.raintrigger = true;
                    this.grom.play();
                    this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.filter).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
                }
                this.trigger3 = true;
                this.trigger2 = false;
                this.xmoovement = 400;
                this.ymoovement = 50;
                this.BBspeed = 50;
            }

            //dvizhenje na boso
            if (this.randombroj == 2 && this.filter.alpha == 0 && this.trigger3 == true) {
                this.game.physics.arcade.moveToObject(this.boulder, this.boss, this.BBspeed);
                this.game.physics.arcade.moveToXY(this.boss, this.xmoovement, this.ymoovement, this.BBspeed);
            }
            if (this.randombroj == 2 && this.boss.x.toPrecision(3) <= 405 && this.boss.x.toPrecision(3) >= 45 && this.boss.y.toPrecision(3) >= 55 && this.boss.y.toPrecision(3) <= 305 && this.trigger2 == false && this.trigger4 == false) {
                this.trigger4 = true;
            }
            //vtor setup
            if (this.trigger4 == true) {
                this.xmoovement = this.player.x;
                this.ymoovement = 250;
                this.BBspeed = 100;
            }
            if (this.randombroj == 2 && this.boulder.x <= this.player.x + 5 && this.boulder.x >= this.player.x - 5 && this.trigger4 == true) {
                this.trigger3 = false;
            }
            //ako bouldero e na zemja
            if (this.randombroj == 2 && this.boulder.body.onFloor() && this.trigger4 == true) {
                this.game.physics.arcade.moveToXY(this.boss, this.boulder.x, this.boulder.y, 200);
                if (this.filter.alpha == 0) this.bouldertrigger = true;
            }
            //udren od boulder
            if (this.game.physics.arcade.overlap(this.player, this.boulder)) {
                if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.boulder);
            }
            if (this.randombroj == 2 && this.filter.alpha != 1 && this.filter.alpha != 0 && this.bouldertrigger == true) {
                this.boulderhealth--;
                this.bouldertrigger = false;
            }
            if (this.boulderhealth == 7 && this.boulder.body.onFloor()) {
                this.boulder.loadTexture('boulder1');
            }
            if (this.boulderhealth == 5 && this.boulder.body.onFloor()) {
                this.boulder.loadTexture('boulder2');
            }

            if (this.boulderhealth == 3 && this.boulder.body.onFloor()) {
                this.boulder.loadTexture('boulder3');
            }
            if (this.boulderhealth == 1 && this.boulder.body.onFloor()) {
                this.boulder.loadTexture('boulder4');
            }
            if (this.boulderhealth == -1 && this.boulder.body.onFloor()) {
                this.boulder.kill();
                this.randombroj = 1;
            }
            if (this.bosshealth <= 0) {
                this.bosshealth = 550;
                this.bossdead = this.game.add.sprite(this.boss.x, this.boss.y, 'bossdead');
                this.boss.kill();
                this.game.physics.enable(this.bossdead, Phaser.Physics.ARCADE);
                this.bossdead.anchor.setTo(0.5);
                this.bossdead.body.bounce.y = 0.4;
                this.bossdead.body.collideWorldBounds = true;
                this.bossdead.scale.setTo(1, 1);
                this.bossdead.body.velocity.y = -50;
                this.vreme = this.game.time.totalElapsedSeconds() + 5;
            }
            if (this.bosshealth >= 520) {
                if (this.game.time.totalElapsedSeconds() >= this.vreme) {
                    this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
                    this.bosshealth = 510;
                }
            }
            if (this.bosshealth == 510 && this.fader.alpha == 1) {
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
            if (this.weapontype == 1) {
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
            if (this.weapontype == 2) {
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
            if (this.weapontype == 3) {
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
            if (this.bosshealth <= 350 && this.kapka3.alpha == 1) {
                this.kapka3.alpha = 0.5;
            }
            if (this.bosshealth <= 280 && this.kapka3.alpha == 0.5) {
                this.kapka3.alpha = 0;
            }
            if (this.bosshealth <= 210 && this.kapka3.alpha == 0 && this.kapka2.alpha == 1) {
                this.kapka2.alpha = 0.5;
            }
            if (this.bosshealth <= 140 && this.kapka2.alpha == 0.5) {
                this.kapka2.alpha = 0;
            }
            if (this.bosshealth <= 70 && this.kapka2.alpha == 0) {
                this.kapka1.alpha = 0.5;
            }

            //da vrni

            this.j += 10;
            if (this.j == 800) {
                this.j = 0;
            }
            if (this.raintrigger == true) {
                if (this.j % 80 == 0) {
                    this.raindrop = this.raindrops.create(Math.floor(Math.random() * 800) + 1, 0, 'raindrop');
                    this.raindrop.body.gravity.y = 10;
                    this.raindropcounter++;
                }
                if (this.j % 160 == 0) {
                    this.raindrop = this.raindrops.create(Math.floor(Math.random() * 800) + 1, 0, 'raindrop');
                    this.raindrop.body.gravity.y = 10;
                    this.raindropcounter++;
                }
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, lavatile) {
            this.PlayerHealth--;
            this.hurtscreen.alpha = 1;
            this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            this.player.animations.play('hurt');
            console.log(this.PlayerHealth);
        }
    }, {
        key: 'pillcollect',
        value: function pillcollect(player, pill) {
            console.log('pillplayher');
            if (this.PlayerHealth == 2 || this.PlayerHealth == 1) {
                pill.kill();
                this.pillonmap = false;
                this.PlayerHealth++;
            }
        }
    }, {
        key: 'rainkill',
        value: function rainkill(lavatile, raindrop) {
            raindrop.kill();
            this.raindropcounter--;
            console.log(this.raindropcounter);
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            this.bulletkillcount++;
            console.log('bulletkill');
        }
    }, {
        key: 'bosshit',
        value: function bosshit(boss, bullet) {
            bullet.kill();
            this.bosshitcounter += this.damage;
            this.bosshealth -= this.damage;
            if (this.bosshealth == 0) {
                console.log('bossumrefaza');
            }
            console.log(this.bosshealth);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return Bossfight2State;
}(Phaser.State);

exports.default = Bossfight2State;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene1 = function (_Phaser$State) {
  _inherits(Cutscene1, _Phaser$State);

  function Cutscene1() {
    _classCallCheck(this, Cutscene1);

    return _possibleConstructorReturn(this, (Cutscene1.__proto__ || Object.getPrototypeOf(Cutscene1)).apply(this, arguments));
  }

  _createClass(Cutscene1, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('cutscene-slika1', 'assets/Cutscene1/Cutscene11.png', 800, 600);
      this.game.load.spritesheet('cutscene-slika2', 'assets/Cutscene1/Cutscene22.png', 800, 600);
      this.game.load.spritesheet('cutscene-slika3', 'assets/Cutscene1/Cutscene33.png', 800, 600);
      this.game.load.image('text1', 'assets/Cutscene1/Text1.png');
      this.game.load.image('text2', 'assets/Cutscene1/Text2.png');
      this.game.load.image('text3', 'assets/Cutscene1/Text3.png');
      this.game.load.image('text4', 'assets/Cutscene1/Slika2Text4.png');
      this.game.load.image('text5', 'assets/Cutscene1/Slika2Text5.png');
      this.game.load.image('text6', 'assets/Cutscene1/Slika3Text6.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.spritesheet('cutscene-slika4', 'assets/Cutscene1/cutscene44.png', 800, 600);
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      //setup
      //this.tekst2 = this.game.add.sprite(0, 0, 'text2');
      //this.tekst2.alpha = 0;
      //a fucking mess
      this.tekst4 = this.game.add.sprite(0, 0, 'text4');
      this.tekst4.alpha = 0;
      this.tekst5 = this.game.add.sprite(0, 0, 'text5');
      this.tekst5.alpha = 0;
      this.slika1 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika1');
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.tekst1 = this.game.add.sprite(0, 0, 'text1');
      this.tekst1.alpha = 1;
      this.tekst3 = this.game.add.sprite(0, 0, 'text3');
      this.tekst3.alpha = 0;
      this.tekst6 = this.game.add.sprite(0, 0, 'text6');
      this.tekst6.alpha = 0;
      //osvetli
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");
      if (this.game.input.activePointer.isDown) {
        if (this.tekst1.alpha == 1) {
          this.tekst1.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.slika2 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika2');
          this.slika2.animations.add('walk');
          this.slika2.animations.play('walk', 12, true);
          this.slika2.alpha = 0;
          this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
          this.zadtekst.alpha = 1;
          this.tekst2 = this.game.add.sprite(0, 0, 'text2');
          this.tekst2.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.tekst2.alpha == 1) {
          this.tekst2.alpha = 0;
          this.slika3 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika3');
          this.slika3.animations.add('walk');
          this.slika3.animations.play('walk', 12, true);
          this.slika3.alpha = 0;
          this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
          this.zadtekst.alpha = 1;
          this.tekst3 = this.game.add.sprite(0, 0, 'text3');
          this.tekst3.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika3).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst3).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.tekst3.alpha == 1) {
          this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
          this.zadtekst.alpha = 1;
          this.tekst3.alpha = 0;
          this.tekst4 = this.game.add.sprite(0, 0, 'text4');
          this.tekst4.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst4).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.tekst4.alpha == 1) {
          this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
          this.zadtekst.alpha = 1;
          this.tekst4.alpha = 0;
          this.slika4 = this.game.add.tileSprite(0, 1, 800, 600, 'cutscene-slika4');
          this.slika4.animations.add('move');
          this.slika4.animations.play('move', 12, true);
          this.slika4.alpha = 0;
          this.tekst5 = this.game.add.sprite(0, 0, 'text5');
          this.tekst5.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika3).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika4).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst5).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.tekst5.alpha == 1) {
          this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
          this.zadtekst.alpha = 1;
          this.tekst5.alpha = 0;
          this.tekst6 = this.game.add.sprite(0, 0, 'text6');
          this.tekst6.alpha = 0;
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst6).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.tekst6.alpha == 1) {
          this.game.cache.removeSound('music');
          this.game.state.start('menu-level');
        }
        console.log('stignav');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene1;
}(Phaser.State);

exports.default = Cutscene1;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene2 = function (_Phaser$State) {
  _inherits(Cutscene2, _Phaser$State);

  function Cutscene2() {
    _classCallCheck(this, Cutscene2);

    return _possibleConstructorReturn(this, (Cutscene2.__proto__ || Object.getPrototypeOf(Cutscene2)).apply(this, arguments));
  }

  _createClass(Cutscene2, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('nslika1', 'assets/Cutscene2/null1.png', 800, 600);
      this.game.load.spritesheet('nslika2', 'assets/Cutscene2/null2.png', 800, 600);
      this.game.load.image('ntekst1', 'assets/Cutscene2/nullteskt1.png');
      this.game.load.image('ntekst2', 'assets/Cutscene2/nulltekst2.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');

      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.zadtekst = this.game.add.sprite(0, 0, 'zadtekst');
      this.slika1 = this.game.add.sprite(400, 300, 'nslika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);

      this.tekst1 = this.game.add.sprite(0, 0, 'ntekst1');
      this.tekst1.alpha = 1;

      this.slika2 = this.game.add.sprite(400, 300, 'nslika2');
      this.slika2.anchor.setTo(0.5, 0.5);
      this.slika2.alpha = 0;
      this.slika2.animations.add('walk');
      this.slika2.animations.play('walk', 12, true);

      this.fader1 = this.game.add.sprite(0, 0, 'fade');
      this.fader1.alpha = 0;

      this.tekst2 = this.game.add.sprite(0, 0, 'ntekst2');
      this.tekst2.alpha = 0;

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        if (this.slika1.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.slika2.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader1).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
      }
      if (this.fader1.alpha == 1) this.game.state.start('level2');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene2;
}(Phaser.State);

exports.default = Cutscene2;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene3 = function (_Phaser$State) {
  _inherits(Cutscene3, _Phaser$State);

  function Cutscene3() {
    _classCallCheck(this, Cutscene3);

    return _possibleConstructorReturn(this, (Cutscene3.__proto__ || Object.getPrototypeOf(Cutscene3)).apply(this, arguments));
  }

  _createClass(Cutscene3, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('slika1', 'assets/cutscene3/ice1.png', 800, 600);
      this.game.load.spritesheet('slika2', 'assets/cutscene3/ice2.png', 800, 600);
      this.game.load.image('icetekst', 'assets/cutscene3/icetekst.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.slika1 = this.game.add.sprite(400, 300, 'slika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.game.add.sprite(0, 0, 'icetekst');
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0;

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
      if (this.fader.alpha == 1) this.game.state.start('bossfight1');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene3;
}(Phaser.State);

exports.default = Cutscene3;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene4 = function (_Phaser$State) {
  _inherits(Cutscene4, _Phaser$State);

  function Cutscene4() {
    _classCallCheck(this, Cutscene4);

    return _possibleConstructorReturn(this, (Cutscene4.__proto__ || Object.getPrototypeOf(Cutscene4)).apply(this, arguments));
  }

  _createClass(Cutscene4, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('slika1', 'assets/cutscene3/ice2.png', 800, 600);
      this.game.load.image('icetekst2', 'assets/cutscene3/icetekst2.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.slika1 = this.game.add.sprite(400, 300, 'slika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.game.add.sprite(0, 0, 'icetekst2');
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0;

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
      if (this.fader.alpha == 1) this.game.state.start('level3');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene4;
}(Phaser.State);

exports.default = Cutscene4;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene5 = function (_Phaser$State) {
  _inherits(Cutscene5, _Phaser$State);

  function Cutscene5() {
    _classCallCheck(this, Cutscene5);

    return _possibleConstructorReturn(this, (Cutscene5.__proto__ || Object.getPrototypeOf(Cutscene5)).apply(this, arguments));
  }

  _createClass(Cutscene5, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('slika1', 'assets/cutscene5/garg1.png', 800, 600);
      this.game.load.spritesheet('slika2', 'assets/cutscene5/garg2.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.image('gargtekst1', 'assets/Cutscene5/tekstgarg1.png');
      this.game.load.image('gargtekst2', 'assets/Cutscene5/tekstgarg2.png');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.add.sprite(0, 0, 'zadtekst');
      this.slika1 = this.game.add.sprite(400, 200, 'slika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.tekst1 = this.game.add.sprite(0, 0, 'gargtekst1');
      this.tekst1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.slika2 = this.game.add.sprite(400, 300, 'slika2');
      this.slika2.anchor.setTo(0.5, 0.5);
      this.slika2.alpha = 0;
      this.slika2.animations.add('walk');
      this.slika2.animations.play('walk', 12, true);
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.tekst2 = this.game.add.sprite(0, 0, 'gargtekst2');
      this.tekst2.alpha = 0;
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        if (this.slika1.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.slika2.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
      }
      if (this.fader.alpha == 1) this.game.state.start('cutscene5-finalboss');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene5;
}(Phaser.State);

exports.default = Cutscene5;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene6 = function (_Phaser$State) {
  _inherits(Cutscene6, _Phaser$State);

  function Cutscene6() {
    _classCallCheck(this, Cutscene6);

    return _possibleConstructorReturn(this, (Cutscene6.__proto__ || Object.getPrototypeOf(Cutscene6)).apply(this, arguments));
  }

  _createClass(Cutscene6, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('slika1', 'assets/ending/ending1.png', 800, 600);
      this.game.load.spritesheet('slika2', 'assets/ending/ending2.png', 800, 600);
      this.game.load.spritesheet('slika3', 'assets/ending/ending3.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('gargtekst1', 'assets/ending/endtekst1.png');
      this.game.load.image('gargtekst2', 'assets/ending/endtekst2.png');
      this.game.load.image('gargtekst3', 'assets/ending/endtekst3.png');
      this.game.load.image('credits', 'assets/credits.png');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.slika1 = this.game.add.sprite(400, 200, 'slika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.tekst1 = this.game.add.sprite(0, 0, 'gargtekst1');
      this.tekst1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.slika2 = this.game.add.sprite(400, 300, 'slika2');
      this.slika2.anchor.setTo(0.5, 0.5);
      this.slika2.alpha = 0;
      this.slika2.animations.add('walk');
      this.slika2.animations.play('walk', 12, true);
      this.slika3 = this.game.add.sprite(400, 300, 'slika3');
      this.slika3.anchor.setTo(0.5, 0.5);
      this.slika3.alpha = 0;
      this.slika3.animations.add('walk');
      this.slika3.animations.play('walk', 12, true);
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.tekst2 = this.game.add.sprite(0, 0, 'gargtekst2');
      this.tekst2.alpha = 0;
      this.tekst3 = this.game.add.sprite(0, 0, 'gargtekst3');
      this.tekst3.alpha = 0;
      this.fader.alpha = 0.9;
      this.credits = this.game.add.sprite(0, 0, 'credits');
      this.credits.alpha = 0;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        if (this.slika1.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika1).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.slika2.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika3).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.slika2).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst3).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
        if (this.slika3.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst3).to({ alpha: 0 }, 3000, Phaser.Easing.Linear.None, true), this);
        }
      }
      if (this.fader.alpha == 1) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.credits).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene6;
}(Phaser.State);

exports.default = Cutscene6;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene7 = function (_Phaser$State) {
  _inherits(Cutscene7, _Phaser$State);

  function Cutscene7() {
    _classCallCheck(this, Cutscene7);

    return _possibleConstructorReturn(this, (Cutscene7.__proto__ || Object.getPrototypeOf(Cutscene7)).apply(this, arguments));
  }

  _createClass(Cutscene7, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('slika1', 'assets/ending/ending1.png', 800, 600);
      this.game.load.image('tekst', 'assets/ending/tekstend.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.slika1 = this.game.add.sprite(400, 300, 'slika1');
      this.slika1.anchor.setTo(0.5, 0.5);
      this.slika1.alpha = 1;
      this.slika1.animations.add('walk');
      this.slika1.animations.play('walk', 12, true);
      this.game.add.sprite(0, 0, 'tekst');
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0;

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.isDown) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
      if (this.fader.alpha == 1) this.game.state.start('menu');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene7;
}(Phaser.State);

exports.default = Cutscene7;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Endingstate = function (_Phaser$State) {
  _inherits(Endingstate, _Phaser$State);

  function Endingstate() {
    _classCallCheck(this, Endingstate);

    return _possibleConstructorReturn(this, (Endingstate.__proto__ || Object.getPrototypeOf(Endingstate)).apply(this, arguments));
  }

  _createClass(Endingstate, [{
    key: 'init',
    value: function init() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.image('fader', 'assets/whitebg.jpg');
      this.game.load.image('fader1', 'assets/fade.jpg');
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
      this.game.load.image('observant', "assets/observant.png");
    }
  }, {
    key: 'create',
    value: function create() {
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
      this.broj0 = this.game.add.sprite(100, 200, this.i);
      this.broj0.scale.setTo(0.3, 0.3);
      this.broj1 = this.game.add.sprite(200, 200, this.i);
      this.broj1.scale.setTo(0.3, 0.3);
      this.broj2 = this.game.add.sprite(300, 200, this.i);
      this.broj2.scale.setTo(0.3, 0.3);
      this.broj3 = this.game.add.sprite(400, 200, this.i);
      this.broj3.scale.setTo(0.3, 0.3);
      this.broj4 = this.game.add.sprite(500, 200, this.i);
      this.broj4.scale.setTo(0.3, 0.3);
      this.broj5 = this.game.add.sprite(600, 200, this.i);
      this.broj5.scale.setTo(0.3, 0.3);
      this.vreme = 0.8;
      this.j = 0;
      this.game.input.onDown.add(this.brojkasort, this);
      this.fader = this.game.add.sprite(0, 0, 'fader1');
      this.fader.alpha = 0;
      this.game.physics.arcade.gravity.y = 500;
      //deklariram sredina od kaj sho kje izlegvat topchinjata
      this.sredina = this.game.add.sprite(400, 300, 'krug');
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
      this.tochka.fireAngle = 180;
      this.whitedot = this.game.add.sprite(800, 600, 'whitedot');
      this.whitedot.alpha = 0;
      this.screen = this.game.add.sprite(0, 0, 'screen');
      this.screen.alpha = 0;
      this.observant = this.game.add.sprite(0, 0, 'observant');

      this.greshki = 0;
    }
  }, {
    key: 'update',
    value: function update() {
      console.log(this.i);
      if (this.game.time.totalElapsedSeconds() >= this.vreme && this.fader.alpha == 0) {
        this.i++;
        if (this.i == 10) this.i = 0;
        this.vreme += 0.8;
        this.slowbrojki();
      }
      this.brojkivrtat();
      if (this.brojach6 != -1) this.endscenario();
      if (this.fader.alpha == 1) {
        //ispukvanje na topche
        this.tochka.fire();
        //promena na agolot
        this.tochka.fireAngle -= 1.61803398875;
        if (this.game.time.totalElapsedSeconds() >= this.vreme) {
          this.game.state.start('Cutscene6');
        }
      }
      if (this.greshki >= 2) this.game.state.start('cutscene7');
    }
  }, {
    key: 'brojkivrtat',
    value: function brojkivrtat() {
      this.j++;
      if (this.j == 10) this.j = 0;
      if (this.brojach1 == -1) this.broj1.loadTexture(this.j);
      if (this.brojach2 == -1) this.broj2.loadTexture(this.j);
      if (this.brojach3 == -1) this.broj3.loadTexture(this.j);
      if (this.brojach4 == -1) this.broj4.loadTexture(this.j);
      if (this.brojach5 == -1) this.broj5.loadTexture(this.j);
    }
  }, {
    key: 'brojkasort',
    value: function brojkasort() {
      if (this.whitedot.alpha == 0) {
        this.whitedot.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.whitedot).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
        if (this.brojach6 == -1 && this.brojach5 != -1) {
          this.brojach6 = this.i;
        }
        if (this.brojach5 == -1 && this.brojach4 != -1) {
          this.brojach5 = this.i;
        }
        if (this.brojach4 == -1 && this.brojach3 != -1) {
          this.brojach4 = this.i;
        }
        if (this.brojach3 == -1 && this.brojach2 != -1) {
          this.brojach3 = this.i;
        }
        if (this.brojach2 == -1 && this.brojach1 != -1) {
          this.brojach2 = this.i;
        }
        if (this.brojach1 == -1) {
          this.brojach1 = this.i;
        }
        this.i = this.j;
        console.log(' ' + this.brojach1 + ' ' + this.brojach2 + ' ' + this.brojach3 + ' ' + this.brojach4 + ' ' + this.brojach5 + ' ' + this.brojach6);
      }
    }
  }, {
    key: 'slowbrojki',
    value: function slowbrojki() {
      if (this.brojach1 == -1) {
        this.broj0.loadTexture(this.i);
      }
      if (this.brojach2 == -1) this.broj1.loadTexture(this.i);
      if (this.brojach3 == -1) this.broj2.loadTexture(this.i);
      if (this.brojach4 == -1) this.broj3.loadTexture(this.i);
      if (this.brojach5 == -1) this.broj4.loadTexture(this.i);
      if (this.brojach6 == -1) this.broj5.loadTexture(this.i);
    }
  }, {
    key: 'endscenario',
    value: function endscenario() {

      if (this.brojach1 == 1 && this.brojach2 == 1 && this.brojach3 == 2 && this.brojach4 == 3 && this.brojach5 == 5 && this.brojach6 == 8 && this.fader.alpha == 0) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
        this.observant.alpha = 0;
        this.vreme = this.game.time.totalElapsedSeconds() + 15;
      } else {
        this.screen.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.screen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
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
  }, {
    key: 'shutdown',
    value: function shutdown() {}
  }]);

  return Endingstate;
}(Phaser.State);

exports.default = Endingstate;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Intro = function (_Phaser$State) {
  _inherits(Intro, _Phaser$State);

  function Intro() {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).apply(this, arguments));
  }

  _createClass(Intro, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.image('zadtekst', 'assets/Cutscene1/backgroundtekst.png');
      this.game.load.image('intro1', 'assets/intro/intro1.png');
      this.game.load.image('intro2', 'assets/intro/intro2.png');
      this.game.load.image('intro3', 'assets/intro/intro3.png');
      this.game.load.image('intro4', 'assets/intro/intro4.png');
      this.game.load.image('intro5', 'assets/intro/intro5.png');
    }
  }, {
    key: 'create',
    value: function create() {

      this.intro5 = this.game.add.sprite(0, 0, 'intro5');
      this.intro5.alpha = 1;
      this.intro4 = this.game.add.sprite(0, 0, 'intro4');
      this.intro4.alpha = 1;
      this.intro3 = this.game.add.sprite(0, 0, 'intro3');
      this.intro3.alpha = 1;
      this.intro2 = this.game.add.sprite(0, 0, 'intro2');
      this.intro2.alpha = 1;
      this.intro1 = this.game.add.sprite(0, 0, 'intro1');
      this.intro1.alpha = 1;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
      this.fader1 = this.game.add.sprite(0, 0, 'fade');
      this.fader1.alpha = 0;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.input.activePointer.leftButton.isDown) {
        this.game.world.bringToTop(this.fader);
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
      if (this.fader.alpha == 1) {
        this.fader.alpha = 0;
        this.fader1.alpha = 1;
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader1).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
      }
      if (this.intro5.alpha == 0) this.game.state.start('menu');
      if (this.fader.alpha == 0 && this.fader1.alpha == 1) {
        if (this.intro1.alpha == 1) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.intro1).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
          this.game.world.bringToTop(this.intro2);
        }
        if (this.intro2.alpha == 1 && this.intro1.alpha == 0) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.intro2).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
          this.game.world.bringToTop(this.intro3);
        }
        if (this.intro3.alpha == 1 && this.intro2.alpha == 0) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.intro3).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
          this.game.world.bringToTop(this.intro4);
        }
        if (this.intro4.alpha == 1 && this.intro3.alpha == 0) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.intro4).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
          this.game.world.bringToTop(this.intro5);
        }
        if (this.intro5.alpha == 1 && this.intro4.alpha == 0) {
          this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.intro5).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true), this);
        }
        this.game.world.bringToTop(this.fader1);
        this.game.world.bringToTop(this.fader);
      }

      console.log(this.fader1.alpha);
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Intro;
}(Phaser.State);

exports.default = Intro;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

window.WebFontConfig = {
  ready: false,
  active: function active() {
    this.ready = true;
  }, google: { families: ['Oswald'] }
};

var BootState = function (_Phaser$State) {
  _inherits(BootState, _Phaser$State);

  function BootState() {
    _classCallCheck(this, BootState);

    return _possibleConstructorReturn(this, (BootState.__proto__ || Object.getPrototypeOf(BootState)).apply(this, arguments));
  }

  _createClass(BootState, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
      this.game.load.image('loader_background', 'assets/fade.jpg');
    }
  }, {
    key: 'create',
    value: function create() {

      this.game.time.advancedTiming = true;
      this.input.maxPointers = 1;
      this.stage.disableVisibilityChange = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;;
      this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.setMinMax(0, 0, 1640, 1080);
      if (!this.game.device.desktop) {
        this.scale.forceOrientation(true, false);
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (WebFontConfig.ready) {
        WebFontConfig.ready = false;
        this.game.state.start('loading');
      }
    }
  }]);

  return BootState;
}(Phaser.State);

exports.default = BootState;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ControlsState = function (_Phaser$State) {
    _inherits(ControlsState, _Phaser$State);

    function ControlsState() {
        _classCallCheck(this, ControlsState);

        return _possibleConstructorReturn(this, (ControlsState.__proto__ || Object.getPrototypeOf(ControlsState)).apply(this, arguments));
    }

    _createClass(ControlsState, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.sprite(0, 0, 'fader');
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level2');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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
            this.arrowkeys = this.game.add.sprite(100, 100, 'arrowkeys');
            this.arrowkeys.scale.setTo(0.8, 0.8);
            this.arrowkeys.alpha = 1;
            this.leftkey = false;
            this.rightkey = false;
            //skokanje
            this.spacebarkey = this.game.add.sprite(100, 100, 'spacebar');
            this.spacebarkey.scale.setTo(0.8, 0.8);
            this.spacebarkey.alpha = 0;
            this.spacebartrigger = false;
            //klechenje
            this.downkey = this.game.add.sprite(100, 100, 'downkey');
            this.downkey.scale.setTo(0.8, 0.8);
            this.downkey.alpha = 0;
            this.downkeytrigger = false;
            //pukanje
            this.Qkey = this.game.add.sprite(100, 100, 'Qkey');
            this.Qkey.scale.setTo(0.8, 0.8);
            this.Qkey.alpha = 0;
            this.Qkeytrigger = false;
            //attack change
            this.keys123 = this.game.add.sprite(100, 100, '123keys');
            this.keys123.scale.setTo(0.8, 0.8);
            this.keys123.alpha = 0;
            this.key1 = false;
            this.key2 = false;
            this.key3 = false;
            this.keycount = 0;
            this.fadeout = this.game.add.sprite(0, 0, 'fader');
            this.fadeout.alpha = 0;
        }
    }, {
        key: 'update',
        value: function update() {
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija, null, this);

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
                if (this.Qkey.alpha == 1) this.Qkeytrigger = true;
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon.fireAngle = 180;
                this.weapon.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon.fireAngle = 0;
                this.weapon.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.onFloor() || this.game.physics.arcade.overlap(this.player, this.platforms) && this.game.time.now > this.jumpTimer) {
                this.player.body.velocity.y = -300;
                this.jumpTimer = this.game.time.now + 300;
                if (this.spacebarkey.alpha == 1) this.spacebartrigger = true;
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
            if (this.isDuck == true) {
                if (this.player.scale.x == 1) this.weapon.trackSprite(this.player, 13, 8);
                if (this.player.scale.x == -1) this.weapon.trackSprite(this.player, -13, 8);
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
            if (this.weapontype == 1) {
                this.weapon.destroy();
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'iceshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 350;
                this.weapon.fireRate = 400;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -489;
                if (this.keys123.alpha == 1) this.key1 = true;
            }
            if (this.weapontype == 2) {
                this.weapon.destroy();
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'fireshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 400;
                this.weapon.fireRate = 100;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -500;
                if (this.keys123.alpha == 1) this.key2 = true;
            }
            if (this.weapontype == 3) {
                this.weapon.destroy();
                this.weapontype = 0;
                this.weapon = this.game.add.weapon(60, 'holyshot');
                this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                this.weapon.bulletSpeed = 700;
                this.weapon.fireRate = 200;
                this.weapon.bulletAngleOffset = 0;
                this.weapon.bulletGravity.y = -500;
                if (this.keys123.alpha == 1) this.key3 = true;
            }
            if (this.arrowkeys.alpha == 1) {
                if (this.cursors.left.isDown) this.leftkey = true;
                if (this.cursors.right.isDown) this.rightkey = true;
            }
            if (this.leftkey == true && this.rightkey == true) this.arrowkeys.alpha = 0;
            if (this.arrowkeys.alpha == 0) {
                this.spacebarkey.alpha = 1;
            }
            if (this.spacebartrigger == true && this.spacebarkey.alpha == 1) {
                this.spacebarkey.alpha = 0;
            }
            if (this.spacebarkey.alpha == 0 && this.spacebartrigger == true && this.downkeytrigger == false) {
                this.downkey.alpha = 1;
            }
            if (this.isDuck == true && this.downkey.alpha == 1 && this.downkeytrigger == false) {
                this.downkeytrigger = true;
                this.downkey.alpha = 0;
                this.Qkey.alpha = 1;
            }
            if (this.Qkeytrigger == true) {
                this.Qkeytrigger = false;
                this.Qkey.alpha = 0;
                this.keys123.alpha = 1;
            }
            if (this.keys123.alpha == 1 && this.key1 == true && this.key2 == true && this.key3 == true && this.shootingFlag == true) {
                this.keys123.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fadeout).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
            }
            if (this.fadeout.alpha == 1) {
                this.game.cache.removeSound('music');
                this.game.state.start('menu');
            }
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            console.log('bulletkill');
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return ControlsState;
}(Phaser.State);

exports.default = ControlsState;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var FinalBossState = function (_Phaser$State) {
    _inherits(FinalBossState, _Phaser$State);

    function FinalBossState() {
        _classCallCheck(this, FinalBossState);

        return _possibleConstructorReturn(this, (FinalBossState.__proto__ || Object.getPrototypeOf(FinalBossState)).apply(this, arguments));
    }

    _createClass(FinalBossState, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'background');
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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

            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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
            this.orbs.scale.setTo(1.5, 1.5);

            this.boss = this.game.add.sprite(390, 260, 'boss');
            this.boss.anchor.setTo(0.5);
            this.bosshealth = 424;
            this.maxbosshealth = 424;
            this.boss.scale.setTo(1.2, 1.2);

            this.game.physics.enable(this.boss, Phaser.Physics.ARCADE);

            this.boss.body.immovable = true;

            this.PlayerHealth = 3;
            this.vreme = 4;

            this.shieldplayer = this.game.make.sprite(0, 0, 'shieldplayer');
            this.shieldplayer.anchor.setTo(0.5, 0.5);
            this.shieldplayer.alpha = 0;
            this.player.addChild(this.shieldplayer);

            this.bossweapon = this.game.add.weapon(60, 'magicshot');
            this.bossweapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.bossweapon.bulletSpeed = 400;
            this.bossweapon.fireRate = 100;
            this.bossweapon.bulletAngleOffset = 0;
            this.bossweapon.bulletGravity.y = -500;
            this.bossweapon.fireAngle = 180;
            this.bossweapon.trackSprite(this.boss, -30, -5);

            this.bossweapon2 = this.game.add.weapon(6000, 'magicshot');
            this.bossweapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.bossweapon2.bulletSpeed = 400;
            this.bossweapon2.fireRate = 100;
            this.bossweapon2.bulletAngleOffset = 0;
            this.bossweapon2.bulletGravity.y = -500;
            this.bossweapon2.fireAngle = 0;
            this.bossweapon2.trackSprite(this.boss, -30, -5);

            this.faza = 1;
            this.angleznak = 1;
            this.vreme1 = 4;

            this.bhealth1 = this.game.add.sprite(0, 0, 'bosshealth1');
            this.bhealth1.alpha = 0;
            this.bhealth2 = this.game.add.sprite(0, 0, 'bosshealth2');
            this.bhealth2.alpha = 0;
            this.bhealth3 = this.game.add.sprite(0, 0, 'bosshealth3');

            this.bosshitimage = this.game.add.sprite(0, 0, 'bosshitimage');
            this.bosshitimage.alpha = 0;

            this.muzika = this.game.add.sprite(0, 0, 'muzika');
            this.muzika.alpha = 1;
            this.orbonmap = false;

            this.lavatile = this.game.add.sprite(0, 595, 'lavatile');
            this.lavatile.enableBody = true;
            this.game.physics.enable(this.lavatile, Phaser.Physics.ARCADE);
            this.lavatile.body.collideWorldBounds = true;
            this.dream = this.game.add.sprite(0, 0, 'dream');
            this.dream.alpha = 0;
            this.whitebg = this.game.add.sprite(0, 0, 'whitebg');
            this.whitebg.alpha = 0;
        }
    }, {
        key: 'update',
        value: function update() {
            //kolizija
            this.boss.body.velocity.y = -500;
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.boulder, this.layer);
            this.game.physics.arcade.collide(this.snowballs, this.layer);
            this.game.physics.arcade.overlap(this.weapon.bullets, this.boss, this.bosshit, null, this);
            this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija, null, this);
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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon.fireAngle = 180;
                this.weapon.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon.fireAngle = 0;
                this.weapon.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer) {
                this.player.body.velocity.y = -300;
                this.jumpTimer = this.game.time.now + 300;
            }
            //dur e kleknat da se menva pukanjeto
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) this.weapon.trackSprite(this.player, 13, 8);
                if (this.player.scale.x == -1) this.weapon.trackSprite(this.player, -13, 8);
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
            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
            }
            if (this.PlayerHealth <= 0) {
                this.music.destroy();
                this.game.state.start('cutscene5-finalboss');
            }
            if (this.game.physics.arcade.overlap(this.player, this.shields)) {
                this.shieldcollect(this.player, this.shield);
            }
            if (this.game.physics.arcade.overlap(this.player, this.bossweapon.bullets)) {
                this.playerhurt();
            }
            if (this.game.physics.arcade.overlap(this.player, this.bossweapon2.bullets)) {
                this.playerhurt();
            }
            if (this.game.physics.arcade.overlap(this.player, this.orb)) {
                this.weapontype = 3;
                this.orbcollect(this.player, this.orb);
            }
            if (this.game.physics.arcade.overlap(this.player, this.boss)) {
                this.playerhurt();
                if (this.faza == 1) {
                    if (this.shieldplayer.alpha != 0) {
                        this.bosshit();
                    }
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.lavatile)) this.playerhurt();
            if (this.bosshealth <= 0) {
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.dream).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
                this.faza = -1;
                this.bosshealth = 1000;
                this.playerhealth = 10;
            }
            if (this.dream.alpha == 1 && this.whitebg.alpha == 0) {
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.whitebg).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
            }
            if (this.whitebg.alpha == 1) {
                this.music.destroy();
                this.game.state.start('ending');
            }
            if (this.faza != 1) {
                if (this.weapontype == 3) {
                    this.weapon.destroy();
                    this.weapontype = 0;
                    this.damage = 4;
                    this.weapon = this.game.add.weapon(60, 'greenshot');
                    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                    this.weapon.bulletSpeed = 500;
                    this.weapon.fireRate = 100;
                    this.weapon.bulletAngleOffset = 0;
                    this.weapon.bulletGravity.y = -500;
                }
            }

            if (this.game.time.totalElapsedSeconds() >= this.vreme && this.shieldonmap == false && this.faza == 1) {
                if (Math.floor(Math.random() * 2) + 1 == 1) this.shield = this.shields.create(115, 60, 'shield');else this.shield = this.shields.create(580, 100, 'shield');
                this.shield.scale.setTo(0.8, 0.8);
                this.shieldonmap = true;
            }
            if (this.game.time.totalElapsedSeconds() >= this.vreme && this.orbonmap == false && this.faza == 2) {
                this.orbonplayer = false;
                this.orb = this.orbs.create(257, 10, 'greenshot');
                this.orbonmap = true;
            }
            if (this.game.time.totalElapsedSeconds() >= this.vreme1) {
                this.vreme1 += 12;
                this.randombroj = Math.floor(Math.random() * 3) + 1;
                console.log(this.randombroj);
                this.bossweapon.bulletSpeed = 400;
                this.bossweapon.fireRate = 100;
                this.bossweapon.bulletAngleOffset = 0;
                this.bossweapon.bulletGravity.y = -500;
                if (this.randombroj == 3) this.bossweapon.fireAngle = -150;else this.bossweapon.fireAngle = 180;
                this.bossweapon2.fireAngle = 0;
                if (this.faza == 2) this.faza = 5;
            }
            if (this.faza == 1) {
                if (this.bosshealth == 423) {
                    this.bhealth3.alpha = 0;
                    this.bhealth2.alpha = 1;
                }
                if (this.bosshealth == 422) {
                    this.bhealth2.alpha = 0;
                    this.bhealth1.alpha = 1;
                }
                if (this.bosshealth == 421 && this.bosshitimage.alpha == 0) {
                    this.faza = 5;
                    this.bhealth3.alpha = 0;
                    this.bhealth1.alpha = 0;
                }
                if (this.randombroj == 1) {
                    this.bossweapon.fire();
                    this.bossweapon.fireAngle -= 1;
                    this.bossweapon.fireRate = 250;
                    this.bossweapon.bulletspeed = 10;
                    this.bossweapon2.fire();
                    this.bossweapon2.fireAngle += 1;
                    this.bossweapon2.fireRate = 250;
                    this.bossweapon2.bulletspeed = 10;
                    this.bossweapon.bulletGravity.y = -500;
                }
                if (this.randombroj == 2) {
                    this.bossweapon.fire();
                    this.bossweapon.fireAngle -= 0.5;
                    this.bossweapon.fireRate = 100;
                    this.bossweapon.bulletspeed = 500;
                    this.bossweapon2.fire();
                    this.bossweapon2.fireAngle -= 0.5;
                    this.bossweapon2.fireRate = 100;
                    this.bossweapon2.bulletspeed = 500;
                    this.bossweapon.bulletGravity.y = -500;
                }
                if (this.randombroj == 3) {
                    this.bossweapon.fireRate = Math.floor(Math.random() * 50) + 30;
                    this.bossweapon.bulletspeed = 200;
                    this.bossweapon.fire();
                    if (this.bossweapon.fireAngle >= -30) {
                        this.angleznak = true;
                    }
                    if (this.bossweapon.fireAngle <= -150) this.angleznak = false;
                    if (this.angleznak == true) {
                        this.bossweapon.fireAngle--;
                    }
                    if (this.angleznak == false) this.bossweapon.fireAngle++;
                    this.bossweapon.bulletGravity.y = -100;
                }
            }
            if (this.faza == 5) {
                this.faza = 2;
                this.bossweapon2.bulletSpeed = 400;
                this.bossweapon2.fireRate = 100;
                this.bossweapon2.bulletAngleOffset = 0;
                this.bossweapon2.bulletGravity.y = -500;
                this.bossweapon2.fireAngle = 0;
                this.bossweapon.bulletSpeed = 400;
                this.bossweapon.fireRate = 100;
                this.bossweapon.bulletAngleOffset = 0;
                this.bossweapon.bulletGravity.y = -500;
                this.bossweapon.fireAngle = 180;
            }
            if (this.faza == 2) {
                if (this.randombroj == 1) {
                    this.bossweapon.fire();
                    this.bossweapon.fireAngle -= 1;
                    this.bossweapon.fireRate = 300;
                    this.bossweapon.bulletspeed = 100;
                    this.bossweapon2.fire();
                    this.bossweapon2.fireAngle -= 1;
                    this.bossweapon2.fireRate = 300;
                    this.bossweapon2.bulletspeed = 100;
                }
                if (this.randombroj == 2) {
                    this.bossweapon.fire();
                    this.bossweapon.fireAngle += 0.5;
                    this.bossweapon.fireRate = 70;
                    this.bossweapon.bulletspeed = 200;
                }
                if (this.randombroj == 3) {
                    this.bossweapon.fireAngle -= 12;
                    this.bossweapon.fireRate = 120;
                    this.bossweapon.bulletspeed = 200;
                    this.bossweapon.fire();
                    this.bossweapon2.fireAngle -= 12;
                    this.bossweapon2.fireRate = 120;
                    this.bossweapon2.bulletspeed = 200;
                    this.bossweapon2.fire();
                }
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, lavatile) {
            if (this.hurtscreen.alpha == 0 && this.shieldplayer.alpha == 0) {
                this.PlayerHealth--;
                this.hurtscreen.alpha = 1;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            }
            console.log(this.PlayerHealth);
        }
    }, {
        key: 'shieldcollect',
        value: function shieldcollect(player, shield) {
            console.log('shieldplayher');
            shield.kill();
            this.shieldonmap = false;
            this.shieldonplayer = true;
            this.vreme = this.game.time.totalElapsedSeconds() + 12;
            this.shieldplayer.alpha = 1;
            this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.shieldplayer).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);
        }
    }, {
        key: 'orbcollect',
        value: function orbcollect(player, orb) {
            orb.kill();
            this.orbonmap = false;
            this.orbonplayer = true;
            this.vreme = this.game.time.totalElapsedSeconds() + 12;
        }
    }, {
        key: 'rainkill',
        value: function rainkill(lavatile, raindrop) {
            raindrop.kill();
            this.raindropcounter--;
            console.log(this.raindropcounter);
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            this.bulletkillcount++;
            console.log('bulletkill');
        }
    }, {
        key: 'bosshit',
        value: function bosshit(boss, bullet) {
            if (this.faza == 1) {
                if (this.bosshitimage.alpha == 0) {
                    this.bosshealth -= this.damage;
                    this.bosshitimage.alpha = 1;
                    this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.bosshitimage).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
                }
            }
            if (this.faza == 2) {
                this.bosshealth -= this.damage;
                bullet.kill();
            }
            console.log(this.bosshealth);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return FinalBossState;
}(Phaser.State);

exports.default = FinalBossState;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LevelState = function (_Phaser$State) {
    _inherits(LevelState, _Phaser$State);

    function LevelState() {
        _classCallCheck(this, LevelState);

        return _possibleConstructorReturn(this, (LevelState.__proto__ || Object.getPrototypeOf(LevelState)).apply(this, arguments));
    }

    _createClass(LevelState, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'background');
            this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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
            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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
            this.pill.scale.setTo(1.5, 1.5);
            this.pill.animations.add('walk');
            this.pill.animations.play('walk', 4, true);
            this.isDuck = false;
            this.flashbacktrigger = false;
            this.flashback = this.game.add.sprite(0, 0, 'flashback1');
            this.flashback.alpha = 0;
            this.flashback.fixedToCamera = true;
            this.flashbackcounter = 0;
            this.stillflash = false;
            this.size1 = 1;
        }
    }, {
        key: 'update',
        value: function update() {
            //kolizija
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.overlap(this.weapon.bullets, this.spider, this.Spiderhit, null, this);
            this.game.physics.arcade.collide(this.weapon.bullets, this.layer, this.LayerKolizija, null, this);
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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon.fireAngle = 180;
                this.weapon.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon.fireAngle = 0;
                this.weapon.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer) {
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
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) this.weapon.trackSprite(this.player, 13, 8);
                if (this.player.scale.x == -1) this.weapon.trackSprite(this.player, -13, 8);
            }
            //tekst na pochetok
            if (this.tekst1.alpha == 1) {
                this.tekst1.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst2).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            } else if (this.tekst2.alpha == 1) {
                this.tekst2.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst3).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            } else if (this.tekst3.alpha == 1) {
                this.tekst3.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst4).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            } else if (this.tekst4.alpha == 1) {
                this.tekst4.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst5).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            } else if (this.tekst5.alpha == 1) {
                this.tekst5.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst6).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            } else if (this.tekst6.alpha == 1) {
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst6).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.zadtekst).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this);
            }
            this.playerspiderdistancex = this.player.x - this.spider.x;
            this.playerspiderdistancey = this.player.y - this.spider.y;
            //ko kje stigni
            if (this.trigger1 == true && this.player.x >= 7250) {
                this.trigger1 = false;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst7).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
                this.spidermovetrigger = true;
            }
            if (this.tekst7.alpha == 1) {
                this.tekst7.alpha = 0;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst8).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            }
            if (this.tekst8.alpha == 1) {
                this.tekst8.alpha = 0;
            }
            if (this.spiderdead == true) {
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.tekst9).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
                this.spiderdead = false;
            }
            if (this.tekst9.alpha == 1) this.game.add.tween(this.tekst9).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true), this;
            //dvizhenje na spidero
            if (this.spidermovetrigger == true) {
                if (this.playerspiderdistancex > 0) this.spider.body.velocity.x = 100;
                if (this.playerspiderdistancex < 0) this.spider.body.velocity.x = -100;
                if (this.spider.body.blocked.right || this.spider.body.blocked.left) {
                    this.spider.body.velocity.y = -300;
                }
            }
            if (this.game.physics.arcade.overlap(this.player, this.spider)) if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.spider);
            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth <= 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
            }
            if (this.PlayerHealth <= 0) {
                this.music.destroy();
                this.game.state.start('menu-level');
            }
            if (this.game.physics.arcade.overlap(this.player, this.pill)) {
                this.pillcollect(this.player, this.pill);
            }
            if (this.trigger2 == true && this.player.x >= 11500) {
                this.trigger2 = false;
                this.fader = this.game.add.sprite(0, 0, 'fader');
                this.fader.alpha = 0;
                this.fader.fixedToCamera = true;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 3000, Phaser.Easing.Linear.None, true), this);
                this.trigger3 = true;
            }
            if (this.trigger3 == true && this.fader.alpha == 1) {
                this.game.state.start('cutscene2');
                this.music.destroy();
                //sleden cutscene
                //pa tranzicija vo nov state
            }
            if (this.player.x >= 10600 && this.flashbacktrigger == false) {
                this.flashbacktrigger = true;
                this.stillflash = true;
                this.flashback.alpha = 1;
                this.tajmer = 700;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.flashback).to({ alpha: 0 }, this.tajmer, Phaser.Easing.Linear.None, true), this);
                console.log('bla');
            }
            if (this.stillflash == true && this.flashback.alpha == 0) {
                this.flashbacktrigger = false;
                this.flashbackcounter++;
                this.stillflash = false;
                this.tajmer -= 100;
            }
            if (this.flashbackcounter == 6) {
                this.flashback.alpha = 0;
                this.flashback.fixedToCamera = false;
                this.flashback.kill();
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, spider) {
            this.PlayerHealth--;
            this.hurtscreen.alpha = 1;
            this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            this.player.animations.play('hurt');
            console.log(this.PlayerHealth);
        }
    }, {
        key: 'pillcollect',
        value: function pillcollect(player, pill) {
            console.log('pillplayher');
            if (this.PlayerHealth == 2 || this.PlayerHealth == 1) {
                pill.kill();
                this.PlayerHealth++;
            }
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            console.log('bulletkill');
        }
    }, {
        key: 'Spiderhit',
        value: function Spiderhit(spider, bullet) {
            console.log('Spiderhit');
            bullet.kill();
            this.spiderhealth--;
            if (this.spiderhealth == 0) {
                spider.kill();
                this.spiderdead = true;
                this.spidermovetrigger = false;
            }

            console.log(this.spiderhealth);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return LevelState;
}(Phaser.State);

exports.default = LevelState;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LevelState3 = function (_Phaser$State) {
    _inherits(LevelState3, _Phaser$State);

    function LevelState3() {
        _classCallCheck(this, LevelState3);

        return _possibleConstructorReturn(this, (LevelState3.__proto__ || Object.getPrototypeOf(LevelState3)).apply(this, arguments));
    }

    _createClass(LevelState3, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.sprite(0, 0, 'background');
            //this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level2');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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
            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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
            this.orb1.scale.setTo(1.5, 1.5);
            this.orb2.scale.setTo(1.5, 1.5);
            this.isDuck = false;
            //deklaracija na snowballs
            this.snowball1 = this.game.add.sprite(1433, 400, 'snowball');
            this.snowball1.enableBody = true;
            this.game.physics.enable(this.snowball1, Phaser.Physics.ARCADE);
            this.snowball1.scale.setTo(0.5, 0.5);
            this.snowball1.body.gravity.y = 10;
            this.snowball1.body.bounce.y = 0;
            this.snowball1.body.velocity.x = 0;
            this.snowball2 = this.game.add.sprite(2090, 560, 'snowball');
            this.snowball2.enableBody = true;
            this.game.physics.enable(this.snowball2, Phaser.Physics.ARCADE);
            this.snowball2.scale.setTo(0.5, 0.5);
            this.snowball2.body.gravity.y = 10;
            this.snowball2.body.bounce.y = 0;
            this.snowball2.body.velocity.x = 0;
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
            this.cavetekst = this.game.add.sprite(0, 0, 'cavetekst');
            this.cavetekst.alpha = 0;
            this.cavetekst.fixedToCamera = true;
            //deklaracija na neprijatel
            this.archer = this.game.add.sprite(3047, 460, 'archer');
            this.archer.animations.add('walk');
            this.archer.animations.play('walk', 7, true);
            this.archer.scale.setTo(1.2, 1.2);
            this.archer.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(this.archer, Phaser.Physics.ARCADE);
            this.archerhealth = 3;
            //deklaracija na proektilite na neprijatelot
            this.arrow = this.game.add.weapon(30, 'arrow');
            this.arrow.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.arrow.bulletSpeed = 350;
            this.arrow.fireRate = 1500;
            this.arrow.fireAngle = 180;
            this.arrow.trackSprite(this.archer, 0, 0);
            this.arrow.bulletGravity.y = -479;
            //deklaracija na fadero za zatemnuvanje na slikata
            this.fader = this.game.add.sprite(0, 0, 'fader');
            this.fader.alpha = 0;
            this.fader.fixedToCamera = true;
            //spawn na archer
            this.game.add.sprite(200, 400, 'archer');
            //deklariram promenliva za falldamage
            this.falldamage = false;
            //deklaracija na oruzhje
            this.weapontype = 1;
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
            this.flashback = this.game.add.sprite(0, 0, 'flashback2');
            this.flashback.alpha = 0;
            this.flashback.fixedToCamera = true;
            this.flashbackcounter = 0;
            this.stillflash = false;
            this.pickup = this.game.add.sprite(250, 150, 'pickup');
            this.pickup.alpha = 0;
            this.pickup.fixedToCamera = true;
        }
    }, {
        key: 'update',
        value: function update() {
            //kolizija
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.overlap(this.weapon1.bullets, this.archer, this.archerhit, null, this);
            this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.overlap(this.weapon2.bullets, this.archer, this.archerhit, null, this);
            this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.collide(this.orbs, this.layer);
            this.game.physics.arcade.collide(this.snowball1, this.layer);
            this.game.physics.arcade.collide(this.player, this.snowball1);
            this.game.physics.arcade.collide(this.snowball2, this.layer);
            this.game.physics.arcade.collide(this.player, this.snowball2);
            this.game.physics.arcade.collide(this.player, this.platforms);
            this.game.physics.arcade.collide(this.archer, this.layer);
            this.game.physics.arcade.collide(this.arrow.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.collide(this.player, this.arrow.bullets, this.playerhurt, null, this);
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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon1.fireAngle = 180;
                this.weapon2.fireAngle = 180;
                this.weapon1.trackSprite(this.player, -13, -4);
                this.weapon2.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon1.fireAngle = 0;
                this.weapon2.fireAngle = 0;
                this.weapon1.trackSprite(this.player, 13, -4);
                this.weapon2.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.velocity.y == 0 && this.game.time.now > this.jumpTimer) {
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
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) {
                    this.weapon1.trackSprite(this.player, 13, 8);
                    this.weapon2.trackSprite(this.player, 13, 8);
                }
                if (this.player.scale.x == -1) {
                    this.weapon1.trackSprite(this.player, -13, 8);
                    this.weapon2.trackSprite(this.player, -13, 8);
                }
            }
            //proverva dali go nadminva limito na visina
            // console.log(this.player.body.velocity.y);
            //console.log(this.player.body.blocked.down);
            if (this.player.body.velocity.y >= 590) this.falldamage = true;
            //proverva dali e na zemja od ko go nadmina limito
            if (this.falldamage == true && this.player.body.velocity.y <= 10) {
                this.playerhurt();
                this.falldamage = false;
            }
            //da se menva healthbaro spored srcata
            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth <= 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
            }
            //ako umri karaktero
            if (this.PlayerHealth <= 0 || this.player.y > 1650) {
                this.music.destroy();
                this.game.state.start('level2');
            }
            //berenje na orboj
            if (this.game.physics.arcade.overlap(this.player, this.orb1)) {
                this.orb1.kill();
                this.orbcounter++;
            }
            if (this.game.physics.arcade.overlap(this.player, this.orb2)) {
                this.orb2.kill();
                this.orbcounter++;
            }
            //sozdavanje na platformi pri unishtuvanje na snowballs
            if (this.snowball1.y >= 1250 && this.snowball1trigger == true) {
                this.snowball1trigger = false;
                this.snowball1.kill();
                this.platforms.create(1750, 1320, 'snowplatform');
                this.platforms.setAll('body.allowGravity', false);
                this.platforms.setAll('body.immovable', true);
                this.platforms.setAll('body.velocity.x', 0);
            }
            if (this.snowball2.y >= 1250 && this.snowball2trigger == true) {
                this.snowball2trigger = false;
                this.snowball2.kill();
                this.platforms.create(2420, 1349, 'snowplatform');
                this.platforms.setAll('body.allowGravity', false);
                this.platforms.setAll('body.immovable', true);
                this.platforms.setAll('body.velocity.x', 0);
            }
            //uslov za tranzicija vo sleden level
            if (this.player.y >= 1120 && this.player.x >= 3238) {
                if (this.orbcounter >= 2 && this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
                if (this.orbcounter < 2) {
                    //ako gi nema sobrano orbojte
                    this.cavetekst.alpha = 1;
                }
            } else this.cavetekst.alpha = 0;
            if (this.fader.alpha == 1) {
                this.music.destroy();
                this.game.state.start('level2-cutscene3');
            }
            //neprijatelot da puka dur e zhiv
            if (this.archerhealth > 0) {
                this.arrow.fire();
                if (this.player.x <= this.archer.x) {
                    this.arrow.fireAngle = 180;
                    this.archer.scale.x = 1.2;
                }
                if (this.player.x >= this.archer.x) {
                    this.arrow.fireAngle = 0;
                    this.archer.scale.x = -1.2;
                }
            }

            //odredva koj vid na oruzhje da go ispuka
            if (this.wasd.eden.isDown) {
                this.weapontype = 1;
            }
            if (this.wasd.dva.isDown && this.orbcounter >= 2) {
                this.weapontype = 2;
                this.pickup.alpha = 0;
            }
            if (this.player.x >= 2800 && this.player.y >= 1100 && this.flashbacktrigger == false) {
                this.flashbacktrigger = true;
                this.stillflash = true;
                this.flashback.alpha = 1;
                this.tajmer = 700;
                if (this.flashbackcounter == 5) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.flashback).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);else this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.flashback).to({ alpha: 0 }, this.tajmer, Phaser.Easing.Linear.None, true), this);
                console.log('bla');
            }
            if (this.stillflash == true && this.flashback.alpha == 0) {
                this.flashbacktrigger = false;
                this.flashbackcounter++;
                this.stillflash = false;
                this.tajmer -= 100;
            }
            if (this.flashbackcounter == 6) {
                this.flashback.alpha = 0;
                this.flashback.fixedToCamera = false;
                this.flashback.kill();
            }
            if (this.orbcounter == 2 && this.pickup.alpha == 0) {
                this.pickup.alpha = 1;
                this.orbcounter++;
            }
        }
    }, {
        key: 'weaponfire',
        value: function weaponfire() {
            if (this.weapontype == 1) {
                this.damage = 1;
                this.weapon1.fire();
            }
            if (this.weapontype == 2) {
                this.damage = 2;
                this.weapon2.fire();
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, archer) {
            if (this.hurtscreen.alpha == 0) {
                this.PlayerHealth--;
                this.hurtscreen.alpha = 1;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
                this.player.animations.play('hurt');
            }
            console.log(this.PlayerHealth);
        }
    }, {
        key: 'orbcollect',
        value: function orbcollect(orb, player) {
            this.orb.kill();
            this.orbcounter++;
            console.log('stignav');
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            console.log('bulletkill');
        }
    }, {
        key: 'archerhit',
        value: function archerhit(archer, bullet) {
            console.log('archerhit');
            bullet.kill();
            this.archerhealth--;
            if (this.archerhealth == 0) {
                archer.kill();
                this.arrow.kill;
            }

            console.log(this.archerhealth);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return LevelState3;
}(Phaser.State);

exports.default = LevelState3;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LevelState3 = function (_Phaser$State) {
    _inherits(LevelState3, _Phaser$State);

    function LevelState3() {
        _classCallCheck(this, LevelState3);

        return _possibleConstructorReturn(this, (LevelState3.__proto__ || Object.getPrototypeOf(LevelState3)).apply(this, arguments));
    }

    _createClass(LevelState3, [{
        key: 'init',
        value: function init() {
            this.game.global = {};
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.C, Phaser.Keyboard.Q, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
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
    }, {
        key: 'preload',
        value: function preload() {
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
            this.game.load.spritesheet('grobber', "assets/graverobber.png", 210, 320);
            this.game.load.spritesheet('bear', "assets/bear.png", 227, 138);
            this.game.load.image('gattack', "assets/graverobberattack.png");
            this.game.load.image('flashback3', "assets/Flashbacks/flashback3.png");
            this.game.load.image('pickup', "assets/weapon3pickup.png");
            this.jumpTimer = 0;
        }
    }, {
        key: 'create',
        value: function create() {
            //pozadina
            this.bg = this.game.add.sprite(0, 0, 'background');
            //this.bg.fixedToCamera = true;
            this.map = this.game.add.tilemap('level1');
            this.map.addTilesetImage('tiles-1', 'tiles-1');
            this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);
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
            this.hurtscreen = this.game.add.sprite(0, 0, 'hurtscreen');
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
            this.rocky.scale.setTo(0.3, 0.3);
            this.platforms.setAll('body.allowGravity', false);
            this.platforms.setAll('body.immovable', true);
            this.platforms.setAll('body.velocity.x', 0);

            this.bear = this.game.add.sprite(5820, 1000, 'bear');
            this.game.physics.enable(this.bear, Phaser.Physics.ARCADE);
            this.bear.anchor.setTo(0.5, 0.5);
            this.bear.body.bounce.y = 0;
            this.bear.body.collideWorldBounds = true;
            this.bearhealth = 10000;
            this.beardead = false;
            this.bearmovetrigger = false;
            this.bear.animations.add('walk');
            this.bear.animations.play('walk', 7, true);
            this.bear.scale.setTo(0.4, 0.5);

            this.key = this.game.add.sprite(4150, 1350, 'holyshot');
            this.game.physics.enable(this.key, Phaser.Physics.ARCADE);
            this.key.enableBody = true;
            this.key.scale.setTo(1.3, 1.3);
            this.key.anchor.setTo(0.5, 0.5);
            this.boolkey = false;

            this.fader = this.game.add.sprite(0, 0, 'fader');
            this.fader.alpha = 0;
            this.fader.fixedToCamera = true;

            this.robber = this.game.add.sprite(3450, 1100, 'grobber');
            this.robber.animations.add('shoot');
            this.robber.animations.play('shoot', 7, true);
            this.robber.scale.setTo(0.3, 0.2);
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
            this.flashback = this.game.add.sprite(0, 0, 'flashback3');
            this.flashback.alpha = 0;
            this.flashback.fixedToCamera = true;
            this.flashbackcounter = 0;
            this.stillflash = false;
            this.pickup = this.game.add.sprite(250, 150, 'pickup');
            this.pickup.alpha = 0;
            this.pickup.fixedToCamera = true;
        }
    }, {
        key: 'update',
        value: function update() {
            console.log(this.player.x);
            if (this.player.x <= this.robber.x) {
                this.gweapon.fireAngle = 180;
                this.robber.scale.x = 0.3;
            }
            if (this.player.x >= this.robber.x) {
                this.gweapon.fireAngle = 0;
                this.robber.scale.x = -0.3;
            }
            if (this.robberhealth > 0) this.gweapon.fire();
            if (this.player.x <= this.bear.x) {
                this.bear.scale.x = -0.4;
            }
            if (this.player.x >= this.bear.x) {
                this.bear.scale.x = 0.4;
            }
            //kolizija
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.overlap(this.gweapon.bullets, this.player, this.playerhurt, null, this);
            this.game.physics.arcade.collide(this.gweapon.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.overlap(this.weapon1.bullets, this.bear, this.bearhit, null, this);
            this.game.physics.arcade.collide(this.weapon1.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.overlap(this.weapon2.bullets, this.bear, this.bearhit, null, this);
            this.game.physics.arcade.collide(this.weapon2.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.overlap(this.weapon3.bullets, this.bear, this.bearhit, null, this);
            this.game.physics.arcade.collide(this.weapon3.bullets, this.layer, this.LayerKolizija, null, this);
            this.game.physics.arcade.collide(this.bear, this.layer);
            this.game.physics.arcade.collide(this.rock, this.layer);
            this.game.physics.arcade.collide(this.key, this.layer);
            this.game.physics.arcade.collide(this.robber, this.layer);
            this.game.physics.arcade.overlap(this.weapon1.bullets, this.robber, this.robberhit, null, this);
            this.game.physics.arcade.overlap(this.weapon2.bullets, this.robber, this.robberhit, null, this);
            this.game.physics.arcade.overlap(this.weapon3.bullets, this.robber, this.robberhit, null, this);

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
            } else this.shootingFlag = false;
            //Dali levo ili desno da puka
            if (this.player.scale.x == -1) {
                this.weapon1.fireAngle = 180;
                this.weapon2.fireAngle = 180;
                this.weapon3.fireAngle = 180;
                this.weapon1.trackSprite(this.player, -13, -4);
                this.weapon2.trackSprite(this.player, -13, -4);
                this.weapon3.trackSprite(this.player, -13, -4);
            } else if (this.player.scale.x == 1) {
                this.weapon1.fireAngle = 0;
                this.weapon2.fireAngle = 0;
                this.weapon3.fireAngle = 0;
                this.weapon1.trackSprite(this.player, 13, -4);
                this.weapon2.trackSprite(this.player, 13, -4);
                this.weapon3.trackSprite(this.player, 13, -4);
            }
            //skoka
            if (this.jumpButton.isDown && this.player.body.velocity.y == 0 && this.game.time.now > this.jumpTimer) {
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
            if (this.isDuck == true && this.player.body.velocity.x == 0) {
                if (this.player.scale.x == 1) {
                    this.weapon1.trackSprite(this.player, 13, 8);
                    this.weapon2.trackSprite(this.player, 13, 8);
                    this.weapon3.trackSprite(this.player, 13, 8);
                }
                if (this.player.scale.x == -1) {
                    this.weapon1.trackSprite(this.player, -13, 8);
                    this.weapon2.trackSprite(this.player, -13, 8);
                    this.weapon3.trackSprite(this.player, -13, 8);
                }
            }
            if (this.wasd.eden.isDown) {
                this.weapontype = 1;
            }
            if (this.wasd.dva.isDown) {
                this.weapontype = 2;
            }
            if (this.wasd.tri.isDown && this.boolkey == true) {
                this.weapontype = 3;
                this.pickup.alpha = 0;
            }
            if (this.game.physics.arcade.overlap(this.player, this.bear)) if (this.hurtscreen.alpha == 0) this.playerhurt(this.player, this.bear);

            if (this.bearmovetrigger == true) {
                this.playerbeardistancex = this.player.x - this.bear.x;
                console.log(this.playerbeardistancex);
                if (this.playerbeardistancex > 0) this.bear.body.velocity.x = 140;
                if (this.playerbeardistancex < 0) this.bear.body.velocity.x = -140;
            }
            if (this.player.x >= 5396) this.bearmovetrigger = true;
            if (this.game.physics.arcade.overlap(this.bear, this.rocky)) this.rocky.body.velocity.x = -140;
            if (this.rocky.x <= 3700) this.rocky.body.velocity.y = 500;
            if (this.player.y >= 1480) this.PlayerHealth = 0;
            if (this.bear.y >= 1480) this.bear.kill();
            //tekst na pochetok
            if (this.game.physics.arcade.overlap(this.player, this.key)) {
                this.key.kill();
                this.boolkey = true;
                this.pickup.alpha = 1;
            }

            if (this.player.x >= 7500 && this.fader.alpha == 0 && this.boolkey == true) {
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true), this);
            }
            if (this.fader.alpha == 1) {
                this.music.destroy();
                this.game.state.start('level3-bossfight2');
            }
            //ko kje stigni

            //dvizhenje na bearo
            //console.log('x ' + this.player.x);
            //console.log('y ' + this.player.y);

            if (this.PlayerHealth == 3) {
                this.health3.alpha = 1;
                this.health2.alpha = 0;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth == 2) {
                this.health3.alpha = 0;
                this.health2.alpha = 1;
                this.health1.alpha = 0;
            }
            if (this.PlayerHealth <= 1) {
                this.health3.alpha = 0;
                this.health2.alpha = 0;
                this.health1.alpha = 1;
            }
            if (this.PlayerHealth <= 0) {
                this.music.destroy();
                this.game.state.start('level3');
            }
            if (this.player.x >= 7037 && this.flashbacktrigger == false) {
                this.flashbacktrigger = true;
                this.stillflash = true;
                this.flashback.alpha = 1;
                this.tajmer = 700;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.flashback).to({ alpha: 0 }, this.tajmer, Phaser.Easing.Linear.None, true), this);
                console.log('bla');
            }
            if (this.stillflash == true && this.flashback.alpha == 0) {
                this.flashbacktrigger = false;
                this.flashbackcounter++;
                this.stillflash = false;
                this.tajmer -= 100;
            }
            if (this.flashbackcounter == 6) {
                this.flashback.alpha = 0;
                this.flashback.fixedToCamera = false;
                this.flashback.kill();
            }
        }
    }, {
        key: 'playerhurt',
        value: function playerhurt(player, bear) {
            if (this.hurtscreen.alpha == 0) {
                this.PlayerHealth--;
                this.hurtscreen.alpha = 1;
                this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.hurtscreen).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
            }
        }
    }, {
        key: 'weaponfire',
        value: function weaponfire() {
            if (this.weapontype == 1) {
                this.damage = 1;
                this.weapon1.fire();
            }
            if (this.weapontype == 2) {
                this.damage = 2;
                this.weapon2.fire();
            }
            if (this.weapontype == 3) {
                this.damage = 1;
                this.weapon3.fire();
            }
        }
    }, {
        key: 'LayerKolizija',
        value: function LayerKolizija(bullet, layer) {
            bullet.kill();
            console.log('bulletkill');
        }
    }, {
        key: 'bearhit',
        value: function bearhit(bear, bullet) {
            console.log('bearhit');
            bullet.kill();
            this.beardead = true;
            this.bearmovetrigger = false;
            console.log(this.bearhealth);
        }
    }, {
        key: 'robberhit',
        value: function robberhit(robber, bullet) {
            bullet.kill();
            this.robberhealth -= this.damage;
            if (this.robberhealth <= 0) robber.kill();
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}
    }]);

    return LevelState3;
}(Phaser.State);

exports.default = LevelState3;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LoadingState = function (_Phaser$State) {
  _inherits(LoadingState, _Phaser$State);

  function LoadingState() {
    _classCallCheck(this, LoadingState);

    return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
  }

  _createClass(LoadingState, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/LoadingScreen1.png', 800, 600);
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      console.log("create");
      //
      //
      //dont forget this lol
      //
      //
      //this.game.state.start('level');
      this.game.state.start('intro');
      //this.game.state.start('bossfight2');
      //this.game.state.start('menu');
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return LoadingState;
}(Phaser.State);

exports.default = LoadingState;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuState = function (_Phaser$State) {
  _inherits(MenuState, _Phaser$State);

  function MenuState() {
    _classCallCheck(this, MenuState);

    return _possibleConstructorReturn(this, (MenuState.__proto__ || Object.getPrototypeOf(MenuState)).apply(this, arguments));
  }

  _createClass(MenuState, [{
    key: 'init',
    value: function init() {

      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.image('menunormal', 'assets/MenuNormal.png');
      this.game.load.image('bluebrain', 'assets/BlueBrain.png');
      this.game.load.image('greenbrain', 'assets/GreenBrain.png');
      this.game.load.image('fade', 'assets/fade.jpg');
      this.game.load.audio('music', 'assets/music/loop1bookashade.wav');
    }
  }, {
    key: 'create',
    value: function create() {
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
      this.music = this.game.add.audio('music');
      this.music.play();
      this.music.loopFull(1);
      this.fadein = this.game.add.sprite(0, 0, 'fade');
      this.fadein.alpha = 1;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fadein).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
    }
  }, {
    key: 'onClick',
    value: function onClick() {}
  }, {
    key: 'update',
    value: function update() {
      if (this.fader.alpha == 0) {
        if (this.blueb.input.pointerOver()) {
          this.blueb.bringToTop();
          this.blueb.alpha = 1;
        } else this.blueb.alpha = 0;
        if (this.greenb.input.pointerOver()) {
          this.greenb.bringToTop();
          this.greenb.alpha = 1;
        } else this.greenb.alpha = 0;
        this.greenb.events.onInputDown.add(this.tranzicija1, this);
        this.blueb.events.onInputDown.add(this.tranzicija2, this);
      }
      if (this.fader.alpha == 1) {
        if (this.cutscenetrigger == true) this.game.state.start('cutscene1');
        if (this.controlstrigger == true) this.game.state.start('controls');
      }
      if (this.fader.alpha != 0) {
        this.blueb.alpha = 0;
        this.greenb.alpha = 0;
      }

      //console.log("update");
    }
  }, {
    key: 'tranzicija1',
    value: function tranzicija1() {
      if (this.fader.alpha == 0) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
        this.cutscenetrigger = true;
      }
      this.blueb.alpha = 0;
      this.greenb.alpha = 0;
      console.log('cutscene');
    }
  }, {
    key: 'tranzicija2',
    value: function tranzicija2() {
      if (this.fader.alpha == 0) {
        this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
        this.controlstrigger = true;
      }
      this.blueb.alpha = 0;
      this.greenb.alpha = 0;
      console.log('kontroli');
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return MenuState;
}(Phaser.State);

exports.default = MenuState;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuLevel = function (_Phaser$State) {
  _inherits(MenuLevel, _Phaser$State);

  function MenuLevel() {
    _classCallCheck(this, MenuLevel);

    return _possibleConstructorReturn(this, (MenuLevel.__proto__ || Object.getPrototypeOf(MenuLevel)).apply(this, arguments));
  }

  _createClass(MenuLevel, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      this.bg.inputEnabled = true;
      this.bg.input.useHandCursos = true;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");

      if (this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if (this.fader.alpha == 1) {
        this.game.state.start('level2');
        console.log('gatov');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return MenuLevel;
}(Phaser.State);

exports.default = MenuLevel;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuLevel = function (_Phaser$State) {
  _inherits(MenuLevel, _Phaser$State);

  function MenuLevel() {
    _classCallCheck(this, MenuLevel);

    return _possibleConstructorReturn(this, (MenuLevel.__proto__ || Object.getPrototypeOf(MenuLevel)).apply(this, arguments));
  }

  _createClass(MenuLevel, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      this.bg.inputEnabled = true;
      this.bg.input.useHandCursos = true;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");

      if (this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if (this.fader.alpha == 1) {
        this.game.state.start('cutscene3');
        console.log('gatov');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return MenuLevel;
}(Phaser.State);

exports.default = MenuLevel;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuLevel = function (_Phaser$State) {
  _inherits(MenuLevel, _Phaser$State);

  function MenuLevel() {
    _classCallCheck(this, MenuLevel);

    return _possibleConstructorReturn(this, (MenuLevel.__proto__ || Object.getPrototypeOf(MenuLevel)).apply(this, arguments));
  }

  _createClass(MenuLevel, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      this.bg.inputEnabled = true;
      this.bg.input.useHandCursos = true;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");

      if (this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if (this.fader.alpha == 1) {
        this.game.state.start('bossfight2');
        console.log('gatov');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return MenuLevel;
}(Phaser.State);

exports.default = MenuLevel;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuLevel = function (_Phaser$State) {
  _inherits(MenuLevel, _Phaser$State);

  function MenuLevel() {
    _classCallCheck(this, MenuLevel);

    return _possibleConstructorReturn(this, (MenuLevel.__proto__ || Object.getPrototypeOf(MenuLevel)).apply(this, arguments));
  }

  _createClass(MenuLevel, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      this.bg.inputEnabled = true;
      this.bg.input.useHandCursos = true;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);

      console.log("create");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");

      if (this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if (this.fader.alpha == 1) {
        this.game.state.start('level');
        console.log('gatov');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return MenuLevel;
}(Phaser.State);

exports.default = MenuLevel;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Cutscene5Finalboss = function (_Phaser$State) {
  _inherits(Cutscene5Finalboss, _Phaser$State);

  function Cutscene5Finalboss() {
    _classCallCheck(this, Cutscene5Finalboss);

    return _possibleConstructorReturn(this, (Cutscene5Finalboss.__proto__ || Object.getPrototypeOf(Cutscene5Finalboss)).apply(this, arguments));
  }

  _createClass(Cutscene5Finalboss, [{
    key: 'init',
    value: function init() {
      this.background = this.game.add.sprite(0, 0, 'loader_background');
      console.log("init");
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet('loadingscreen', 'assets/Loadingscreen1.png', 800, 600);
      this.game.load.image('fade', 'assets/fade.jpg');
      console.log("preload");
    }
  }, {
    key: 'create',
    value: function create() {
      this.bg = this.game.add.tileSprite(0, 1, 800, 600, 'loadingscreen');
      this.bg.animations.add('walk');
      this.bg.animations.play('walk', 40, true);
      this.bg.fixedToCamera = true;
      this.bg.inputEnabled = true;
      this.bg.input.useHandCursos = true;
      this.fader = this.game.add.sprite(0, 0, 'fade');
      this.fader.alpha = 0.9;
      this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true), this);
      this.game.cache.removeSound('music');
      console.log("JASdaOSJDoa");
    }
  }, {
    key: 'update',
    value: function update() {
      console.log("update");

      if (this.fader.alpha == 0) this.game.time.events.add(Phaser.Timer.HOUR * 4, this.game.add.tween(this.fader).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true), this);
      if (this.fader.alpha == 1) {
        this.game.state.start('finalboss');
        console.log('gatov');
      }
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      console.log("shutdown");
      this.background = null;
    }
  }]);

  return Cutscene5Finalboss;
}(Phaser.State);

exports.default = Cutscene5Finalboss;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
