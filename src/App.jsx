import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Cards.jsx'
import { Card } from './Cards.jsx'
import './index.css'


function App() {
  return(
    <div className='main_div'>
      <h1 className='main_header'>Cricket World Cup 2023 Schedule</h1>
      <div className='container'>
        <Card className ="box" name = 'England Vs New Zealand' date = 'Oct 5' venue = "Ahemdabad" image = "../../images/match_1.jpeg"></Card>
        <Card className ="box" name = 'Pakistan vs Netherlands' date = 'Oct 6' venue = "Hyderabad" image ="../../images/match_2.jpeg"></Card>
        <Card className ="box" name = 'Bangladesh vs Afghanistan' date = 'Oct 7' venue = "Dharamsala	" image ="../../images/match_3.jpeg"></Card>
      </div>
      <div className='container'>
      <Card className ="box" name = 'South Africa vs SriLanka' date = 'Oct 7' venue = "Delhi" image ="../../images/image_4.jpeg"></Card>
      <Card className ="box" name = 'India vs Australia' date = 'Oct 8' venue = "Chennai" image ="../../images/match_5.jpeg"></Card>
      <Card className ="box" name = 'New Zealand vs Netherlands' date = 'Oct 9' venue = "Hyderabad" image ="../../images/match_6.jpeg"></Card>
      </div>
      <div className='container'>
      <Card className ="box" name = 'England vs Bangladesh' date = 'Oct 10' venue = "Dharamsala" image ="../../images/match_7.jpeg"></Card>
      <Card className ="box" name = 'Pakistan vs Sri Lanka' date = 'Oct 10' venue = "Hyderabad" image ="../../images/match_8.jpeg"></Card>
      <Card className ="box" name = 'India vs Afghanistan' date = 'Oct 11' venue = "Delhi" image ="../../images/image_9.jpeg"></Card>
      </div>

      <div className='container'>
      <Card className ="box" name = 'Australia vs South Africa' date = 'Oct 12' venue = "Lucknow" image ="../../images/match_10.jpeg"></Card>
      <Card className ="box" name = 'New Zealand vs Bangladesh' date = 'Oct 13' venue = "Chennai" image ="../../images/match_11.jpeg"></Card>
      <Card className ="box" name = 'India vs Pakistan' date = 'Oct 14' venue = "Ahmedabad" image ="../../images/match_12.jpeg"></Card>
      </div>
    </div>
    
    
  )
}

export default App
