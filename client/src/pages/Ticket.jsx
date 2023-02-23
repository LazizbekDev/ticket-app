import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTicket} from "../redux/tickets/ticketSlice";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import Loader from "../components/Loader";
import {useTranslation} from "react-i18next";

const Ticket = () => {
    const { ticket, isLoading, isError, message } = useSelector((state) => state.ticket)
    const dispatch = useDispatch();
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        if ( isError ) {
            toast.error(message)
        }

        dispatch(getTicket(id))
    }, [dispatch, isError, message, id])

    if (isError) {
        return <h3>Nimadir noto'g'ri bo'ldi</h3>
    }

    if (isLoading) {
        return <Loader main={true} />
    }

    return (
        <div className={'ticket-page'}>
            <div className={'ticket-header'}>
                <h2>
                    Chipta indefekatori: {ticket._id}

                    <span className={`status status-${ticket.status}`}>{t(`status.${ticket.status}`)}</span>
                </h2>

                <h3>
                    Topshirilgan sana: {new Date(ticket.createdAt).toLocaleString('en-US')}
                </h3>

                <hr />

                <div className={'ticket-desc'}>
                    <h3>Masalaning tavsifi</h3>
                    <p>{ticket.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;