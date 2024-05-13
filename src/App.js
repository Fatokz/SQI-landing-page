import './App.css';
import icon from './images/sqi-removebg-preview.png'
import googles from './images/google.png'
import inter from './images/Interswitch.png'
import andela from './images/Andela-log-landscape-blue-400px.png'
import micro from './images/Microsoft_logo.png'
import pay from './images/Paystack.png'
import part from './images/brewery.png'
import wema from './images/Wema-Bank-Logo.png'
import clan from './images/clan-logo.png'
import edozzier from './images/edozzier.png'
import monie from './images/moneymie.png'
import army from './images/Nigerian_Army.png'
import aella from './images/aella-credit.png'
import scaled from './images/sddefault-removebg-preview.png'
import laptop from './images/2021-07-31.jpg'

function App() {
  return (
    <div className="App">
      {/* Nav bar */}
      <nav className='navbar'>
        <div className='flex'>
          <div className='logo'>
            <img src={icon} alt="" />
          </div>
          <div class='rightnav mt-3'>
            <ul>
              <li className='drop'><p>About <i class="fa-solid fa-angle-down"></i></p>
              <div className='down'>
                <p>Our Story</p>
                <p>Our Team</p>
                <p>Campus info</p>
              </div>
              </li>
              <li className='drop'><p>Programmes <i class="fa-solid fa-angle-down"></i></p>
              <div className='down'>
                <p>National Innovation Diploma</p>
                <p>National Innovation Diploma</p>
              </div>
              </li>
              <li className='drop'><p>Admissions <i class="fa-solid fa-angle-down"></i></p>
              <div className='down'>
                <p>Apply for a programme</p>
                <p>Mode of Study</p>
              </div>
              </li>
              <li className='drop'><p>E-Portal <i class="fa-solid fa-angle-down"></i></p>
              <div className='down'>
                <p>Student</p>
                <p>Staff</p>
              </div>
              </li>
              <li><p>SQI Scholarship</p></li>
              <li><p>News</p></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section one */}
      <section className='one'>
        <div className='position'>
          <div className='face'> </div>
          <div className='twitter'>  </div>
          <div className='linkedin'>  </div>
        </div>
        <div className='ones'>
          <div className='study'>
            <h1>Study to become a global talent</h1>
            <p class="mt-4">Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
            <button className='btns'>Start Now <i class="fa-solid fa-angle-right"></i></button>
          </div>
          <div className='student'>

          </div>
        </div>
      </section>

      {/* Section two */}
      <section className='two'>
        <div>
          <h1>Start here. Change the world.</h1>
        </div>
        <div className='program'>
          <div className='certificate'>
            <div className='college'>

            </div>
            <div class="mt-3 nation">
              <h5 class="fw-semibold fs-4">National Innovative Diploma (NID)</h5>
            </div>
            <div class="mt-4 texts">
              <p>
                The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).
              </p>
            </div>
            <div class="mt-4 learn">
              <p>Learn More</p>
            </div>
            <div class="mt-5">
              <h6>NATIONAL DIPLOMA COURSES</h6>
            </div>
            <div className='diploma'>
              <div class="mt-4">
                <h6><span>Duration:</span> 2 Years</h6>
                <hr />
              </div>
              <div>
                <h6><span>Certificate:</span> Both National Diploma and Professional Diploma.</h6>
                <hr />
              </div>
              <div>
                <h6><span>Skills:</span> Academic Institution recognized skills and In-demand professional skills.</h6>
                <hr />
              </div>
              <div>
                <h6><span>Entry Requirements:</span> 120 min in JAMB 5 Credits in O-Level, Your passion</h6>
                <hr />
              </div>
              <div>
                <h6><span>Required Hardware:</span> (usually Laptop)</h6>
                <hr />
              </div>
              <div>
                <h6><span>Direct Entry:</span> Yes (Any University)</h6>
                <hr />
              </div>
              <div>
                <h6><span>Access to Alumni Network and Opportunities:</span> Yes.</h6>
                {/* <hr /> */}
              </div>
            </div>
          </div>
          <div className='certificate'>
            <div className='prof'>

            </div>
            <div class="mt-3 nation">
              <h5 class="fw-semibold fs-4">Professional Diploma Certificate</h5>
            </div>
            <div className='diploma'>
              <div class="mt-4 texts">
                <p>
                  The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.
                </p>
              </div>
              <div class="mt-4 learn">
                <p>Learn More</p>
              </div>
              <div class="mt-5">
                <h6>PROFESSIONAL DIPLOMA COURSES</h6>
              </div>
              <div class="mt-4">
                <h6><span>Duration:</span> 1 Years</h6>
                <hr />
              </div>
              <div>
                <h6><span>Certificate:</span> Professional Diploma</h6>
                <hr />
              </div>
              <div>
                <h6><span>Skills:</span>  In-demand professional skills</h6>
                <hr />
              </div>
              <div>
                <h6><span>Entry Requirements:</span> Your passion</h6>
                <hr />
              </div>
              <div>
                <h6><span>Required Hardware:</span> (usually Laptop)</h6>
                <hr />
              </div>
              <div>
                <h6><span>Direct Entry:</span> Partially Yes (LAUTECH ODL)</h6>
                <hr />
              </div>
              <div>
                <h6><span>Access to Alumni Network and Opportunities:</span> Yes.</h6>
                <hr />
              </div>
            </div>
          </div>
          <div className='certificate'>
            <div className='certificates'>

            </div>
            <div class="mt-3 nation">
              <h5 class="fw-semibold fs-4">Certificate Program</h5>
            </div>
            <div class="mt-4 texts">
              <p>
                The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.
              </p>
            </div>
            <div class="mt-4 learn">
              <p>Learn More</p>
            </div>
            <div class="mt-5">
              <h6>CERTIFICATE PROGRAM</h6>
            </div>
            <div className='diploma'>
              <div class="mt-4">
                <h6><span>Duration:</span> 2 weeks to 6 months</h6>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section three */}
      <section className='three'>
        <div class="d-flex">
          <div className='engin'>
            <h1>Our Top Courses</h1>
            <p>Take a look at some of our popular courses</p>
            <div className='software'>
              <div className='demand'>

              </div>
              <div class="mt-4 ">
                <h3 class="fw-bold">Software Engineering</h3>
              </div>
              <div>
                <p class="fw-semibold">Software Engineering is one of the most in-demand jobs across the globe today.</p>
              </div>
              <div className='width'>
                <p class="fw-semibold">Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
              </div>
            </div>
          </div>

          <div className='data'>
            <div className='analysis'>

            </div>
            <div class="mt-4 ">
              <h3 class="fw-bold">Data Science & Analysis</h3>
            </div>
            <div>
              <p class="fw-semibold">The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
            </div>
            <div className='width'>
              <p class="fw-semibold">Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
            </div>
          </div>
        </div>

        <div class="d-flex gap-5">
          <div className='uiux'>
            <div className='product'>

            </div>
            <div class="mt-4 ">
              <h3 class="fw-bold">UI/UX – Product Design</h3>
            </div>
            <div>
              <p class="fw-semibold">More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
            </div>
            <div className='width'>
              <p class="fw-semibold">Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
            </div>
          </div>

          <div className='digital'>
            <div className='literacy'>

            </div>
            <div class="mt-4 ">
              <h3 class="fw-bold">Digital Literacy</h3>
            </div>
            <div>
              <p class="fw-semibold">This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
            </div>
            <div className='width'>
              <p class="fw-semibold">Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section four */}
      <section className='four'>
        <div className='alumni'>
          <h3>Our alumni work at world-class companies around the world including</h3>
        </div>
        <div className='justify mt-5'>
          <div className='google'>
            <img src={googles} alt="" />
          </div>
          <div className='google'>
            <img src={inter} alt="" />
          </div>
          <div className='google'>
            <img src={andela} alt="" />
          </div>
          <div className='google'>
            <img src={micro} alt="" />
          </div>
          <div className='google'>
            <img src={pay} alt="" />
          </div>
          <div className='google'>
            <img src={part} alt="" />
          </div>
          <div className='google'>
            <img src={wema} alt="" />
          </div>
          <div className='google'>
            <img src={clan} alt="" />
          </div>
          <div className='google'>
            <img src={edozzier} alt="" />
          </div>
          <div className='google'>
            <img src={monie} alt="" />
          </div>
          <div className='google'>
            <img src={army} alt="" />
          </div>
          <div className='google'>
            <img src={aella} alt="" />
          </div>
        </div>
      </section>

      {/* Section five */}
      <section className='five'>
        <div class='d-flex  gap-5 justify-content-center mt-5'>
          <div className='scale'>
            <img src={scaled} alt="" />
          </div>
          <div className='tour'>
            <h1>Take a Tour</h1>
            <div>
              <p class='fw-semibold'>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
            </div>
            <div>
              <button class='btn btn-primary fw-bold'>Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section six */}
      <section className='six'>
        <div className='read'>
          <h1>Testimonials</h1>
          <p>Read what our current students and alumni have to say about their SQI experience.</p>
        </div>
        <div class='review  d-flex gap-3 align-items-center'>
            <div class='test'>
              <div className='school'>
                <img src={laptop} alt="" />
              </div>
            </div>
            <div class='test'>

            </div>
            <div class='test'>

            </div>
        </div>
      </section>

      {/* Section seven */}
    </div>
  );
}

export default App;
