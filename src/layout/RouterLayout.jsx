import { NavLink,Outlet } from "react-router-dom"
import BreadCrumbs from "../components/BreadCrumbs"

const RouterLayout = () => {
  return (
      <>
          <header>
              <nav>
                  <h1>React Router Dom | V6.17</h1>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/articles">Articles</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
              </nav>
          </header>
          <BreadCrumbs/>
          <main>
              <Outlet/>
          </main>
          <footer>
              Footer
          </footer>
    </>
  )
}

export default RouterLayout