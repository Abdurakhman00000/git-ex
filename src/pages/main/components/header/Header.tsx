import React from 'react'
import s from "./Header.module.scss"

const Header = () => {
  return (
    <header className={s.Header}>
      <div className="container">
        <div className={s.content}>
          <h1>day 1</h1>
        </div>
      </div>
    </header>
  )
}

export default Header