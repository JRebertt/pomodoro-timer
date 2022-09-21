import { NavLink } from 'react-router-dom'

import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

import LogoIgnite from '../../assets//Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />

      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" end title="História">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
