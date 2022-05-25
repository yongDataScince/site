import React, { useRef, useState } from 'react';
import './styles.css';
import logo from '../../assets/g-komo.png';
import { CoinsIcon } from '../../assets/coins';
import { DragonIcon } from '../../assets/dragon';
import { useOnClickOutside } from '../..';

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [opened, setOpened] = useState(false);
    const refMenu = useRef(null);

    const [tabs, _setTabs] = useState([
        {id: 0, icon: <CoinsIcon />, title: 'Token Staking'},
        {id: 50, icon: <DragonIcon />, title: 'Token Staking'},
    ])

    const toggleTab = (id) => {
        setActiveTab(id)
    }

    useOnClickOutside(refMenu, () => setOpened(false))

    return (
        <header className='header'>
            <img src={logo} className="header__logo" alt='header__logo' />
            <button className='header-open-btn' onClick={() => setOpened(true)}>
                <div className="header-open-btn-line" />
                <div className="header-open-btn-line" />
                <div className="header-open-btn-line" />
            </button>
            <div className='header__tabs'>
                {tabs.map(tab => (
                    <div className="header__tabs-item" key={tab.id} onClick={() => toggleTab(tab.id)}>
                        {tab.icon}
                        {tab.title}
                    </div>
                ))}
                <div className='header__tabs-line' style={{
                    width: `${100 / tabs.length}%`,
                    left: `${activeTab}%`
                }} />
            </div>
            <button className='header__connect-button'>
                Connect Wallet
            </button>
            <div className={`header-menu ${opened && 'open'}`} ref={refMenu}>
                <button className='header-menu__connect-button'>
                    Connect Wallet
                </button>
                <div className="header-menu-list">
                        {tabs.map(tab => (
                            <p
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`header-menu-list-item ${tab.id === activeTab && 'active'}`}>
                                {tab.icon}
                                {tab.title}
                            </p>
                        ))}
                </div>
            </div>
        </header>
    )
}
