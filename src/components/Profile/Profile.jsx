import PropTypes from "prop-types";
import defaultAvatar from '../assets/default.svg';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
    <div className={styles.profile}>
        <div className="description">
            <img
            src={avatar} 
            width="100px"
            alt="User avatar"
            className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
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