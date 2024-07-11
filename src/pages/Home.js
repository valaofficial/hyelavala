import './styles.css'

export default function Home() {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <WorksSection/>
    </>
  );
}

function HeroSection() {
    return (
      <section id="HeroSection">
         <div>
          <img className='react-icon hero-icon' src='/images/icons/react.png' alt='ReactJs'/>
          <img className='css-icon hero-icon' src='/images/icons/css.png' alt='CSS'/>
          <img className='tailwind-icon hero-icon' src='/images/icons/tailwind.png' alt='Tailwind Css'/>
         </div>
         <div className='introduction text-center font-semibold'>
            <div className='name-intro text-4xl'>HI, I'M HYELAVALA </div>
            <div className='location-intro text-2xl'>A CREATIVE DEVELOPER BASED IN NIGERIA</div>
            <div className='services-intro text-lg'>
                DESIGN <span className='text-2xl'>|</span> WEB <span className='text-2xl'>|</span> MOBILE
            </div>
         </div>
         <div>
          <img className='js-icon hero-icon' src='/images/icons/js.png' alt='Javascript'/>
          <img className='figma-icon hero-icon' src='/images/icons/figma.png' alt='Figma'/>
          <img className='node-icon hero-icon' src='/images/icons/node.png' alt='NodeJs'/>
         </div>
      </section>
    );
  }

  function AboutSection() {
    return (
      <section id="AboutSection">
         <div className='about-info'>
            <div className='info-tagline'>
              <div className='info-name text-2xl font-semibold'>MAINA <span><img className='dev-icon' src='/images/icons/dev.png' alt='Developer'/></span> HYELAVALA</div>
              <div className='text-4xl w-2/3 font-bold'>Let's Make Some Magic Happen.</div>
            </div>
            <div className='information w-5/6'>
              <div className='text-xl font-bold text-justify mb-5'>
                Hello! My name is Hyelavala and I enjoy creating awesome user interfaces 
                using my skills, I started my journey in 2019 when i attended my first 
                Hackathon and fell in love with the joys of coding and building things
              </div>
              <div className='text-sm text-justify'>
                Since then I got my first internship at a Software development firm in 2021,
                worked as a Frontend Engineer for a while and worked on a lot of presonal and freelance
                projects
              </div>
            </div>
         </div>

         <div className='info-stats'>
            <div className='stats-years'>
              <div className='text-4xl font-bold'>4+</div>
              <div className='text-xs font-semibold'>YEARS OF EXPERIENCE</div>
            </div>
            <div className='stats-projects'>
              <div className='text-4xl font-bold'>8+</div>
              <div className='text-xs font-semibold'>PROJECTS WORKED ON</div>
            </div>
            {/* <div>
              <div>8</div>
              <div>CLIENTS SERVED</div>
            </div> */}
          </div>
      </section>
    );
  }

  function WorksSection() {
    return (
      <section id="WorksSection">
         
      </section>
    );
  }

