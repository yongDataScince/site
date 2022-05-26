import React, { useState } from "react";
import './syles.css';

const buttonsData = [
    {
        id: 0,
        durName: "7 days",
        durVal: 7,
        isActive: true
    },
    {
        id: 1,
        durName: "14 days",
        durVal: 14,
        isActive: false
    },
    {
        id: 2,
        durName: "30 days",
        durVal: 30,
        isActive: false
    },
    {
        id: 3,
        durName: "90 days",
        durVal: 90,
        isActive: false
    },
    {
        id: 4,
        durName: "180 days",
        durVal: 180,
        isActive: false
    },
    {
        id: 5,
        durName: "365 days",
        durVal: 365,
        isActive: false
    },
]

export cons Body = () => {
    const [buttons, setButtons] = useState(buttonsData);

    const choiseDuration = () => {
        setButtons(buttons.map(button => {
            if (id === button.id) return {
                ...button,
                isActive: true
            }
            return {
                ...button,
                isActive: false
            }
        }))
    }

    return (
        <div className="main">
            <div className="main__block">
                <p className="main__block-title">KOMO Token Staking</p>
                <div className="main__block-balance">
                    <p className="main__block-balance-sub">Balance</p>
                    <p className="main__block-balance-value">0 KOMO</p>
                </div>
                <div className="main__block-stake-block">
                    <p className="main__block-stake-block--title">Stake Amount</p>
                    <div className="main__block-stake-block--input-gr">
                        <input className="main__block-stake-block--input" /> KOMO
                    </div>
                </div>
                <div className="main__block-duration-block">
                    <p className="main__block-stake-block--title">Duration</p>
                    <div className="main__block-duration-block--buttons">
                        {
                            buttons.map(button => (
                                <button
                                    onClick={() => choiseDuration(button.id)}
                                    key={button.id}
                                    className={
                                        `main__block-duration-block--buttons-btn
                                         ${ button.isActive && 'active'}`
                                    }
                                >
                                    {button.durName}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="main__block-apy-block">
                    <p className="main__block-apy-block-title">APY</p>
                    <p className="main__block-apy-block-info">50% APY</p>
                </div>
                <button className="main__block-stake-btn">
                    Stake Token
                </button>

            <div className="main__block">
                <p className="main__block-title">Portfolio</p>
                <div className="main__block-portfolio-blocks">
                    <div className="main__block-portfolio-block">
                        <div className="block-info main__block-portfolio-block--stake-info">
                            <p className="main__block-portfolio-block--stake-info-title">Stake Amount / Duration</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                500 KOMO / 7 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--remaining-info">
                            <p className="main__block-portfolio-block--stake-info-title">Remaining</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                5 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--apy-info">
                            <p className="main__block-portfolio-block--stake-info-title">APY</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                50%
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--reward-info">
                            <p className="main__block-portfolio-block--stake-info-title">Reward</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                +0.52 KOMO
                            </p>
                        </div>

                        <button className="btn get-reward-btn">
                            Get Reward
                        </button>
                    </div>
                    <div className="main__block-portfolio-block">
                        <div className="block-info main__block-portfolio-block--stake-info">
                            <p className="main__block-portfolio-block--stake-info-title">Stake Amount / Duration</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                1500 KOMO / 90 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--remaining-info">
                            <p className="main__block-portfolio-block--stake-info-title">Remaining</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                26 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--apy-info">
                            <p className="main__block-portfolio-block--stake-info-title">APY</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                50%
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--reward-info">
                            <p className="main__block-portfolio-block--stake-info-title">Reward</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                +120.75 KOMO
                            </p>
                        </div>

                        <button className="btn get-reward-btn">
                            Get Reward
                        </button>
                    </div>
                    <div className="main__block-portfolio-block">
                        <div className="block-info main__block-portfolio-block--stake-info">
                            <p className="main__block-portfolio-block--stake-info-title">Stake Amount / Duration</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                1500 KOMO / 365 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--remaining-info">
                            <p className="main__block-portfolio-block--stake-info-title">Remaining</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                342 days
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--apy-info">
                            <p className="main__block-portfolio-block--stake-info-title">APY</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                50%
                            </p>
                        </div>

                        <div className="block-info main__block-portfolio-block--reward-info">
                            <p className="main__block-portfolio-block--stake-info-title">Reward</p>
                            <p className="main__block-portfolio-block--stake-info-data">
                                +10.75 KOMO
                            </p>
                        </div>

                        <button className="btn get-reward-btn">
                            Get Reward
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
