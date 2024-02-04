import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext"
import { AboutAsync } from "pages/About"
import { MainAsync } from "pages/Main/ui/Main.async"
import { classNames } from "shared/lib/classNames/classNames"

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