import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export function Header () {
  return (
    <header className={styles.header}>
      <div>

      </div>
      <div>
        <nav>
          <NavLink to="/data" title="dados">
          </NavLink>
          <NavLink to="/frontend" title="dados">
          </NavLink>
          <NavLink to="/" title="dados">
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
