import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Home = () => {

    const { t } = useTranslation();

    return (
        <>
            <section className={'heading'}>
                <h1>{t('yordam')}</h1>
                <p>{t('variant')}</p>
            </section>
            <Link to={'/yangi-chipta'} className={'btn btn-reverse btn-block'}>
                <FaQuestionCircle /> {t('home_b1')}
            </Link>

            <Link to={'/chiptalarim'} className={'btn btn-block'}>
                <FaTicketAlt /> {t('home_b2')}
            </Link>
        </>
    );
};

export default Home;