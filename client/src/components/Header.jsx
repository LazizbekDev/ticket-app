import { FaUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const Header = () => {
    const { t } = useTranslation();
    return (
        <header className={'header'}>
            <div className={'logo'}>
                <Link to={'/'}>Chipta</Link>
            </div>
            <ul>
                <li>
                    <Link to={'/sign-in'}>
                        <FaSignInAlt /> {t('login')}
                    </Link>
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        <FaUser /> {t('signup')}
                    </Link>
                </li>
                <li>
                    <select
                        style={{marginBottom: 0}}
                        className={'btn btn-block'}
                        onChange={(e) => i18next.changeLanguage(e.target.value)}>
                        <option value={'uz'}>UZ</option>
                        <option value={'en'}>En</option>
                    </select>
                </li>
            </ul>
        </header>
    );
};

export default Header;