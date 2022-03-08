import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import TitipBarang from './components/transaksi/TitipBarang';
import About from './components/About';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Link
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='container'>
        
        <div className='main-header-container'>
          <h1>Sistem Distribusi</h1>
          <Link to='/' className='nav-link'>Home</Link>
        </div>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Dashboard />
              </>
            } 
          />
          <Route path="/titip" element={<TitipBarang />} />
          <Route path="/about" element={<About />} />
        </Routes>


        {/* <Dashboard /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
