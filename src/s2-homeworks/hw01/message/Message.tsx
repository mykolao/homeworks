import React from 'react';
import s from './Message.module.css';
import { MessageType } from '../HW1';

// нужно создать правильный тип вместо any
export type Props = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: Props) => {
  const {
    message: { id, message, user },
  } = props;

  const { name, avatar } = user;

  const { text, time } = message;

  return (
    <div id={'hw1-message-' + id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={'hw1-avatar-' + id}
          // создаёт студент
          alt='avatar'
          src={avatar}
          //
        />
        <div className={s.text}>
          <div id={'hw1-name-' + id} className={s.name}>
            {/*создаёт студент*/}
            {name}
            {/**/}
          </div>
          <pre id={'hw1-text-' + id} className={s.messageText}>
            {/*создаёт студент*/}
            {text}
            {/**/}
          </pre>
        </div>
      </div>
      <div id={'hw1-time-' + id} className={s.time}>
        {/*создаёт студент*/}
        {time}
        {/**/}
      </div>
    </div>
  );
};

export default Message;
