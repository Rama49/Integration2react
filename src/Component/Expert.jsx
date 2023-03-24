import testmonial1 from './image/testimonial1.png'
import testmonial2 from './image/testimonial2.png'
import etoile from './image/etoile.png'
const Expert = () => {
    return(
        <section className="expert text-center">
            <p className='vice'>Practice Advice</p>
            <h1>Our Experts Teacher</h1>
            <p>Problems trying to resolve the conflicts between the two major realmsof Classical
                physic: Newtonian mechanics.</p>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src={testmonial1} className="exper" />
                        <p>Slate helps you see how many more days <br /> you need to work to reach your financial <br /> goal for the month and year.</p>
                        <div className="row justify-content-center">
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                        </div>
                        <h1>Regina Miles</h1>
                        <h5>Designers</h5>

                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={testmonial2} className="exper" />
                        <p>Slate helps you see how many more days <br /> you need to work to reach your financial <br /> goal for the month and year.</p>
                        <div className="row justify-content-center">
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                            <div className="col-1">
                                <img src={etoile} />
                            </div>
                        </div>
                        <h1>Regina Miles</h1>
                        <h5>Designers</h5>

                    </div>
                </div>
        </section>
    )
}
export default Expert