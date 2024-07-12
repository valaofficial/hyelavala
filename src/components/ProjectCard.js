import './styles.css'

export default function ProjectCard() {
  return (
    <div id="ProjectCard">
        <div className='project-details'>
            <div>
                <div className='project-name'>Project One</div>
                <div className='project-desc'>Description for project one</div>
            </div>
            <div className='project-details-btn'>
                <img src='/images/icons/arrow.png' alt='Arrow'/>
            </div>
        </div>
    </div>
  );
}

