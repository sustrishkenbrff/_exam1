import '../css/Header.css'
import logo from './../assets/images/NW-bug.svg'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

function Header() {
    const options = [
        {
            title: 'Головне',
            menu: [
                {
                    title: 'авторизація',
                    link: '/'
                },
                {
                    title: 'предмети',
                    link: 'r'
                },
                {
                    title: 'мапа',
                    link: 'r'
                },
                {
                    title: 'моди',
                    link: 'r'
                },
                {
                    title: 'ресурспаки',
                    link: 'r'
                },
                {
                    title: 'faq',
                    link: 'r'
                }]
        },
        {
            title: 'новини',
            link: 'news'
        },
        {
            title: 'Комьюніті',
            menu: [
                {
                    title: 'ютуберам',
                    link: 'r'
                }, 
                {
                    title: 'discord',
                    link: 'r'
                }]
        },
        {
            title: 'Підтримка',
            menu: [{title: 'статус сервера', link: 'r'}, {title: 'Технічна підтримка', link: 'r'}]
        },
        {
            title: 'донат',
            link: 'donate'
        },
    ]

    return (
        <header className="header" id='header'>
            <nav className="header__menu">
                <div className="header__logo">
                  <Link to="/">  <img src={logo} alt="logo" /></Link>
                </div>
                <ul className="header__list">
                    {
                        options.map(option => {
                            return <NavItem options={option} />
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;