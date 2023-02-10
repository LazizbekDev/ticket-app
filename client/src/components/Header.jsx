import { FaUser, FaSignInAlt } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5"
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import jsCookie from "js-cookie";
import Select from 'react-select'

const Header = () => {
    const { t } = useTranslation();
    console.log(jsCookie.get('i18next'))
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

    const { label } = options.find(op => op.value === 'uz')

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // const color = chroma(data.color);
            console.log({ data, isDisabled, isFocused, isSelected });
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

                    <Select
                        isSearchable={false}
                        placeholder={<span className={'flex-center'}>
                            <IoLanguage size={'1rem'} /> {"  " + label}
                        </span>}
                        defaultValue={jsCookie.get('i18next')}
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