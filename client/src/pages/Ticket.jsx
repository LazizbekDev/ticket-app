import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTicket} from "../redux/tickets/ticketSlice";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import Loader from "../components/Loader";
import {useTranslation} from "react-i18next";
import {getNotes} from "../redux/notes/noteSlice";

const Ticket = () => {
    const { ticket, isLoading, isError, message } = useSelector((state) => state.ticket)
    const { notes } = useSelector((state) => state.notes)
    const dispatch = useDispatch();
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        if ( isError ) {
            toast.error(message)
        }

        dispatch(getTicket(id))
        dispatch(getNotes(id))
    }, [dispatch, isError, message, id])

    if (isError) {
        return <h3>{t('msg.error')}</h3>
    }

    if (isLoading) {
        return <Loader main={true} />
    }

    return (
        <div className={'ticket-page'}>
            <div className={'ticket-header'}>
                <h2>
                    {t('msg.ticket_id')}: {ticket._id}

                    <span className={`status status-${ticket.status}`}>{t(`status.${ticket.status}`)}</span>
                </h2>

                <h3>
                    {t('msg.date')} {new Date(ticket.createdAt).toLocaleString('en-US')}
                </h3>

                <hr />

                <div className={'ticket-desc'}>
                    <h3>{t('msg.issue')}</h3>
                    <p>{ticket.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;