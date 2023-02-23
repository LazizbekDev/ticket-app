import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, reset} from "../redux/tickets/ticketSlice";
import Loader from "../components/Loader";
import TicketItem from "../components/TicketItem";
import {useTranslation} from "react-i18next";

const Tickets = () => {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.ticket);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch])

    return (
        <>
            {isLoading && <Loader />}
            <h1>Tickets</h1>
            <div className={'tickets'}>
                <div className={'ticket-headings'}>
                    <div>{t('new_ticket.date')}</div>
                    <div>{t('new_ticket.product')}</div>
                    <div>{t('new_ticket.status')}</div>
                    <div></div>
                </div>
                {tickets.map((ticket, index) => (
                    <TicketItem
                        ticket={ticket}
                        action={t('button.view')}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};

export default Tickets;