import './styles.css'

export default function Navigation() {
  return (
    <div id="NavigationBar">
        <div className="nav_brand text-2xl font-black">
            Hyelavala<span className='text-4xl'>.</span>
        </div>

        <div className="nav_links">
            <div className='font-semibold'>Home</div>
            <div className='font-semibold'>Works</div>
            <div className='font-semibold'>About</div>
            <div className='font-semibold'>Services</div>
        </div>

        <div className="nav_button">
            <div className='font-semibold'>Let's Build</div>
        </div>
    </div>
  );
}

