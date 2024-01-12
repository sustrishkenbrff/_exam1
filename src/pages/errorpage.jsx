import { useEffect, useState } from 'react';
import personItems from '../components/persons.json'
import { Link } from 'react-router-dom';
import '../css/errorpage.css';

function Card({ person, flipped, chooseCard }) {
  const cardClickHandle = (e) => {
    chooseCard(person)
  }

  return <div className={`card ${flipped ? 'matched' : ''}`} onClick={cardClickHandle} >
    <img style={{ transform: "rotateY(180deg)" }} src={person.src} />
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
      <line x1="12" y1="19" x2="12" y2="19.01"></line>
    </svg>
  </div>
}

function NotFound() {
  const [showGameTitle, setShowGameTitle] = useState(true);

  const [persons, setPersons] = useState([]);
  const [personOne, setPersonOne] = useState(null);
  const [personTwo, setPersonTwo] = useState(null);

  const chooseCard = (person) => {
    personOne ? setPersonTwo(person) : setPersonOne(person)
  }

  const initGame = () => {
    const allPersons = [...personItems, ...personItems]
      .sort(() => Math.random() - .5)
      .map((item) => ({ ...item, id: Math.random() }))
    setPersons(allPersons)
    setShowGameTitle(false);

  }

  const resetGame = () => {
    setPersons(prevPersons => {
      return prevPersons.map(item => {
        if (item.matched) {
          return { ...item, matched: false }
        }

        return item
      })
    })

    setPersonOne(null)
    setPersonTwo(null)

    setTimeout(() => {
      initGame()
    }, 500)
  }

  useEffect(() => {
    if (personOne && personTwo) {
      if (personOne.src === personTwo.src) {
        setPersons(prevPersons => {
          return prevPersons.map(item => {
            if (item.src === personOne.src) {
              return { ...item, matched: true }
            } else {
              return item
            }
          })
        })
      }

      setTimeout(() => {
        setPersonOne(null)
        setPersonTwo(null)
      }, 500)
    }
  }, [personTwo, personOne])

  return <>
{showGameTitle && <h1 className='txt'>На жаль, цієї сторінки не існує, але ви можете спробувати свої сили в грі тут.</h1>}
    {
      persons.length ? <>
        <button className='start restart' onClick={resetGame}> РЕСТАРТ </button>
        <Link to="/news"><button className='start restart' onClick={resetGame}> НА ГОЛОВНУ </button></Link>
        <div className="game">
          {
            persons.map((person, key) => {
              return <Card
                key={key}
                chooseCard={chooseCard}
                flipped={person === personOne || person === personTwo || person.matched}
                person={person}
              />
            })
          }
        </div>
        <p className='in-game'>На жаль, цієї сторінки не існує, але ви можете спробувати свої сили в грі тут.</p>
      </> :
    <div> 
    <button className='start' onClick={initGame}>
        СТАРТ
      </button>
      <Link to="/news"><button className='start' onClick={resetGame}> НА ГОЛОВНУ </button></Link>
      </div>
      
    }
  </>;
}

export default NotFound;
