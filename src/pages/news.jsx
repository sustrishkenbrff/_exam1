import { useState } from 'react';
import React from "react";
import newsData from '../components/news'
import filtersData from '../components/filters';
import '../css/news.css'


function News() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [isFilterMenuVisible, setFilterMenuVisible] = useState(false);

    const filteredNews = newsData.filter((news) => {
        const filterCondition =
          selectedFilter === "all" || news.category === selectedFilter;
        const searchCondition =
          news.slg.toLowerCase().includes(searchTerm.toLowerCase());
        return filterCondition && searchCondition;
      });
    
      const handleFilterClick = () => {
        setFilterMenuVisible(!isFilterMenuVisible);
      };
    
      const handleFilterOptionClick = (filter) => {
        setSelectedFilter(filter);
        setFilterMenuVisible(false);
      };
    
    return ( 
    <div>
            <section className="newsmodule">
            <div className="bgnews">
                <div className="slogan">
                <div className="nlogo" style={{margin:'10px'}}></div>
                    <h2 className="ntext"> НОВИНИ</h2>
                <div className="nlogo"></div>
            </div>
            </div>
            </section>


            <section className="newslanding">
                <div className="topland">
                    <div className="search">
                        <form method="GET">
                            <button className="btn-src">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-label="Submit Search">
                                 <g id="Group_3169" data-name="Group 3169" transform="translate(-951.235 -530.735)">
                                     <path id="Path_486" data-name="Path 486" d="M958.235,532.235a5.5,5.5,0,1,0,5.5,5.5A5.506,5.506,0,0,0,958.235,532.235Z" fill="none"></path>
                                     <path id="Path_487" data-name="Path 487" d="M963.328,541.8l0,0a6.8,6.8,0,1,0-12.091-4.261v.019a6.792,6.792,0,0,0,11.059,5.272l0,0,5.906,5.907,1.031-1.031Zm-5.293,1.078a5.342,5.342,0,1,1,5.342-5.342A5.348,5.348,0,0,1,958.035,542.876Z" fill="#ffb10f"></path>
                                 </g>
                            </svg>
                            </button>
                            <input name="q" className="input-src" placeholder="Пошук статей"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} maxlength="100"></input>
                        </form>
                    </div>
                    <div className="filter">
                    <button className="filter-btn" onClick={handleFilterClick}>
                            Фільтрувати за
                            <svg className={`fil ${isFilterMenuVisible ? "rotate" : ""}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 14 14" width="16px" height="16px" fill="none" stroke="currentColor">
                                <path d="M0.4,0.4l6.4,6.4l6.4-6.4"></path>
                            </svg>
                        </button>
                            {isFilterMenuVisible && (
                            <div className="filters" >
                                <ul>
                                    {filtersData.map((filter, index) => (
                    <li key={index} onClick={() => handleFilterOptionClick(filter.value)}>
                    <span className="fr-btn">{filter.label}</span>
                                        </li> ))}
                                </ul>
                            </div> )}
                    </div>
                </div>
                <div className="states">
          {filteredNews.length === 0 ? (
            <div className='errorsrc'>
            <div className="errhd">Вибачте, статей, що відповідають {searchTerm}, не знайдено.</div> 
            <ul className="errbt">
                        <li>Переконайтеся, що всі слова написані правильно</li>
                        <li>Пошук виконується лише за назвою статті</li>
                    </ul> </div>        ) : (
            filteredNews.map((news, index) => (
              <div key={index} className="slot">
                <h4>{news.title}</h4>
                <a className="slot-link" aria-label={news.title} href={news.link}>
                  <div className="slot-img">
                    <img className="" src={news.img} alt="" />
                  </div>
                  <div className="slot-blog">
                    <span className="slot-slog">{news.slg}</span>
                    <div className="slot-disc">{news.content}</div>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
            </section>
    </div>
    );
}

export default News;