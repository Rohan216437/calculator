import React from 'react'

function Button({value}) {
  return (
    <div className={value === "C" || value === "=" ? `${"calcBtns"} ${"res"}` : `${"calcBtns"}`}>
      {value}
    </div>
  )
}

export default Button