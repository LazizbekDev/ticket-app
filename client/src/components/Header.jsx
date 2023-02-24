import {FaUser, FaSignInAlt} from "react-icons/fa";
import {IoLanguage} from "react-icons/io5"
import { HiOutlineLogout } from "react-icons/hi";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import jsCookie from "js-cookie";
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {logout, reset} from "../redux/auth/authSlice";

const Header = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {user} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const options = [
        {
            value: 'uz',
            label: "O'Z",
            disabled: 'uz' === jsCookie.get('i18next')
        },
        {
            value: 'en',
            label: 'Eng',
            disabled: 'en' === jsCookie.get('i18next')
        }
    ]
    const {label} = options.find(op => op.value === 'uz')

    const loginOptions = [
        {
            value: '/sign-in',
            label: t('login'),
            disabled: '/sign-in' === pathname
        },
        {
            value: '/sign-up',
            label: t('signup'),
            disabled: '/sign-up' === pathname
        }
    ]

    const userOption = [
        {
            value: '/profile',
            label: (
                <span
                    className={'flex-center'}
                    style={{marginBottom: 0}}>
                    <FaUser /> {user?.name}
                </span>
            ),
            disabled: '/profile' === pathname
        },
        {
            value: 'logout',
            label: (
                <span
                    style={{marginBottom: 0}}
                    className={'flex-center'}>
                    <HiOutlineLogout /> {t('button.logout')}
                </span>
            ),
        }
    ]

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    const colourStyles = {
        option: (styles, {isDisabled, isFocused}) => {
            // const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isFocused ? "#000" : isDisabled && "#d0cccc",
                color: isFocused ? "#fff" : isDisabled ? "#313131" : "#000"
            };
        }
    };

    return (
        <header className={'header'}>
            <div className={'logo'}>
                <Link to={'/'}>Chipta</Link>
            </div>
            <ul>
                <li>
                    {user ?
                        <Dropdown
                            placeholder={<span style={{marginBottom: 0}}><FaUser /> {user.name}</span>}
                            isOptionDisabled={(opt) => opt.disabled}
                            options={userOption}
                            styles={colourStyles}
                            onChange={(e) => e.value === '/profile' ? navigate(e.value) : onLogout()}
                        /> : (
                        <Select
                            isSearchable={false}
                            placeholder={<span className={'flex-center'}>
                            <FaSignInAlt size={'1rem'}/> {t('login')}
                        </span>}
                            isOptionDisabled={(opt) => opt.disabled}
                            options={loginOptions}
                            styles={colourStyles}
                            onChange={(e) => navigate(e.value)}
                        />
                    )}
                </li>
                <li>

                    <Select
                        isSearchable={false}
                        placeholder={<span className={'flex-center'}>
                            <IoLanguage size={'1rem'}/> {"  " + label}
                        </span>}
                        isOptionDisabled={(opt) => opt.disabled}
                        options={options}
                        styles={colourStyles}
                        onChange={(e) => i18next.changeLanguage(e.value)}
                    />
                </li>
            </ul>
        </header>
    );
};

export default Header;