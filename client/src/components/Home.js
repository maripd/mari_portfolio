import '../App.css'
import callimg from './call.png'
import emailimg from './email.png'

// const Home = () => {
//   return (
//     <div className="main-container">
//       <div className="content-container">
//         <header>
//           <div className="leftside-header">
//             <div className="resumebtn-jobtitle">
//               <h2 className="portfolio-name">MARI DILIG</h2>
//               <a
//                 href="https://docs.google.com/document/d/1_FKt7qs3go3Jn7wIjhF_2AOn-wExzJa3toUnjQn5BlI/edit"
//                 className="resumebtn"
//               >
//                 <span className="resumebtn">RESUME</span>
//               </a>
//             </div>
//             <span className="jobtitle">Full-Stack Web Developer</span>
//           </div>
//           <div class="rightside-header">
//             <a>
//               <img src={emailimg} className="email" id="emailid" />
//             </a>
//             <a>
//               <img src={callimg} className="call" id="phoneid" />
//             </a>
//           </div>
//         </header>
//         <div className="hero-container">
//           <h3 className="hero-text">
//             I love to build beautiful and functional web interfaces
//           </h3>
//           <span className="hero-span">React - Javascript - API</span>
//         </div>

//         <div className="project-container">
//           <a href="https://marijobtracker1.herokuapp.com/">
//             <div className="project-card card1">
//               <div className="cardtext-container">
//                 <h6 className="card-title">Job Tracker</h6>
//                 <span className="card-desc">React | Express | MongoDB </span>
//               </div>
//             </div>
//           </a>
//           <a href="https://marinotepad.herokuapp.com/">
//             <div className="project-card card2">
//               <div className="cardtext-container">
//                 <h6 className="card-title">Notepad</h6>
//                 <span className="card-desc">React | Express | MongoDB </span>
//               </div>
//             </div>
//           </a>

//           <a href="https://foliage-friends.herokuapp.com/">
//             <div className="project-card card3">
//               <div className="cardtext-container">
//                 <h6 className="card-title">Foliage Friends</h6>
//                 <span className="card-desc">React | Postgres | SQL </span>
//               </div>
//             </div>
//           </a>

//           <a href="http://mari-wordzzled.surge.sh/">
//             <div className="project-card card4">
//               <div className="cardtext-container">
//                 <h6 className="card-title">Wordzzled</h6>
//                 <span className="card-desc">HTML | CSS | Javascript </span>
//               </div>
//             </div>
//           </a>
//         </div>

//         <div className="outsideprocess-container">
//           <div className="myprocesstext-container">
//             <h5 className="myprocess">My Process</h5>
//           </div>

//           <div className="process-container">
//             <div className="process-text">
//               <p className="tech-text">React</p>
//               <p className="tech-desc">
//                 I start reviewing the design, create a component diagram and
//                 then start building routes and components.
//               </p>
//             </div>

//             <div className="process-text">
//               <p className="tech-text">Express</p>
//               <p className="tech-desc">
//                 I review which APIs and data the UI will need and continue to
//                 build express routers and controllers. I also use Insomnia to
//                 test my APIs
//               </p>
//             </div>

//             <div className="process-text">
//               <p className="tech-text">MongoDB</p>
//               <p className="tech-desc">
//                 I create an Entity Relationship Diagram to help shape my
//                 database.
//               </p>
//             </div>
//           </div>
//         </div>
//         <footer>
//           <a
//             href="https://www.linkedin.com/in/marissa-dilig/"
//             className="footerlink"
//           >
//             LINKEDIN
//           </a>
//           <a href="https://github.com/maripd" className="footerlink">
//             GITHUB
//           </a>
//           <a
//             href="https://trello.com/b/A7Rwzhqv/job-tracker-app"
//             className="footerlink"
//           >
//             TRELLO
//           </a>
//         </footer>
//       </div>
//     </div>
//   )
// }

// export default Home

const Home = () => {
  return (
    <div className="main-container">
      <header className="header-container">
        <h1 className="myname">Mari Dilig</h1>
        <span className="jobtitle">JUNIOR WEB DEVELOPER</span>
      </header>
      <div className="tabs-outercontainer">
        <div className="project1tab-container tab-innercontainer">
          <button className="projectbutton">PROJECT 1</button>
        </div>
        <div className="project2tab-container tab-innercontainer">
          <button className="projectbutton">PROJECT 2</button>
        </div>
        <div className="project3tab-container tab-innercontainer">
          <button className="projectbutton">PROJECT 3</button>
        </div>
        <div className="project4tab-container tab-innercontainer">
          <button className="projectbutton">PROJECT 4</button>
        </div>
        <div className="project5ttab-container tab-innercontainer">
          <button className="projectbutton">PROJECT 5</button>
        </div>
      </div>
      <div className="tabcontent-container">
        <div className="content1">
          <img src="" className="JOB TRACKER" />
          <h4 className="jobtracker">Job Tracker</h4>
          <p className="description1">
            description here: Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
          </p>
        </div>
        <div className="content2">
          <img src="" className="img2" />
          <h4 className="notepad">NOTEPAD</h4>
          <p className="description2">
            description here: Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
          </p>
        </div>
        <div className="content3">
          <img src="" className="img3" />
          <h4 className="gradebook">GRADEBOOK</h4>
          <p className="description3">
            description here: Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
          </p>
        </div>
        <div className="content4">
          <img src="" className="img4" />
          <h4 className="foliagefriends">FOLIAGE FRIENDS</h4>
          <p className="description4">
            description here: Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          </p>
        </div>
        <div className="content5">
          <img src="" className="img5" />
          <h4 className="wordzzled">WORDZZLED</h4>
          <p className="description5">
            description here: Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          </p>
        </div>
      </div>
      <footer>
        <span className="linkedin footer-span">LINKEDIN</span>
        <span className="github footer-span">GITHUB</span>
        <span className="resume footer-span">RESUME</span>
        <span className="trello footer-span">TRELLO</span>
      </footer>
    </div>
  )
}

export default Home
