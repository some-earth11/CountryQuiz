import './Navbar.css'

const Navbar = () => {
    return (  
        <div className='nav'>
            <div className="leftnav">
                <div className="title">
                    GeoUp
                </div>
            </div>
            <div className="rightnav">
                <button type="button" class="btn btn-success">About</button>
                <button type="button" class="btn btn-danger">Rules</button> 
            </div>         
        </div>
    );
}
 
export default Navbar;