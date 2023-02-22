import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, reset} from "../redux/tickets/ticketSlice";
import Loader from "../components/Loader";
import TicketItem from "../components/TicketItem";

const Tickets = () => {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.ticket);
    const dispatch = useDispatch();

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
                    <div>date</div>
                    <div>Product</div>
                    <div>Status</div>
                    <div></div>
                </div>
                {tickets.map((ticket, index) => (
                    <TicketItem ticket={ticket} key={index} />
                ))}
            </div>
        </>
    );
};

export default Tickets;