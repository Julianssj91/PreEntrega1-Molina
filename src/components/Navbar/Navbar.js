
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container mx-5">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <p className="navbar__link">Inicio</p>
                    <p className="navbar__link">Catalogo</p>
                    <p className="navbar__link">FAQ</p>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}