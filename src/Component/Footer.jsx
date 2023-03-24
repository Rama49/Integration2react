import facebook from "./image/facebook.png"
import Instagram from "./image/instagram.png"
import twiter from "./image/twiter.png"
const Footer = () =>{
    return(
        <div className="row footer text-white py-5 bold mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <h1>Get in touch</h1>
                <p>the quick fox jumps over the lazy dog</p>
                <div className="row">
                   <div className="col-2">
                    <img src={facebook} />
                   </div>
                   <div className="col-2">
                    <img src={Instagram} />
                   </div>
                   <div className="col-2">
                    <img src={twiter} />
                   </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ">
                <h1>Company Info</h1>
                <a href="#"><p className="us">About Us</p></a>
                <a href="#"><p className="us">Carrier</p></a>
                <a href="#"><p className="us">We are hiring</p></a>
                <a href="#"><p className="us">Blog</p></a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <h1>Feature</h1>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live chat</p>
                <p>Unlimited Support</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <h1>Ressources</h1>
                <p>IOS & Android</p>
                <p>Whatch a demo</p>
                <p>Costumers</p>
                <p>API</p>
            </div>
        </div>
    )
}
export default Footer;