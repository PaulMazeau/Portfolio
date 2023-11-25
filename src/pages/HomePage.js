import Header from '../component/header';
import '../styles/homepage.css';
import homeImage from '../assets/gifs/home_image.gif';


function HomePage() {
  return (
    <div className="App">
      <section>
        <div className="section">
        <img src={homeImage} alt="maison calme" className='home_image' />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
