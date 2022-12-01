import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import config from '~/config';

const cx = classNames.bind(styles);

//const INIT_PAGE = 2;
//const PER_PAGE = 6;

function Sidebar() {
    // const [page, setPage] = useState(INIT_PAGE);
    //const [isSeeAll, setIsSeeAll] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    // const handleViewChange = (isSeeAll) => {
    //     setIsSeeAll((prevState) => !prevState);
    //     if (isSeeAll) {
    //         setPage(page + 1);
    //     } else {
    //     }
    // };
    return (
        <aside className={cx('wrapper')}>
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

            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUsers}
                // isSeeAll={isSeeAll}
                // onViewChange={handleViewChange}
            />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
