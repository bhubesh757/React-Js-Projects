import logo from './logo.svg';
import './App.css';
import Home from './Airbnb-clone/Home';
import Header from './Airbnb-clone/Header';
import Footer from './Airbnb-clone/Footer'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Searchpage from './Airbnb-clone/Searchpage';

function App() {
    return ( 
        <div>
        <Router>
                <Header></Header>
            <Switch>

                <Route path = '/search101' >
                <Searchpage></Searchpage>
                </Route>

                <Route path = '/' >
                <Home></Home>
                </Route>
                
            </Switch>
            <Footer></Footer>
        </Router>
        </div>
      
    );
}

export default App;
