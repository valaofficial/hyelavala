import './styles.css'

export default function ProjectCard() {
  return (
    <div id="ProjectCard">
        <div className='project-details'>
            <div className='project-info' style={{color: '#ffffff'}}>
                <div className='project-name'>Project One</div>
                <div className='project-desc'>Description for project Description for project Description for project Description for project </div>
                <div className='project-tags'>
                  <div>Web</div>
                  <div>Web Component</div>
                </div>
            </div>
            <div className='project-details-btn'>
                <img src='/images/icons/arrow.png' alt='Arrow'/>
            </div>
        </div>
        
        <img className='project-image' src='/images/wall.jpg' alt='Project'/>
    </div>
  );
}

