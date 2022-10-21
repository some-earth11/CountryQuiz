import './Footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';

const Footer = () => {
    return (  
        <div className='footer'>
            <div className="footertext">
                Made with <FavoriteIcon sx={{ fontSize: 18 }}/> and <CoffeeIcon/> by SOMEEARTH
            </div>
        </div>
    );
}
 
export default Footer;