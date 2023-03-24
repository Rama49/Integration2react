import NavBar from './Component/Navbar';
import Packages from './Component/Packages';
import Education from './Component/Education';
import Expert from './Component/Expert';
import Product from './Component/Product';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className='container-fluid'>
       <NavBar />
       <Packages />
       <Education />
       <Expert />
       <Product />
       <Footer />
    </section>
  )
}

export default App;
