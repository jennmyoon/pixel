import { Link, useLocation } from "react-router-dom"; 
import { useModal } from "./ModalContext.js"; 



const Navbar= ({infoButton}) =>{
    const location = useLocation(); 
    console.log(location.pathname)

    const styleNav = {
       color: location.pathname === '/gallery' ? 'white' :'#950c41',
    }; 

    const {openModal} = useModal(); 

    const openOnNav = () => {
        console.log('clicked');
        openModal(); 
    }



    
    
    return(
        <div id="nav-wrapper">
            {/* <div className="logo">
                P!XL
            </div> */}
             <div className="logo">
                <Link to="/" className="logo-link">P!XL</Link>
            </div>
            <div className="nav-right" style={styleNav}>
                <Link to="/"  className="draw-nav" style={styleNav}>draw</Link>
                <Link to="/gallery" className="gallery-nav" style={styleNav}>gallery</Link>
                <div className="modalbtn">
                    <button className="navBtn" onClick={openOnNav}>
                        <img src ={infoButton} className="info-button"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 