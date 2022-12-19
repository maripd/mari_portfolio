import '../App.css'
import callimg from './call.png'
import emailimg from './email.png'
// import jobtracker from './jobtracker.png'
import calendar from './calendar.png'

const Home = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <header>
          <div className="leftside-header">
            <div className="resumebtn-jobtitle">
              <h2 className="portfolio-name">MARI DILIG</h2>
              <a
                href="https://docs.google.com/document/d/1_FKt7qs3go3Jn7wIjhF_2AOn-wExzJa3toUnjQn5BlI/edit"
                className="resumebtn"
              >
                <span className="resumebtn">RESUME</span>
              </a>
            </div>
            <span className="jobtitle">Web Developer</span>
          </div>
          <div class="rightside-header">
            <a>
              <img src={emailimg} className="email" id="emailid" />
            </a>
            <a>
              <img src={callimg} className="call" id="phoneid" />
            </a>
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
              <h6 className="card-title">Notepad</h6>
              <span className="card-desc">React | Express | MongoDB </span>
            </div>
          </div>

          <div className="project-card card3">
            <div className="cardtext-container">
              <h6 className="card-title">Foliage Friends</h6>
              <span className="card-desc">React | Postgres | SQL </span>
            </div>
          </div>

          <div className="project-card card4">
            <div className="cardtext-container">
              <h6 className="card-title">Wordzzled</h6>
              <span className="card-desc">HTML | CSS | Javascript </span>
            </div>
          </div>
        </div>
        <div className="calendly-container">
          <a
            href="https://calendly.com/hello_maripd/30min"
            className="calendar-link"
          >
            <div className="calendlytext-container">
              <p className="calendar-btn">Free for a 30 minute chat </p>
              <img src={calendar} className="calendar-img" />
            </div>
          </a>
        </div>

        <div className="testimony-container">
          <p className="testimonial1">
            "Ray Of Sunshine Award- Always bringing positive energy to class!"
          </p>
          <p className="testimonial2">
            "Most likely to work somewhere where productivity improvement is
            their goal. She is on it with the apps that help improve
            productivity and organization."
          </p>
          <p className="testimonial3">
            "She has the best attitude, even when things are feeling really
            overwhelming (for all of us!!) "
          </p>
          <p className="testimonial4">
            "Your projects were always very cool and you always seem to be able
            to get the most out of an idea and make it reach its full
            potential..."
          </p>
        </div>

        <div className="outsideprocess-container">
          <div className="myprocesstext-container">
            <h5 className="myprocess">My Process</h5>
          </div>

          <div className="process-container">
            <div className="process-text">
              <p className="tech-text">React</p>
              <p className="tech-desc">
                I start reviewing the design, create a component diagram and
                then start building routes and components.
              </p>
            </div>

            <div className="process-text">
              <p className="tech-text">Express</p>
              <p className="tech-desc">
                I review which APIs and data the UI will need and continue to
                build express routers and controllers. I also use Insomnia to
                test my APIs
              </p>
            </div>

            <div className="process-text">
              <p className="tech-text">MongoDB</p>
              <p className="tech-desc">
                I create an Entity Relationship Diagram to help shape my
                database.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://www.linkedin.com/in/marissa-dilig/"
            className="footerlink"
          >
            LINKEDIN
          </a>
          <a href="https://github.com/maripd" className="footerlink">
            GITHUB
          </a>
          <a
            href="https://trello.com/b/A7Rwzhqv/job-tracker-app"
            className="footerlink"
          >
            TRELLO
          </a>
          <a
            href="https://calendly.com/hello_maripd/30min"
            className="footerlink"
          >
            CALENDAR
          </a>
          {/* <span className="footerlink">EMAIL: marissadilig@gmail.com</span>
          <span className="footerlink">PHONE: (123) 123-2323</span> */}
        </footer>
      </div>
    </div>
  )
}

export default Home
