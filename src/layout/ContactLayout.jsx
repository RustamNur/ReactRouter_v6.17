import { NavLink, Outlet } from "react-router-dom"


const ContactLayout = () => {
  return (
      <div>
          <h1>Contacts</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque, veritatis optio sapiente numquam eum. Ipsum consequatur dicta odit soluta, accusantium adipisci excepturi quo provident.</p>

          <nav>
              <NavLink to="faq">FAQ</NavLink>
              <NavLink to="form">
                  Form
              </NavLink>
          </nav>
          <Outlet/>
    </div>
  )
}

export default ContactLayout