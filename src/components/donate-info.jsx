import { useState } from "react"
import '../css/donate-info.css'

function DonateItemInfo({ options }) {
    const [isOpen, setIsOpen] = useState(false)
    const openPopover = () => setIsOpen(prevValue => !prevValue)

    return (
        <div className="donate__info-item">
            {
                isOpen ? (
                    <>
                        <span className="donate__info-item-title active" onClick={openPopover}>{options.title}</span>
                        <div className="donate__info-item-popover active">
                            {options.innerHtml}
                        </div>
                    </>
                ) : (
                    <>
                        <span className="donate__info-item-title" onClick={openPopover}>{options.title}</span>
                        <div className="donate__info-item-popover">
                            {options.innerHtml}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default DonateItemInfo