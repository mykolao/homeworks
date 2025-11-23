import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

const EMPTY_NAME_ERROR = 'Ошибка! Введите имя!';

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void,
) => {
  if (name.trim().length) {
    setName('');
    addUserCallback(name);
  } else {
    setError(EMPTY_NAME_ERROR);
  }
};

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  if (!name.trim().length) {
    setError(EMPTY_NAME_ERROR);
  }
};

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
  if (e.key === 'Enter') {
    addUser();
  }
};

const GreetingContainer = (props: GreetingContainerPropsType) => {
  const { users, addUserCallback } = props;

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    setName(name);

    error && setError('');
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = totalUsers ? users[totalUsers - 1].name : undefined;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
