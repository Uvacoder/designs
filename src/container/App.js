import ImageGallery from "../components/ImageGallery/ImageGallery";
import  Nav from '../components/Nav/Nav'
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <Nav/>
      <div className="images">
      <ImageGallery/>
      <Footer/>
      </div>
     </>
   
    
  );
}

export default App;
