import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const TicketItem = ({ticket, action}) => {
    const { t } = useTranslation();
    return (
        <div className={'ticket'}>
            <div>
                {new Date(ticket.createdAt).toLocaleString('uz-Latn-UZ')}
            </div>
            <div>{ticket.product}</div>
            <div className={`status status-${ticket.status}`}>
                {t(`status.${ticket.status}`)}
            </div>
            <Link to={`/chipta/${ticket._id}`} className={'btn btn-reverse btn-sm'}>
                {action}
            </Link>
        </div>
    );
};

export default TicketItem;