import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeTicket, getTicket} from "../redux/tickets/ticketSlice";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import Loader from "../components/Loader";
import {useTranslation} from "react-i18next";
import {getNotes} from "../redux/notes/noteSlice";
import NoteItem from "../components/NoteItem";
import Modal from "react-modal"
import {IoMdClose} from "react-icons/io";
import { ModalStyle } from "../components/CustomModal";

Modal.setAppElement('#root');
const Ticket = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { ticket, isLoading, isError, message } = useSelector((state) => state.ticket)
    const { notes, isLoading: noteLoad } = useSelector((state) => state.notes)
    const dispatch = useDispatch();
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

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

    if (isLoading || noteLoad) {
        return <Loader main={true} />
    }

    const onClose = () => {
        dispatch(closeTicket(id));
        toast.dark('Ticket closed')
        navigate('/chiptalarim')
    }

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const submitNote = async (e) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget);
        const note = formDate.get('noteText');
        console.log(note)
        closeModal();
    }

    return (
        <div className={'ticket-page'}>
            <header className={'ticket-header'}>
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

                <h2>Notes: </h2>
            </header>

            {ticket.status !== 'closed' && (
                <button onClick={openModal} className={'btn'}>Add notes</button>
            )}

             <Modal
                 style={ModalStyle(20)}
                 onRequestClose={closeModal}
                 contentLable={"Add note"}
                 isOpen={isOpen}>
                 <h2>Add Note</h2>
                 <button className={'btn btn-close'} onClick={closeModal}><IoMdClose /></button>

                 <form onSubmit={submitNote}>
                     <div className={'form-group'}>
                         <textarea
                            className={'form-control'}
                             name={'noteText'}
                             id={'noteText'}
                             placeholder={'Note text'}
                         ></textarea>
                     </div>

                     <div className={'form-group'}>
                         <button className={'btn'} type={'submit'}>Submit</button>
                     </div>
                 </form>
             </Modal>

            {notes.map((note, index) => (
                <NoteItem note={note} key={index} />
            ))}

            {ticket.status !== 'closed' && (
                <button onClick={onClose} className={'btn btn-danger btn-block'}>Close track</button>
            )}
        </div>
    );
};

export default Ticket;