import PropTypes from 'prop-types';
import styles from './Badge.module.scss'

type TBadgeParams = {
    status: string;
}

function Badge({status}: TBadgeParams){
    return (
        <div className={styles.badge}>
        <div className={styles[status]}>{status}</div>
        </div>
    )
}

Badge.propTypes = {
    status: PropTypes.oneOf(['rejected', 'waiting', 'approved']).isRequired
  };

export default Badge