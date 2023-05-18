import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('wrapper')}>
            {/* 1 avatar */}
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/324746932_902393510894675_7684933743297680854_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z3UABklf3rYAX9vGyqS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDY0nZagJbUOWEc48Fs34VS2LIh3cMx7HkOD0a_seQWIQ&oe=63DA0CB7"
                alt="info"
            />

            {/* 2. content */}
            <div className={cx('user_information')}>
                {/* 2.1  content */}
                <div className={cx('content')}> 123 meo meo</div>

                {/* 2.2 Video */}
                <div className={cx('video')}></div>
            </div>
        </div>
    );
}

export default Video;
