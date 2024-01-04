
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
{/* 
        
         Thi part chnages */}
        
            
        <Footer/>
    </>
  )
}

export default Layout