import { Link } from 'react-router-dom'
import jobtracker from './jobtracker.png'
import foliage from './foliage.png'
import notepad from './notepad.png'
import gradebook from './gradebook.png'
import tictactoe from './tictactoe.png'
import wordzzled from './wordzzled.png'

const Home = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="name-container">
          <p className="my-name">Mari PD</p>
          <span className="jobtitle">Frontend Web Developer</span>
        </div>

        <button class="dropbtn">
          MENU
          <i class="fa fa-caret-down"></i>
        </button>

        {/* 
        <nav>
          <ul>
            <li className="link">About</li>
            <li className="link">Trello</li>
            <li className="link">Github</li>
            <li className="link">LinkedIn</li>
          </ul>
        </nav> */}
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img src={jobtracker} className="jobtracker" />
        </div>
        <div className="grid-item">
          <img src={notepad} id="notepad" />
        </div>
        <div className="grid-item">
          <img src={wordzzled} id="wordzzled" />
        </div>
        <div className="grid-item">
          <img src={tictactoe} id="tictactoe" />
        </div>
        <div className="grid-item">
          <img src={gradebook} id="gradebook" />
        </div>
        <div className="grid-item">
          <img src={foliage} id="foliage" />
        </div>
      </div>
      <footer>
        <a className="footer-link">LINKEDIN</a>
        <a className="footer-link">GITHUB</a>
        <a className="footer-link">CONTACT</a>
      </footer>
    </div>
  )
}

export default Home
