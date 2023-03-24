import  { Button, Container, Nav, Navbar,  }from 'react-bootstrap';
import Vector from "./image/Vector.png";
import Coolicon from "./image/coolicon2.png";
import fleche from "./image/fleche.png";
import Coolicon2 from "./image/coolicon1.png";
    
    const NavBar = () => {
      return (
        <section className='bar mb-5 text-white'>
            <Navbar expand="md" className='navbar' >
          <Navbar.Brand href="/">
            <span className='text-white brand'> BrandName</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto mx-auto bare ">
               <Nav.Link href="#home"><span className='text-white me-2'>Home</span></Nav.Link>
               <Nav.Link href="#product"><span className='text-white me-2'>Product</span></Nav.Link>
               <Nav.Link href="#pricing" ><span className='text-white me-2'>Pricing</span></Nav.Link>
               <Nav.Link href="#contact" ><span className='text-white me-5'>Contact</span></Nav.Link>
               <div className="btnlien">
               <a href="#" >
                <button className='boutton text-white ms-5 me-5 login'>Login
                </button>
               </a>
               <a href="#">
                <button className='boutton text-white join p-2 px-3 text-uppercase'>Join us
                <img src={Vector} className="mx-2" />
                </button>
               </a>
               </div>
             </Nav>
          </Navbar.Collapse>

      </Navbar>
      <a href='#' className='mb-5 welcome text-center'><p>Welcome</p></a>
      <h1 className='mb-5 mt-5 text-center'>Selling on the <br /> internet like a pro</h1>
      <p className='mb-5 textnav text-center'>We know how large objects will act , but things on a <br /> small scale just do not act that way.</p>
               <div className='text-center'>
               <a href="#">
                <button className='boutton justify-content-center text-white p-2 px-4 me-2 quote'>Get quote now</button>
               </a>
               <a href="#">
                <button className='boutton p-2 px-4 learn justify-content-center'>Learn more</button>
               </a>
               </div>
               <div className="row mt-5 justify-content-center pb-5">
                   <div className='col-lg-2 col-md-2 col-sm-6 bg-white  m-5'>
                      <img src={Coolicon} className="mt-5 mb-4 img-fluid" />
                      <h5 className='text-dark'>training courses</h5>
                      <hr className='hr'/>
                      <p className='text-dark'>The gradual accumulation of information about atomic and small-scale behaviour... </p>
                   </div>
                   <div className='col-lg-2 col-md-2 col-sm-6 bg-white text-dark m-5'>
                      <img src={fleche} className="mt-5 mb-4 img-fluid"  />
                      <h5>2,769 online courses</h5>
                      <hr className='hr'/>
                      <p>The gradual accumulation of information about atomic and small-scale behaviour... </p>
                   </div>
                   <div className='col-lg-2 col-md-2 col-sm-6 bg-primary m-5'>
                      <img src={Coolicon2} className="mt-5 mb-4" />
                      <h5>Training courses</h5>
                      <hr className='hre img-fluid'/>
                      <p>The gradual accumulation of information about atomic and small-scale behaviour... </p>
                   </div>
               </div>


              


        </section>
      );
}
export default NavBar;
