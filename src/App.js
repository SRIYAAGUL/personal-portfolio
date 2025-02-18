import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensures dropdown & toggler works
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav id="navigation" className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand" href="#">Portfolio</a>

          {/* Navbar Toggler Button for Mobile */}
          <button 
            className="navbar-toggler" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"  
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#abot">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fullcontact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="bancard" className="card text-bg-dark">
        {/* Image */}
        <img src="bla.jpeg" id="banner" className="card-img" alt="Hero Image" />
        
        {/* Card Overlay */}
        <div className="card-img" id="caim">
          <div id="catit" className="text-center">
            <div className="round">
              <div className="miniround"></div>
            </div>
            <h1 className="card-title ">SRIYAAGUL K</h1>
            <p className="card-text ">FULL STACK DEVELOPER</p>
            <p className="tet">Creating simple, effective solutions that bring your ideas to life.</p>
          </div>
        </div>
      </div>
      <br/><br/>
      <div className="container" id="abot"><h2>About Me</h2>
      <br/>
      <p id="abot-content">I am a passionate Full-Stack Developer skilled in C, Java, and modern web technologies like HTML5, CSS3, JavaScript, Node.js, and Express.js.
         I specialize in building dynamic and responsive applications using ReactJS, AngularJS, and Bootstrap 5. With experience in SQL and MongoDB, I ensure efficient data management. 
         I also work with Figma, Visual Studio Code, and Eclipse for seamless development. Constantly learning and adapting, I thrive on solving problems and creating impactful solutions.
          My goal is to develop scalable and user-friendly applications</p></div>
      <br/><br/>
      <div className="container" id="skill"><h2>Skills</h2></div>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-4"><div className="card" id="ca"><div className="card-body" ><h4 id="webt">Web Technologies</h4>
          <br/>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NODE JS</li>
              <li>Express.js</li>
              <li>jQuery</li>
            </ul>
          </div></div></div> 
          <div className="col-md-4 "><div className="card" id="ca"><div className="card-body"><h4 id="webt">Frameworks</h4>
          <br/>
          <ul>
              <li>React js</li>
              <li>Angular js</li>
              <li>Bootstrap</li>
            </ul>
            </div></div></div> 
          <div className="col-md-4"><div className="card" id="ca"><div className="card-body"><h4 id="webt">Languages and Databases</h4>
          <br/>
          <ul>
              <li>Programming in C</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Mongo DB</li>
            </ul>
            </div></div></div> 
        </div>
      </div>
      <br/><br/>
      <div className="container" id="project"><h2>Projects</h2>
      <br/>
      <div className="row">
        <div className="col-md-4"><div class="card" id="caa">
        <div class="card-body">
        <h4 id="prohead">Weather Manager</h4>
        <p>
        This weather manager web app, built with HTML, CSS, and JavaScript, uses an API for real-time weather data. It allows users to search locations and view detailed weather conditions and forecasts.
        </p>
         </div>
      </div></div>
        <div className="col-md-4"><div class="card" id="caa">
        <div class="card-body">
        <h4 id="prohead">Pre-order Palate</h4>
        <p>
        This MERN stack application enables seamless table reservations and food pre-orders at restaurants, minimizing wait times. It features real-time updates with MongoDB, allowing users to view available tables, select times, and place orders efficiently.
        </p>
      </div>
      </div></div>
        <div className="col-md-4"><div class="card" id="caa">
      <div class="card-body">
        <h4 id="prohead">Expense Tracker</h4>
        <p>
        This web-based income and expense tracker, built with HTML, CSS, and JavaScript, lets users input and categorize their financial data. It helps users effectively monitor and manage their income and expenses. 
        </p>
      </div>
      </div></div>
      </div></div>
   <br/>  <br/>
<div id="fullcontact">
<div className="container" id="conhead">
<h2 className="section-title">Contact Me</h2>
</div>
   
  
<br/>
<div className="container" >
  <div className="row justify-content-center">
    <div className="col-md-6"><div className="card" id="cont">
  <div className="card-body">
      <div className="container" id="contact" >
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-user"></i>
            <p ><strong>Name:</strong> <span className="text-white">Sriyaagul K</span> </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p><strong>Email:</strong> <a href="mailto:sriyaagul@gmail.com" className="text-white text-decoration-none">sriyaagul@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p><strong>Phone:</strong> <a href="tel:+919344179502" className="text-white text-decoration-none">9344179502</a></p>
            <p><strong>Linked IN:</strong> <a href="https://www.linkedin.com/in/sriyaagul-k-6a70b1299/" className="text-white">https://www.linkedin.com/in/sriyaagul-k-6a70b1299/</a></p>
        </div></div></div></div></div></div>
       
        <div className="container">
      <div className="row justify-content-center">
        {/* Contact Card */}
        
        <div className="col-md-6">
          <div className="card" id="usercontact">
            <div className="card-body">
              <form action="https://formsubmit.co/sriyaagul@gmail.com" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label><strong>Your Name</strong></label>
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                      <label><strong>Your Email</strong></label>
                      <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                    </div>
                    <div className="mb-3">
                      <label><strong>Your Phone No:</strong></label>
                      <input type="text" name="phone" className="form-control" placeholder="Your Phone Number" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label><strong>Message</strong></label>
                      <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn bg-black text-white">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
  );
}

export default App;