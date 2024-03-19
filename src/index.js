import BootState from 'state/bootState';
import LoadingState from 'state/loadingState'
import MenuState from 'state/menuState';
import LevelState from 'state/levelState';
import MenuLevel from 'state/tranzici/Menu-Level';
import Level1Cutscene2 from 'state/tranzici/Level1-cutscene2';
import Level2Cutscene3 from 'state/tranzici/Level2-cutscene3';
import Level3Bossfight2 from 'state/tranzici/Level3-bossfight2';
import Cutscene5Finalboss from 'state/tranzici/cutscene5-finalboss';
import Cutscene1 from 'state/Cutscenes/Cutscene1';
import Cutscene2 from 'state/Cutscenes/Cutscene2';
import Cutscene3 from 'state/Cutscenes/Cutscene3';
import Cutscene4 from 'state/Cutscenes/Cutscene4';
import Cutscene5 from 'state/Cutscenes/Cutscene5';
import Cutscene6 from 'state/Cutscenes/Cutscene6';
import Cutscene7 from 'state/Cutscenes/Cutscene7';
import Bossfight1State from 'state/Bossfight1State';
import Bossfight2State from 'state/Bossfight2State';
import LevelState3 from 'state/levelState3';
import LevelState2 from 'state/levelState2';
import ControlsState from 'state/controlsState';
import FinalBossState from 'state/finalBossState';
import EndingState from 'state/EndingState';
import Intro from 'state/Intro';



class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'game', false);
		this.state.add('boot', BootState, true);
		this.state.add('loading', LoadingState);
		this.state.add('menu', MenuState);
		this.state.add('level', LevelState);
		this.state.add('menu-level', MenuLevel);
		this.state.add('level1-cutscene2', Level1Cutscene2);
		this.state.add('level2-cutscene3', Level2Cutscene3);
		this.state.add('cutscene5-finalboss', Cutscene5Finalboss);
		this.state.add('level3-bossfight2', Level3Bossfight2);
		this.state.add('cutscene1', Cutscene1);
		this.state.add('cutscene2', Cutscene2);
		this.state.add('cutscene3', Cutscene3);
		this.state.add('cutscene4', Cutscene4);
		this.state.add('cutscene5', Cutscene5);
		this.state.add('cutscene6', Cutscene6);
		this.state.add('cutscene7', Cutscene7);
		this.state.add('bossfight1', Bossfight1State);
		this.state.add('bossfight2', Bossfight2State);
		this.state.add('level3', LevelState3);
		this.state.add('level2', LevelState2);
		this.state.add('controls', ControlsState);
		this.state.add('finalboss', FinalBossState);
		this.state.add('ending', EndingState);
		this.state.add('intro', Intro);
	}

}

window.g = new Game();
	