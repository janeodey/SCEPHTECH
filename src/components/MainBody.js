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
                        
                </div>
                </div>
            </div>

            <section id="section1">
                <div className="para">
                    <h1>Begin a learning journey</h1> <br /> <br />
                    <p>By beginning a learning journey today, you can have access to free digital course resources and have also get the opportunity to upskill with more advanced courses and access top notch instructors, once you are ready!</p>
                </div> <br /> <br />
                <div className="imgs">
                    <img src={img1}alt="" />
                    <img src={img2}alt="" />
                    <img src={img3}alt="" />
                </div>
            </section>
        </div>
    )
}


export default MainBody