import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to={'/'} 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                Shpping
                            </NavLink>

                            <NavLink 
                                to={'/about'} 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                About
                            </NavLink>

                            <NavLink 
                                to={'/users'} 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>

                    <Route path='/' element={<ShoppingPage/>}/>
                    <Route path='about' element={<h1>About</h1>}/>
                    <Route path='users' element={<h1>Users</h1>}/>
                    <Route path="/*" element={ <Navigate to={'/'}/> }   />
                </Routes>

            </div>
        </BrowserRouter>
  )
}
