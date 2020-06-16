import React from 'react';
// import PropTypes from 'prop-types';
import styles from './friends.module.css';


const { item, green, red } = styles;

const FriendsList = ({ friends }) => {
  return friends.length !== 0 ? (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} data={friend} />
      ))}
    </ul>
  ) : (
    <Close/>
  );
};

const FriendListItem = ({ data: { name, isOnline, avatar } }) => {
  return (
    <li className={item}>
      <span className={isOnline ? green : red}></span>
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const inmage =
  'https://lh3.googleusercontent.com/OTEgbg4xoXbMe6_IKlXmPMkKlNQPHon7tU_2jae1RVTG5Dk0XY8qohKObUqC-3TcnzvCqg=s170';

const Close = () => <img src={inmage} alt="close" />;

export default FriendsList;
