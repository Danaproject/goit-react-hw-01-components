import FriendListItem from './FriendListItem';
import PropTypes from "prop-types";
import defaultAvatar from '../default.svg';

const FriendList = ({ friends }) => (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            ))}
        </ul>
    );

FriendListItem.defaultProps = {
    avatar: defaultAvatar,
    // avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default FriendList;