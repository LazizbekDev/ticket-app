import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
const Home = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className={'heading'}>
                <h1>{t('yordam')}</h1>
                <p>{t('variant')}</p>
            </section>
            <Link to={'/yangi-chipta'} className={'btn btn-reverse btn-block'}>
                <FaQuestionCircle /> Yangi chipta yaratish
            </Link>

            <select onChange={(e) => i18next.changeLanguage(e.target.value)}>
                <option value={'uz'}>UZ</option>
                <option value={'en'}>En</option>
            </select>

            <Link to={'/chiptalarim'} className={'btn btn-block'}>
                <FaTicketAlt /> Chiptalarimni ko'rish
            </Link>
        </>
    );
};

export default Home;