import PropTypes from "prop-types";
import defaultAvatar from '../default.svg';

const Profile = ({ avatar, name, tag, location, stats }) => (
    <div className="profile">
        <div className="description">
            <img
            src={avatar} 
            width="100px"
            alt="User avatar"
            className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
            </li>
            <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
            </li>
            <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultAvatar,
    // avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};
  
Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
    }),
};
export default Profile;