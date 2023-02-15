import { useState } from 'react';
import { useSelector } from "react-redux";
import {useTranslation} from "react-i18next";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

const NewTicket = () => {
    const { t } = useTranslation();
    const { user } = useSelector((state) => state.auth);
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('games');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
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

                    <div className={'form-group'}>
                        <label htmlFor={'description'}>{t('new_ticket.description')}</label>
                        <textarea
                            id={'description'}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className={'form-group'}>
                        <buttun className={'btn btn-block'}>{t('button.submit')}</buttun>
                    </div>

                </form>
            </section>
        </>
    );
};

export default NewTicket;