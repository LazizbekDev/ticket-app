import { FaUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'logo'}>
                <Link to={'/'}>Support Desk</Link>
            </div>
            <ul>
                <li>
                    <Link to={'/sign-in'}>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        <FaUser /> Sign Up
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;