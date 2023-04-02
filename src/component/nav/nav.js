import './nav.css'
function Nav() {
    return (
        <div className="nav">
        <div className="logo font-semibold"><a href="https://threed-git-main-vikrant465.vercel.app/"> Three D Car edit view</a></div>
        <div className="nav-link-middle font-semibold flex space-x-6">
            <div className="nav-link"> </div>
            <div className="nav-link">Home</div>
            <div className="nav-link"><a href="">Mahindra</a></div>
           
            <div className="nav-link"><a href="">toyota</a></div>
            <div className="nav-link"><a href="">Range rower</a></div>
            <div className="nav-link"><a href="">Honda</a></div>
        </div>

        <div className="nav-link-right flex space-x-10">
            <div className="right-link font-bold">Shop</div>
            <div className="right-link font-bold">Contact us</div>
            <div className="right-link font-bold"><a href="/">Futerustic Car</a></div>
        </div>
      </div>
    )
}
export default Nav;