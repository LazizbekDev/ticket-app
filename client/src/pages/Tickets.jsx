import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets, reset} from "../redux/tickets/ticketSlice";
import Loader from "../components/Loader";

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
        <div>
            <h1>Tickets</h1>
            {isLoading && <Loader />}
        </div>
    );
};

export default Tickets;