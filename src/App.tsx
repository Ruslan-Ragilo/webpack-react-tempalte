import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { MainAsync } from "./pages/Main/Main.async"
import { AboutAsync } from "./pages/About/About.async"
import { Suspense, useContext, useState } from "react"
import './styles/index.scss'
import './App.scss'
import { useTheme } from "../theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"
import { Theme } from "../theme/ThemeContext"

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
      <div className={classNames('app', {}, [theme])}>
        <label className="switch">
          <input checked={theme === Theme.DARK} onChange={toggleTheme} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/' element={<MainAsync />} />
            <Route path='/about' element={<AboutAsync />} />
          </Routes>
        </Suspense>
      </div>
  )
}

export default App