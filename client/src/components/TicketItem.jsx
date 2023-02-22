import React from 'react';
import {Link} from "react-router-dom";

const TicketItem = ({ticket}) => {
    return (
        <div className={'ticket'}>
            <div>
                {new Date(ticket.createdAt).toLocaleString('uz-Latn-UZ')}
            </div>
            <div>{ticket.product}</div>
            <div className={`status status-${ticket.status === 'yangi' ? 'new' : 'in-progress'}`}>
                {ticket.status}
            </div>
            <Link to={`/chipta/${ticket._id}`} className={'btn btn-reverse btn-sm'}>
                View
            </Link>
        </div>
    );
};

export default TicketItem;