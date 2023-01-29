import scephtech from "../images/scephtech.png"


const NavBar = () =>{
    return(
        <div className="nav">
            <div className="navContainer">
                <div className="logo">
                    <img src={scephtech} alt="" style={{width:"250px"}} />
                </div>
                <ul className="navList">
                    <li><a href="#" className="btnStart">Start a Tour</a></li>
                    <li><a href="#" className="btnCreateAcct">Create an account</a></li>
                    <li><a href="#" className="btnLogin">Login</a></li>
                </ul>
            
            </div>

            <div>
            <ul className="lowerNav">
                <li><a href="#">Teach a peer</a></li>
                <li><a href="#">Explore learning options</a></li>
                <li><a href="#">learning resources</a></li>
                <li><a href="#">About<i class="fa fa-chevron-down"></i></a></li>
                <li><a href="#">Help<i class="fa fa-chevron-down"></i></a></li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar