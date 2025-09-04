import React, {Link,Outlet} from 'react'

const  Layout = () => {
  return (
    <div>
      <header>
        Nested Route
         <nav>
          <Link to="/" >Home  </Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" > Contact </Link>
         <Link to ="experience" >Experience</Link>
         <Link to="projects" >Projects</Link>
         <Link to="resume" >Resume</Link>
         <Link to="skills"  >Skills</Link>
         </nav>
        </header>
        <main>
          <Outlet>

          </Outlet>
        </main>
        <footer>
          copyright@2025
        </footer>
    </div>
  )
}

export default  Layout


