import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3" >
    <div className="row">
      <div className="col-md-4">
      <NewsItem des="This is des" title="News1"/>
      </div>
      <div className="col-md-4">
      <NewsItem des="This is des" title="News2"/>
      </div>
      <div className="col-md-4">
      <NewsItem des="This is des" title="News3"/>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
