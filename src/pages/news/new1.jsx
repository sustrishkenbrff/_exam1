import React from "react";
import '../../css/new.css'
import Slider from "../../components/Slider";
import Comments from "../../components/comments";

function New() {
    return (
        <div>
            <div className="heaven">
                <div className="hvn-back">
                    <a href="/news" className="back-link">Повернутися до новин</a>
                </div>
                    <h2 className="hvn-title">Новий Сезон Бета-Тесту</h2>
                <div className="hvn-date">10 січня 2024</div>
            </div>
            <section className="new-head">
                <div className="newdisc">
                    <div class="new-title">
                        <div class="new-top-line"></div>
                            <h2 class="new-txt">Новий Сезон Бета-Тесту</h2>
                        <div class="new-bot-line"></div>
                    </div>
                </div>
            </section>
            <div className="disc">
                <p className="disc-slog">Глобальне</p>
                 <div className="disc-disc">  
                    <p class="disc-txt-slog">Бойова перепустка</p>
                    <p className="disc-small">
                    Ви отримуєте бали, виконуючи місії MineStep. З цими балами ви можете розблокувати винагороди Бойової перепустки. В бойовій перепусткі 45 рівнів. Є два типи перепустки безкоштовна і преміум.
                    </p>
                    <p class="disc-txt-slog">MineStep</p>
                    <p className="disc-small">
                    Нова система квестів, які вам потрібно виконувати послідовно, вимагаючи прогресу від лівого краю до правого, і після того, як ви розблокуєте останню винагороду, ви можете отримати доступ до наступної сторінки. Є два шляхи для початку квестів, ви можете вибрати тільки 1 </p>
                </div>
            </div>
            <Slider></Slider>
            <div className="disc">
                <p className="disc-slog">ПЕРСОНАЖ</p>
                 <div className="disc-disc">  
                    <p class="disc-txt-slog">Скіли</p>
                    <p className="disc-small">
                    A Knight of the Round Table has unearthed forbidden knowledge of the Ancients, seeking to subjugate humanity with the power of an eternal winter. Rally your team of Silver Crows, and convince a surly fire mage named Daichi to help track down and vanquish the Knight before he lays waste to Aeternum.
                    </p>
                    <p class="disc-txt-slog">Роботи</p>
                    <p className="disc-small">
                    A Knight of the Round Table has unearthed forbidden knowledge of the Ancients, seeking to subjugate humanity with the power of an eternal winter. Rally your team of Silver Crows, and convince a surly fire mage named Daichi to help track down and vanquish the Knight before he lays waste to Aeternum.
                    </p>
                    
                </div>
            </div>
            <seciton className="comments">
                <Comments/>
            </seciton>
        </div>
    );
}
export default New;