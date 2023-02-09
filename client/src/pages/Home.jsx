import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <section className={'heading'}>
                <h1>Sizga qanday yordam kerak?</h1>
                <p>quyidagi variantdan tanlang</p>
            </section>

            <Link to={'/yangi-chipta'} className={'btn btn-reverse btn-block'}>
                <FaQuestionCircle /> Yangi chipta yaratish
            </Link>
            <Link to={'/chiptalarim'} className={'btn btn-block'}>
                <FaTicketAlt /> Chiptalarimni ko'rish
            </Link>
        </>
    );
};

export default Home;