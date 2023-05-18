import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    HashtagIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// conponent Sidlebar
function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await userService.getSuggested(1, 5);
                setSuggestedUsers(result);
            } else {
                const result = await userService.getSuggested(1, 16);
                setSuggestedUsers(result);
            }
        };
        fetchAPI();
    }, [seeAll]);

    return (
        <aside className={cx('wrapper')}>
            {/* Menu: For you following Live */}
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {/* suggest account */}
            <div className={cx('suggested')}>
                <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
                {seeAll ? (
                    <div className={cx('see-all')} onClick={() => setSeeAll(false)}>
                        See less
                    </div>
                ) : (
                    <div className={cx('see-all')} onClick={() => setSeeAll(true)}>
                        See all
                    </div>
                )}
            </div>

            <div className={cx('following')}>
                <SuggestedAccounts label="Following accounts" data={suggestedUsers} />
            </div>

            <div className={cx('discover')}>
                <p className={cx('title-discover')}>Discover</p>

                <div className={cx('discover-list')}>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>suthatla</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>mackedoi</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>sansangthaydoi</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>
                            Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                        </p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>7749hieuung</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>genzlife</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <p className={cx('text')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className="group_link1">
                    <a href="https://www.tiktok.com/about?lang=en" target="blank">
                        About
                    </a>
                    <a href="https://newsroom.tiktok.com/" target="blank">
                        Newsroom
                    </a>
                    <a href="https://www.tiktok.com/about/contact?lang=en" target="blank">
                        Contact
                    </a>
                    <a href="https://careers.tiktok.com" target="blank">
                        Careers
                    </a>
                    <a href="https://www.bytedance.com/" target="blank">
                        ByteDance
                    </a>
                </div>

                <div className="group_link2">
                    <a href="https://www.tiktok.com/forgood" target="blank">
                        TikTok for Good
                    </a>
                    <a
                        href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web"
                        target="blank"
                    >
                        Advertise
                    </a>
                    <a href="https://developers.tiktok.com/?refer=tiktok_web" target="blank">
                        Developers
                    </a>
                    <a href="https://www.tiktok.com/transparency?lang=en" target="blank">
                        Transparency
                    </a>
                    <a href="https://www.tiktok.com/tiktok-rewards/en" target="blank">
                        TikTok Rewards
                    </a>
                    <a href="https://www.tiktok.com/browse" target="blank">
                        TikTok Browse
                    </a>
                    <a href="https://www.tiktok.com/embed" target="blank">
                        TikTok Embeds
                    </a>
                </div>
                <div className="group_link3">
                    <a href="https://support.tiktok.com/en" target="blank">
                        Help
                    </a>
                    <a href="https://www.tiktok.com/safety?lang=en" target="blank">
                        Safety
                    </a>
                    <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="blank">
                        Terms
                    </a>
                    <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="blank">
                        Privacy
                    </a>
                    <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="blank">
                        Creator Portal
                    </a>
                    <a href="https://www.tiktok.com/community-guidelines?lang=en" target="blank">
                        Community Guidelines
                    </a>
                </div>

                <span className={cx('copyright')}>
                    <FontAwesomeIcon icon={faCopyright} /> TikTok - clone by OanhL1B
                </span>
            </div>
        </aside>
    );
}
export default Sidebar;
