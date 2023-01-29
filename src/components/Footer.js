import scephtech from "../images/scephtech.png"
const Footer = () => {
    return ( 
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3><img src={scephtech} alt="" style={{width:"300px"}}/></h3>
                    
                    <a href="#" style={{marginTop:"-10px"}}><i className="fa fa-facebook" style={{padding:"30px", fontSize:"20px"}}></i><i className="fa fa-instagram" style={{padding:"30px", fontSize:"20px"}}></i><i className="fa fa-twitter" style={{padding:"30px", fontSize:"20px"}}></i></a>
                    
                </div>
                
                <div className="box">
                    <h3>Community</h3>
                    <a href="#">Join a Learning Circle</a>
                    <a href="#">Facilitate a Learning Circle</a>
                    <a href="#">Start a Team</a>
                    <a href="#">Discord</a>
                </div>

                <div className="box">
                    <h3>Tech Trends</h3>
                    <a href="#">Blog</a>
                    <a href="#">Services</a>
                    <a href="#">Jobs</a>
                    <a href="#">Help</a>
                    <a href="#">Learn More</a>
                </div>

                <div className="box">
                    <h3>About Us</h3>
                    <a href="#">Road Maps</a>
                    <a href="#">Creators</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact us</a>
                </div>

                <div className="credit donate">
                    <a href="#" style={{color:"orange"}}>Donate</a> <br />
                    <input type="text" />
                    <button>Send</button>
                </div>
            </div>
            <div className="credit">&copy; ScephTech 2023</div>
        </section>
     );
}
 
export default Footer;