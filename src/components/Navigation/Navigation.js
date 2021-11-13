import React from 'react';
import { NavLink } from 'react-router-dom';
import useSizeScreen from '../../hooks/useSizeScreen';
import { Home } from '../IconBtn/Home';
import { Statistics } from '../IconBtn/Statistics';
import { Currency } from '../IconBtn/Currency';

import styles from './Navigation.module.scss';

function Navigation() {
    const sizeScreen = useSizeScreen();
    return (
        <nav className={styles.navigation}>
                <NavLink
                    exact
                    to="/"
                    className={styles.navLink}
                    activeClassName={styles.navLinkActive}
                >
                <button className={styles.buttonNav}>
                    {sizeScreen <= 767 ? (
                        <Home svg={styles.svgNav} />
                    ) : (
                            <div className={styles.boxNav}>
                                <Home svg={styles.svgNav} />
                                <span className={styles.textNav}>Главная</span>
                        </div>
                    )}
                </button>
                </NavLink>
                <NavLink
                    exact
                    to="/diagram"
                    className={styles.navLink}
                    activeClassName={styles.navLinkActive}
                >
                <button className={styles.buttonNav}>
                    {sizeScreen <= 767 ? (
                        <Statistics svg={styles.svgNav} />
                    ) : (
                            <div className={styles.boxNav}>
                                <Statistics svg={styles.svgNav} />
                                <span className={styles.textNav}>Статистика</span>
                        </div>
                    )}
                </button>
                </NavLink>
            {sizeScreen <= 767 && (
                    <NavLink
                        exact
                        to="/currency"
                        className={styles.navLink}
                        activeClassName={styles.navLinkActive}
                    >
                    <button className={styles.buttonNav}>
                        <Currency svg={styles.svgNav} />
                    </button>
                    </NavLink>
                )}
            </nav>
    );
};

export default Navigation;