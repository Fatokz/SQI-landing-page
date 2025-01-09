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

function Section4() {
    return(
        <div>
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
        </div>
    )
}

export default Section4