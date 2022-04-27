import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarRoute2} from './SidebarElements'



const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ='about' onClick={toggle}>
                    About Us
                </SidebarLink>
                <SidebarRoute2 to ='/food/4'>All Cuisine</SidebarRoute2>
                {/* <SidebarLink to ='/food/4' onClick={toggle}>
                    All Cuisine
                </SidebarLink> */}
                <SidebarRoute2 to ='/search'>Search</SidebarRoute2>
                {/* <SidebarLink to ='/search' onClick={toggle}>
                    Search
                </SidebarLink> */}
                <SidebarLink to ='signup' onClick={toggle}>
                    Sign up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
      

  )
}

export default Sidebar
