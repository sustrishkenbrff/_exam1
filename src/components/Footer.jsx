import '../css/Footer.css'
import logo from './../assets/images/NW-logo.svg'
import ersb from './../assets/images/ESRB-T.svg'
import Amazon from './../assets/images/icons/Amazon'
import Twitch from './../assets/images/icons/Twitch'
import Twitter from './../assets/images/icons/Twitter'
import Facebook from './../assets/images/icons/Facebook'
import Youtube from './../assets/images/icons/Youtube'
import Instagram from './../assets/images/icons/Instagram'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top-line"></div>
            <div className="footer__block">
                <div className="footer__top">
                    <div className="footer__logo">
                        <a href="#"><img src={logo} alt="logo" /></a>
                    </div>
                    <div className="footer__to-top-btn">
                        <a className="upup" href="#header">⇧</a>
                    </div>
                    <div className="footer__top-ersb">
                        <a href="#"><img src={ersb} alt="ersb" /></a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__middle-line"></div>
                    <div className="footer__bottom-amazon">
                        <a href="#"><Amazon /></a>
                    </div>
                    <div className="footer__bottom-social">
                        <ul className='footer__bottom-social-list'>
                            <li className='footer__social-list-item'><a href="#"><Twitch /></a></li>
                            <li className='footer__social-list-item'><a href="#"><Twitter /></a></li>
                            <li className='footer__social-list-item'><a href="#"><Facebook /></a></li>
                            <li className='footer__social-list-item'><a href="#"><Youtube /></a></li>
                            <li className='footer__social-list-item'><a href="#"><Instagram /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                © 2019-2024, Amazon.com, Inc. or its affiliates. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;