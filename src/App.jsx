import people from './assets/data';
import { useState } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/Bs';
function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const slideRight = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex % people.length;
    });
  };
  const slideLeft = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return (newIndex + people.length) % people.length;
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    const newIndex = randomNum % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <div className='section-center'>
        <h2 className='section-title'>Reviews Project</h2>

        <div className='reviews-container'>
          <div className='user-info'>
            <img src={image} className='img' alt={name} />
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{text}</p>
          </div>
          <div className='btn-container'>
            <button className='btn-icon' onClick={slideLeft}>
              <BsChevronDoubleLeft />
            </button>
            <button className=' btn ' onClick={randomPerson}>
              random
            </button>
            <button className='btn-icon' onClick={slideRight}>
              <BsChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
