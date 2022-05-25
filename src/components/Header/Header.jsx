import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/g-komo.png';
import { CoinsIcon } from '../../assets/coins';
import { DragonIcon } from '../../assets/dragon';

export const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState([
        {id: 0, icon: <CoinsIcon />, title: 'Token Staking'},
        {id: 50, icon: <DragonIcon />, title: 'Token Staking'},
    ])

    const toggleTab = (id) => {
        setActiveTab(id)
        console.log((100 / activeTab));
    }

    return (
        <header className='header'>
            <img src={logo} alt="header__logo" />
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
        </header>
    )
}
