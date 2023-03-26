import product1 from './image/product-cover-63.png'
import product2 from './image/product-cover-64.png'
import product3 from './image/product-cover-65.png'
import product4 from './image/product-cover-66.png';
import tag from './image/tag.png';
import vector1 from './image/Vectorr.png';
import vector from './image/Vector1.png';
import vector2 from './image/Vectorlr.png';
import Frame from './image/Frame4.png';
import Framer from './image/Framer.png';
import coolicon from './image/coolicon.png';
import vecter from './image/Vectoiuyr.png';
import Vector from "./image/Vector.png";

const Education=() =>{
    return(
        <section className="education mt-5 justify-content-center container-fluid">
            <div>
                <a href="#">
                    <button type='button' className="btnedu ps-5 mb-5 ms-5" >
                        Practice Advice
                    </button>
                </a>
                <h1 className='w-50 ps-5 mb-5 ms-5 bold'>Make Online Education accessible.</h1>
                <p className='w-50 ps-5 mb-5 ms-5'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className="row product1 text-center justify-content-center">
                <div className="col-lg-2 col-md-6 col-sm-12 mb-5">
                    <img src={product4} className="sale " />
                    <img src={tag} className="tag " />
                    <img src={vector} className="panie p-1" />
                    <img src={vector2}  className="vu p-1" />
                    <img src={vector1} className="ceur p-1" />
                    <div className="row">
                        <div className="col-4">
                        <h6 className='text-primary '>English</h6>
                        </div>
                        <div className="col-4">
                        <img src={Frame}/>
                        </div>
                    </div>
                    <h5 className='text-start py-2'>Graphic Design</h5>
                    <p className='text-start pt-3'>We focus onergonomics <br /> and meeting you....</p>
                    <div className="row">
                        <div className="col-1">
                        <img src={Framer} className='text-start' />
                        </div>
                        <div className="col-6">
                        <p className=' fw-bold'>15 sales</p>
                        </div>
                    </div>
                    <p className='text-start'>$16.48 <span className='text-success'>$6.48</span></p>
                    <div className="row ">
                        <div className="col-3">
                            <div className="row ">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1 ">
                                <p className=''>Pro...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row ">
                                <div className="col-1">
                                <img src={vecter} />
                                </div>
                                <div className="col-1">
                                <p><span className='les '>64Les...</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1">
                                <p>28hr...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='boutton'>
                    <a href="#">
                <button className=' text-white morle text-start p-3 mb-5 text-uppercase'>Leurn More
                <img src={Vector} className=" une" />
                </button>
               </a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 mx-4 ">
                    <img src={product3} />
                    {/* <img src={product4} className="sale1"/> */}
                    <img src={tag} className="tag" />
                    <img src={vector} className="panie p-1" />
                    <img src={vector2}  className="vu p-1" />
                    <img src={vector1} className="ceur p-1" />
                    <div className="row">
                        <div className="col-4">
                        <h6 className='text-primary'>English</h6>
                        </div>
                        <div className="col-4">
                        <img src={Frame}/>
                        </div>
                    </div>
                    <h5 className='text-start '>Graphic Design</h5>
                    <p className='text-start pt-4'>We focus onergonomics <br /> and meeting you....</p>
                    <div className="row">
                        <div className="col-1">
                        <img src={Framer} className='text-start' />
                        </div>
                        <div className="col-6">
                        <p className='fw-bold'>15 sales</p>
                        </div>
                    </div>
                    <p className='text-start'>$16.48 <span className='text-success'>$6.48</span></p>
                    <div className="row g-0">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-2">
                                <p>Pro...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-1">
                                <img src={vecter} />
                                </div>
                                <div className="col-1">
                                <p><span className='les'>64Les...</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 g-0">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-4">
                                <p>28hr...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='boutton mb-5'>
                        <a href="#">
                        <button className=' text-white morle text-start p-3 text-uppercase'>Leurn More
                        <img src={Vector}  />
                    </button>
                        </a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 ">
                    <img src={product1} />
                    <img src={tag} className="tag" />
                    <img src={vector} className="panie p-1" />
                    <img src={vector2}  className="vu p-1" />
                    <img src={vector1} className="ceur p-1" />
                    <div className="row">
                        <div className="col-4">
                        <h6 className='text-primary'>English</h6>
                        </div>
                        <div className="col-4">
                        <img src={Frame}/>
                        </div>
                    </div>
                    <h5 className='text-start '>Graphic Design</h5>
                    <p className='text-start pt-4'>We focus onergonomics <br /> and meeting you....</p>
                    <div className="row">
                        <div className="col-1">
                        <img src={Framer} className='text-start' />
                        </div>
                        <div className="col-6">
                        <p className='fw-bold'>15 sales</p>
                        </div>
                    </div>
                    <p className='text-start '>$16.48 <span className='text-success'>$6.48</span></p>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1">
                                <p>Pro...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={vecter} />
                                </div>
                                <div className="col-1">
                                <p><span className='les'>64Les...</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1">
                                <p>28hr...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='boutton'>
                    <button className=' text-white morle text-start p-3 text-uppercase'>Leurn More
                        <img src={Vector}  />
                    </button>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 ms-4">
                    <img src={product2} />
                    <img src={tag} className="tag" />
                    <img src={vector} className="panie p-1" />
                    <img src={vector2}  className="vu p-1" />
                    <img src={vector1} className="ceur p-1" />
                    <div className="row">
                        <div className="col-4">
                        <h6 className='text-primary'>English</h6>
                        </div>
                        <div className="col-4">
                        <img src={Frame}/>
                        </div>
                    </div>
                    <h5 className='text-start '>Graphic Design</h5>
                    <p className='text-start pt-4'>We focus onergonomics <br /> and meeting you....</p>
                    <div className="row">
                        <div className="col-1">
                        <img src={Framer} className='text-start' />
                        </div>
                        <div className="col-6">
                        <p className='fw-bold'>15 sales</p>
                        </div>
                    </div>
                    <p className='text-start '>$16.48 <span className='text-success'>$6.48</span></p>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1">
                                <p>Pro...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={vecter} />
                                </div>
                                <div className="col-1">
                                <p><span className='les'>64Les...</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-1">
                                <img src={coolicon} />
                                </div>
                                <div className="col-1">
                                <p>28hr...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='boutton'>
                    <button className=' text-white morle p-3 text-uppercase'>Leurn More
                        <img src={Vector}  />
                    </button>
                    </div>
                    
                </div>
              
            </div>
        </section>
    )
}
export default Education;