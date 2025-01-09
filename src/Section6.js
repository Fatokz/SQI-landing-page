import laptop from './images/2021-07-31.jpg'

function Section6() {
    return(
        <div>
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
        </div>
    )
}

export default Section6