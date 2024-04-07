import React from 'react'

function Button({value , handler}) {
  return (
    <div className={value === "C" || value === "=" ? `${"calcBtns"} ${"res"}` : `${"calcBtns"}`}
    onClick={()=> handler(value)}
    >
      {value}
    </div>
  )
}

export default Button