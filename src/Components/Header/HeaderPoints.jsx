import React, { useEffect, useState } from 'react'
import './Header.css'
import {FiMenu} from 'react-icons/fi'
import {IoMdArrowBack} from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useScrollContext } from '../../context'

const HeaderPoints = () => {
  const location = useLocation()
  const [first, setFirst] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [inHome, setInHome] = useState(location.pathname == '/puntos-cofa') 

  const openNavbar = () =>{
    setIsOpen(true)
    setFirst(false)
  }
  const handleCloseNabvar = () =>{
    setIsOpen(false)
  }

  useEffect(() =>{
    console.log(location.pathname)
    setInHome(location.pathname == '/puntos-cofa')

  }, [location.pathname])

  const {scrolled } = useScrollContext()

  const [selectedLink, setSelectedLink] = useState('prestamos');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
    <header className={scrolled && 'solid'}>
        <Link to={'/prestamos'}>
          <img src='/Logo.svg'/>
        </Link>
        <nav className='nav-points'>
          {
            inHome 
            ? (
              <>
                <Link to="/prestamos" className={selectedLink === 'prestamos' ? 'link-selected' : ''} onClick={() => handleLinkClick('prestamos')}>Inicio</Link>
                <a href="#uso-de-puntos" className={selectedLink === 'use-of-points' ? 'link-selected' : ''} onClick={() => handleLinkClick('use-of-points')}>
                  Uso de Puntos
                </a>
                <a href="#acreditacion" className={selectedLink === 'accreditation' ? 'link-selected' : ''} onClick={() => handleLinkClick('accreditation')}>
                  Acreditación
                </a>
                <a href="#restricciones" className={selectedLink === 'restrictions' ? 'link-selected' : ''} onClick={() => handleLinkClick('restrictions')}>
                  Restricciones
                </a>
                <a href="#valor" className={selectedLink === 'value' ? 'link-selected' : ''} onClick={() => handleLinkClick('value')}>
                  Valor
                </a>
                <a href="#contacto" className={selectedLink === 'contacto' ? 'link-selected' : ''} onClick={() => handleLinkClick('contacto')}>Contacto</a>
              </>
            )
            : (
              <>
                <Link to={'/prestamos'} className='link-selected'>Inicio</Link>
                <Link to={'/#uso-de-puntos'} >Uso de Puntos</Link>
                <Link to={'/#acreditacion'} >Acreditación</Link>
                <Link to={'/#restricciones'} >Restricciones</Link>
                <Link to={'/#valor'} >Valor</Link>
                <Link to={'/#contacto'} >Contacto</Link>
              </>
            )
          }

        </nav>
        <div className='buttons-container buttons-container-points'>
            {/* <Link to={'/asistencias'}>
              <button className='secondary-btn' id='btn-points-assist'>Quiero mi Asistencia</button>
            </Link> */}
            <a href='http://wa.me/5491137570853' target="_blank" rel="noopener noreferrer">
              <button className='primary-btn' id='btn-loan-points'>Quiero mi Préstamo</button>
            </a>
            <button className='btn-show-links' onClick={openNavbar}><FiMenu/></button>
        </div>
        <div className={isOpen ? 'mobible-navbar-points open-points' : (first ?  'mobible-navbar' : 'mobible-navbar not-first-points')}>
          <nav className='mobible-links-points'>
            <button onClick={() => setIsOpen(false)} className='btn-back-points'>
              <IoMdArrowBack/>
            </button>
            <Link to={'/prestamos'} className={selectedLink === 'prestamos' ? 'link-selected' : ''} onClick={() => handleLinkClick('prestamos')}>Inicio</Link>
            <a href="#uso-de-puntos" className={selectedLink === 'use-of-points' ? 'link-selected' : ''} onClick={() => { handleLinkClick('use-of-points'); handleCloseNabvar(); }}>
              Uso de Puntos
            </a>
            <a href="#acreditacion" className={selectedLink === 'accreditation' ? 'link-selected' : ''} onClick={() => { handleLinkClick('accreditation'); handleCloseNabvar(); }}>
              Acreditación
            </a>
            <a href="#restricciones" className={selectedLink === 'restrictions' ? 'link-selected' : ''} onClick={() => { handleLinkClick('restrictions'); handleCloseNabvar(); }}>
              Restricciones
            </a>
            <a href="#valor" className={selectedLink === 'value' ? 'link-selected' : ''} onClick={() => { handleLinkClick('value'); handleCloseNabvar(); }}>
              Valor
            </a>
            <a href="#contacto" className={selectedLink === 'contacto' ? 'link-selected' : ''} onClick={() => { handleLinkClick('contacto'); handleCloseNabvar(); }}>
              Contacto
            </a>
          </nav>
          <a href='http://wa.me/5491137570853' target="_blank" rel="noopener noreferrer">
            <button className='primary-btn mobible-nav-secondary-btn' >Quiero mi Préstamo</button>
          </a>
          {/* <Link to={'/asistencias'} className='secondary-btn mobible-nav-secondary-btn'>
            Quiero mi Asistencia
          </Link> */}
        </div>
        {
          isOpen && <div className='background-layer-points' onClick={handleCloseNabvar}></div>
        }
        
    </header>  
    </>
  )
}

export default HeaderPoints




