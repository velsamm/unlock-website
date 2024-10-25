import React, { FC } from "react";
import Logo from '$assets/icons/svg/logo.svg'
import Image from "next/image";

export const Header: FC = () => (
    <header className="row justify-content-space-between align-items-center">
        <div className="col">
            <Image src={Logo} alt="logo" />
        </div>
        <div className="col grow-0">
            <div className="row justify-content-flex-end flex-nowrap nav">
                <div className="col ta-center">
                    {/*<span className="page-link" onClick={() => {*/}
                    {/*    scroller.scrollToAdvantages()*/}
                    {/*}}>*/}
                    {/*    Преимущества*/}
                    {/*</span>*/}
                    <a className="page-link" href='#advantages'>
                        Преимущества
                    </a>
                </div>
                <div className="col ta-center">
                    {/*<span className="page-link" onClick={() => {*/}
                    {/*    scroller.scrollToServices()*/}
                    {/*}}>*/}
                    {/*    Услуги*/}
                    {/*</span>*/}
                    <a className="page-link" href='#services'>
                        Услуги
                    </a>
                </div>
                <div className="col ta-center">
                    {/*<span className="page-link" onClick={() => {*/}
                    {/*    scroller.scrollToPrices()*/}
                    {/*}}>*/}
                    {/*    Стоимость*/}
                    {/*</span>*/}
                    <a className="page-link" href='#prices'>
                        Стоимость
                    </a>
                </div>
            </div>
        </div>
    </header>
)
