import img1 from "../images/profile1.jpg"
import img2 from "../images/profile2.jpg"
import img3 from "../images/profile3.jpg"

const MainBody = () =>{
    return(
        <div className="sections">
            <div className="overlay">
                <div className="overlay-background">
                <div className="body-content">
                        <h1>WELCOME TO SCEPHTECH</h1>
                        <p className="indented">... your reliable space for tech solutions</p>
                        <br />
                        
                        
                </div>
                </div>
            </div>

            <section id="section1">
                <div className="para">
                    <h1>Begin a learning journey</h1> <br /> <br />
                    <p>By beginning a learning journey today, you can have access to free digital course resources and have also get the opportunity to upskill with more advanced courses and access top notch instructors, once you are ready!</p>

                        <br /><br />
                    <a href="#" className="btnCreateAcct btnCreate">Create a free account</a>
                </div> <br /> <br />
                <div className="imgs">
                    <h2>Our Solutions</h2>
                    <img src={img1}alt="" className="box img1" />
                    
                    <img src={img2}alt="" className="box img1"/>
                    <img src={img3}alt="" className="box img1"/>
                </div>

            </section>

            <section id="section1">
                <div className="stap">
                    <div className="center-stap">
                        <h1>S-TAP</h1>
                        <p>S-TAP gives kids and teens the opportunity to learn tech skills and also teach this Tech skills to their peers, sing our E-Learning platform, for sustainable learning while bridging the digital divide/gap plaguing our community</p>

                        <a href="#">MORE ABOUT S-TAP</a>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default MainBody