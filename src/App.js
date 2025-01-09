import './App.css';
import icon from './images/sqi-removebg-preview.png'

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
    </div>
  );
}

export default App;
