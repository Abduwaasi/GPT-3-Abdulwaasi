import React,{useState} from 'react'
import { Button } from '../../GlobalStyle'
import { NavContainer,NavLeft,NavLogoLink, NavLogo,NavMenu,NavItem,NavLink, NavButtonContainer, MenuIcon, MobileMenu} from './Navbar.element'
import {RiCloseLine, RiMenu3Line} from "react-icons/ri"
import Logo from "../../Assets/GPT-3.png"

const Menu = ()=>{
    return (
               <>
                  <NavItem>
                      <NavLink>Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink>what is GPT?</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink>Open Ai</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink>Case studies</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink>Liberary</NavLink>
                  </NavItem>
              </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
       <NavContainer>
          <NavLeft>
              <NavLogoLink href="#home">
                  <NavLogo src={Logo} alt="logo"/>
              </NavLogoLink>
             <NavMenu>
              <Menu/>
             </NavMenu>
          </NavLeft>

          <NavButtonContainer>
              <div>
                  
              <Button>sign in </Button>
              </div>
              <Button fill radius>sign up </Button>
          </NavButtonContainer>
          <MenuIcon>
          {
              toggleMenu 
              ?<RiCloseLine color="#fff" size="1.5rem" onClick={()=>setToggleMenu(!toggleMenu)}/>
              :<RiMenu3Line color="#fff" size="1.5rem" onClick={()=>setToggleMenu(!toggleMenu)}/>
          }
          </MenuIcon>
              {toggleMenu && 
          <MobileMenu>
               <Menu/>
              <Button>Sign in</Button>
              <Button fill radius>Sign up</Button>
          </MobileMenu>
              }
         
       </NavContainer>
    
    )
}

export default Navbar


