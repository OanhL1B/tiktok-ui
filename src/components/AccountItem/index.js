import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fc6b354591c8d0e52298cb865f15be01~c5_300x300.webp?x-expires=1668355200&x-signature=d%2BqCbzWC3XcTJQ2E4pL6OFYibW8%3D"
                alt="Lâm"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Cao Văn Lâm</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>caovanLam</span>
            </div>
        </div>
    );
}

export default AccountItem;
