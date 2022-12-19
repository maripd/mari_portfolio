import '../App.css'
import callimg from './call.png'
import emailimg from './email.png'
import jobtracker from './jobtracker.png'

const Home = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <header>
          <div className="leftside-header">
            <div className="resumebtn-jobtitle">
              <h2 className="portfolio-name">MARI DILIG</h2>
              <button className="resumebtn">RESUME</button>
            </div>
            <span className="jobtitle">Web Developer</span>
          </div>
          <div class="rightside-header">
            <img src={emailimg} className="email" />
            <img src={callimg} className="call" />
          </div>
        </header>
        <div className="hero-container">
          <h3 className="hero-text">
            I love to build beautiful web interfaces
          </h3>
          <span className="hero-span">React - Javascript - API</span>
        </div>

        <div className="project-container">
          <div className="project-card card1">
            <div className="cardtext-container">
              <h6 className="card-title">Job Tracker</h6>
              <span className="card-desc">React | Express | MongoDB </span>
            </div>
          </div>

          <div className="project-card card2">
            <div className="cardtext-container">
              <h6 className="card-title">Job Tracker</h6>
              <span className="card-desc">React | Express | MongoDB </span>
            </div>
          </div>

          <div className="project-card card3">
            <div className="cardtext-container">
              <h6 className="card-title">Job Tracker</h6>
              <span className="card-desc">React | Express | MongoDB </span>
            </div>
          </div>

          <div className="project-card card4">
            <div className="cardtext-container">
              <h6 className="card-title">Job Tracker</h6>
              <span className="card-desc">React | Express | MongoDB </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
