import { useState } from 'react'
import Navbar from "./components/Navbar"
import Middle from './components/Middle'
import Footer from './components/Footer'
import Expeience from './components/Expeience'
import "./components/Middle.css"
import "./App.css"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Middle></Middle>
      <h1 className="designation exp">RELEVENT EXPERIENCE</h1>
   
        <div className="experience">
          <Expeience className="same" company="Crosby" year_of_exp="(2021-present)"
            designation="Senior UI/UX Dev" desc="Used to make some designs"></Expeience>
          <Expeience className="same" company="Norman & Co." year_of_exp="(2015-2021)"
            designation="Senior UI/UX Dev" desc="Used to make some designs"></Expeience>
          <Expeience className="same" company="Crosby" year_of_exp="(2014-2015)"
            designation="Senior UI/UX Dev" desc="Used to make some designs"></Expeience>
       
 <Footer></Footer>
      </div>
    </>
  )
}

export default App
