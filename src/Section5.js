import scaled from './images/sddefault-removebg-preview.png'
function Section5() {
    return(
        <div>
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
        </div>
    )
}

export default Section5