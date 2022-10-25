import './Footer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';

const Footer = () => {
    return (  
        <div className='footer'>
            <div className="footertext">
                Made with <FavoriteIcon sx={{ fontSize: 13 }}/> and <CoffeeIcon sx={{ fontSize: 15 }}/> by
                <a href="https://github.com/some-earth11" target="_blank" rel="noreferrer">some-earth</a>
            </div>
        </div>
    );
}
 
export default Footer;