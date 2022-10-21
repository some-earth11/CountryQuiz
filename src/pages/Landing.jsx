import Navbar from '../components/Navbar';
import '../styles/Landing.css'

const Landing = () => {
    return (  
        <div className="landing">
            <div className="main">
                <Navbar/>
                <div className="content">
                    <div className="left">
                        STUFF
                    </div>
                    <div className="right">
                        <img src="earthcartoonicon_1.png" alt="earth"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Landing;