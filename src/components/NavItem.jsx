import { useState, useEffect } from "react";
import Arrow from "../assets/images/icons/Arrow";
import '../css/NavItem.css';

function NavItem({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closePopoverFunc = (e) => {
            if (!e.target.closest('.header__list-item')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', closePopoverFunc);

        return () => {
            document.removeEventListener('click', closePopoverFunc);
        };
    }, []);

    const openPopoverFunc = (e) => {
        e.stopPropagation();
        setIsOpen(prevValue => !prevValue);
    };

    return (
        <li className="header__list-item" onClick={openPopoverFunc}>
            {options.menu ? (
                isOpen ? (
                    <>
                        <a href={options.link} className="active">{options.title}<Arrow /></a>
                        <div className="header__list-item-menu">
                            <ul className="header__item-list">
                                {options.menu.map(menuItem => (
                                    <li className="header__list-item header__item-list-item" key={menuItem.title}>
                                        <a href={menuItem.link}>{menuItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <a href={options.link}>{options.title}<Arrow /></a>
                )
            ) : (
                <a href={options.link}>{options.title}</a>
            )}
        </li>
    );
}

export default NavItem;
