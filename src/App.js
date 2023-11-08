import logo from './logo.svg';
import image from './mybook.jpg'
import BookData from './BookData';
import AboutStory from './AboutStory';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
        
        <strong> My favorite book is:</strong>
          <div>--------------------------------------</div>
          <BookData/>
        </p>
        <div> 
        <td><img src={image} alt="Your Image" /> &nbsp;&nbsp;&nbsp;</td>
        <AboutStory/>
        </div>
        <a
          className="App-link-red"
          href="https://www.amazon.com/Criminal-Minds-Sociopaths-Killers-Deviants/dp/0470636254"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Buy Now</strong>
        </a>
      </header>
    </div>
  );
}

export default App;
