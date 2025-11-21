import React from 'react';
import s from './FriendMessage.module.css';
import { MessageType } from '../HW1';

type Props = {
  message: MessageType;
};

const FriendMessage = (props: Props) => {
  const { id, message, user } = props.message;

  const { name, avatar } = user;
  const { text, time } = message;

  return (
    <div id={'hw1-friend-message-' + id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img id={'hw1-friend-avatar-' + id} alt='avatar' src={avatar} />
        <div className={s.friendText}>
          <div id={'hw1-friend-name-' + id} className={s.friendName}>
            {name}
          </div>
          <pre id={'hw1-friend-text-' + id} className={s.friendMessageText}>
            {text}
          </pre>
        </div>
      </div>
      <div id={'hw1-friend-time-' + id} className={s.friendTime}>
        {time}
      </div>
    </div>
  );
};

export default FriendMessage;
