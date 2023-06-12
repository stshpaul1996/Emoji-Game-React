// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="title-width-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
