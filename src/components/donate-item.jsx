import DonateItemInfo from './donate-info';
import '../css/donate-item.css'

function DonateItem({ options }) {
    return (
        <div className="donate__block-item">
            <div className="donate__item-img">
                <img src={options.img} alt="img" />
            </div>
            <div className="donate__item-info">
                <h3 className="donate__item-info-title">{options.title}</h3>
                <span className="donate__item-info-price">${options.price}</span>
                <div className="donate__item-info-btns">
                    <button  type="button"><a className='don-btn'href="#">Придбати</a></button>
                    <button  type="button"><a className='don-btn' href='#'>Орендувати</a></button>
                </div>
                <div className="donate__item-info-block">
                    {
                        options.popover && options.popover.map(option => {
                            return <DonateItemInfo options={option} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DonateItem;