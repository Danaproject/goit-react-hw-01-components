const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="Friend avatar" width="48" />
        <p className="name">{name}</p>
    </li>
);

export default FriendListItem;