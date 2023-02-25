import React from 'react';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const NoteItem = ({ note }) => {
    const {user} = useSelector((state) => state.auth);
    const { t } = useTranslation();

    return (
        <div className={'note'} style={{
            background: note.isStaff ? 'rgba(0,0,0,.7)' : '#fff',
            color: note.isStaff ? '#fff' : '#000',
        }}>
            <h4>{t('msg.noteBy', {
            name: note.isStaff ? "Staff" : user.name
            })}</h4>
            <p>{note.text}</p>
            <div className={'note-date'}>
                {new Date(note.createdAt).toLocaleString('en-US')}
            </div>
        </div>
    );
};

export default NoteItem;