import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import {useNavigate} from "react-router-dom";
import {createTicket, reset} from "../redux/tickets/ticketSlice";
import {toast} from "react-toastify";
import Loader from "../components/Loader";

const NewTicket = () => {
    const { t } = useTranslation();
    const { user } = useSelector((state) => state.auth);
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('games');
    const [description, setDescription] = useState('');
    const {
        isSuccess,
        isError,
        isLoading,
        message
    } = useSelector((state) => state.ticket);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            dispatch(reset());
            navigate('/');
        }

        dispatch(reset());

    }, [dispatch, isSuccess, isError, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createTicket({product, description}))
        console.log(product, description)
    }

    const userOption = [
        {
            value: 'IT',
            label: 'IT',
            disabled: 'IT' === product
        },
        {
            value: 'games',
            label: 'games',
            disabled: 'games' === product
        },
        {
            value: 'movies',
            label: 'movies',
            disabled: 'movies' === product
        },
        {
            value: 'fast food',
            label: 'fast food',
            disabled: 'fast food' === product
        },
    ]

    return (
        <>
            <section className={'heading'}>
                <h1>{t('new_ticket.h1')}</h1>
                <p>{t('new_ticket.p')}</p>
            </section>

            <section className={'form'}>
                <div className={'form-group'}>
                    <label htmlFor={'name'}>{t('new_ticket.name')}</label>
                    <input
                        value={name}
                        id={'name'}
                        disabled
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor={'email'}>{t('new_ticket.email')}</label>
                    <input
                        value={email}
                        id={'email'}
                        disabled
                    />
                </div>

                <form onSubmit={onSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor={'product'}>{t('new_ticket.product')}</label>
                        <Dropdown
                            isOptionDisabled={(opt) => opt.disabled}
                            options={userOption}
                            id={'product'}
                            value={product}
                            onChange={(e) => setProduct(e.value)}
                        />
                    </div>

                    {isLoading && <Loader />}

                    <div className={'form-group'}>
                        <label htmlFor={'description'}>{t('new_ticket.description')}</label>
                        <textarea
                            id={'description'}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className={'form-group'}>
                        <button type={'submit'} className={'btn btn-block'}>{t('button.submit')}</button>
                    </div>

                </form>
            </section>
        </>
    );
};

export default NewTicket;