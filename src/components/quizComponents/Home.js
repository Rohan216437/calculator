import React from 'react'
import Button from './Button'

function Home() {

  const buttons = ["C" , "Del" , "/" , "9" , "8" , "7" , "*" , "6" ,  "5" , "4", "+" , "3"  , "2" , "1" , "-" , "." , "0" , "="]

  return (
    <div className="home">
      <div className="inner">
            <div className="result">
              <div className="resbox">

              </div>
            </div>
            <div className="btns">
              {buttons.map((ele , index) => <Button value={ele} key={index}/>)}
            </div>
      </div>
    </div>
  )
}

export default Home