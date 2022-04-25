import React, { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        {children}
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default Layout