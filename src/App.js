
import './App.css';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Feature from './Components/Feature';
import Header from './Components/Header';
import LowerHeader from './Components/LowerHeader';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
     <Header/>
     <LowerHeader/>
     <Banner/>
     <Feature/>
     <Category/>
     <Product/>
    </div>
  );
}

export default App;
