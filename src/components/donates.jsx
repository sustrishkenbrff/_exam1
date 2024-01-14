import DonateItem from './donate-item'
import bg1 from '../assets/images/Elysian-edition-boxart2.jpg'
import bg2 from '../assets/images/Azoth-edition-boxart2.jpg'
import bg3 from '../assets/images/Deluxe-edition-boxart2.jpg'
import '../css/donate.css'

function Donate () {
    const data = [
        {
            img: bg1,
            title: 'elysian edition',
            price: '69.98',
            popover: [
                {
                    title: 'New World: Standart Editiom',
                    innerHtml: <p>The base game of New World</p>
                }
            ]
        },
        {
            img: bg2,
            title: 'azoth edition',
            price: '89.99',
            popover: [
                {
                    title: 'New World: Standart Editiom',
                    innerHtml: 
                        <p>The base game of New World</p>
                }
            ]
        },
        {
            img: bg3,
            title: 'deluxe edition',
            price: '89.99',
            popover: [
                {
                    title: 'New World: Standart Editiom',
                    innerHtml:
                        <p>The base game of New World</p>
                },
                {
                    title: 'New World: Standart Editiom',
                    innerHtml:
                        <p>The base game of New World</p>
                }
            ]
        }
    ]

    return (
        <section className="donate">
            <h2 className="title">привілеї та набори</h2>
            <div className="donate__block">
                {
                    data && data.map(option => {
                        return <DonateItem options={option} />
                    })
                }
            </div>
        </section>
    )
}

export default Donate;