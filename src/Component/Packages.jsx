import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import photo from "./image/photo.png";
import none from "./image/none.png";
// import rect from ".image/rect.png";

const Packages =() => {
    return(
        <section className="package ">
            <div className="row my-5">
                <div className="col-lg-6 col-md-12 col-sm-12 p-5">
                    <hr  className="text-danger w-25" />
                    <h1 className="tiltepack w-50 ps-5 mb-5">Packages that are  aprodable </h1>
                    <p className="textpack w-75 ps-5">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics:  Newtonian mechanics</p>
                    <a href="#">
                        <button className="m-5 btnpack p-2">Learn More 
                            <img src={none} className="ps-3 "/>
                        </button>
                    </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={img2} className="img2" />
                    <img src={photo} />
                    <img src={img1} className="img2" />
                    {/* <img src={rect} /> */}
                </div>
            </div>
        </section>
    )
}
export default Packages;