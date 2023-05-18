import classNames from 'classnames/bind';
import Video from '~/components/Video';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    // handle func

    return (
        <div className={cx('wrapper')}>
            {/* Conponent Video */}
            <Video />
            <h1>Vũ thị Hồng oanh</h1>
        </div>
    );
}

export default Home;
