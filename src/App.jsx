import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Cards.jsx'
import { Card } from './Cards.jsx'
import './index.css'
import data from './data'

function App() {
  return (
    <div className='main_div'>
      <h1>Cricket WorldCup 2023 Schedule</h1>
      <div>
        {data.map((match, index) => (
          <div className='container' key={index}>
            {match.map((value) => (
              <Card
              className='box'
              name={value.name}
              date={value.date}
              venue={value.venue}
              image={value.image}
              link = {value.link}
            />
            ))}
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App
