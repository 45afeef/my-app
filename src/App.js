import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import Header from './Components/Header';
import SplashScreen from './Components/SplashScreen';
import SectionOne from './Components/Sections/One';
import ImageSection from './Components/Sections/ImageSection';
import OurWorks from './Components/Sections/OurWorks';
import Team from './Components/Sections/Team';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <SplashScreen />

      <Header />

      <ImageSlider auto />

      <SectionOne />

      <ImageSection />

      <OurWorks />

      <ImageSection />

      <Team/>

      <Footer/>

    </div>
  );
}

export default App;
