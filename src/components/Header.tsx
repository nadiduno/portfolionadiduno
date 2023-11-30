import styles from './Header.module.css'
import { AppWindow, Database, House, } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.header}>
      <div>

      </div>
      <div>
        <nav>
          <NavLink to="/data" title="dados">
            <Database size={24} />
          </NavLink>
          <NavLink to="/frontend" title="dados">
            <AppWindow size={24} />
          </NavLink>
          <NavLink to="/" title="dados">
            <House size={24} />
          </NavLink>
        </nav>

        {/* <a href="#">
          <UsersThree size={24} />
          DevRel
        </a> */}
        {/* <a href="#">
          <Handshake size={24} />
          Comunidade
        </a> */}
        {/* <a href="#">
          <Heart size={24} />
          Voluntaria
        </a> */}
      </div>
    </header>
  )
}
