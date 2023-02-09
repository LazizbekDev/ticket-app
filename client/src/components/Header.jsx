import { FaUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'logo'}>
                <Link to={'/'}>Bosh sahifa</Link>
            </div>
            <ul>
                <li>
                    <Link to={'/sign-in'}>
                        <FaSignInAlt /> Tizimga kirish
                    </Link>
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        <FaUser /> Ro'yxatdan o'tish
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;