import gameModel from './model'
import gameView from './view'

class GameController {
  constructor() {
    this.gameModel = gameModel
    this.gameView = gameView

    this.gameModel.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break;
        case 'game':
          this.gameView.showGamePage()
          break;
        default:
      }
    })
  }

  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        this.gameModel.setStage('game-over')
      }
    }

    const gameOverPageCallbacks = {
      gameRestart: () => {
        this.gameModel.setStage('game')
      }
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }
}

export default new GameController()