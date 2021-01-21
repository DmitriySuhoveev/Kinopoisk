import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieSearchNav.css'
const MovieSearchNav = () =>{


    return(
        <div className="MovieSearchNavDiv">
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SearchTheFilm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown className='NavDropdown' title="Фильмы" id="film-nav-dropdown">
        <NavDropdown.Item href="#action/1.1"></NavDropdown.Item>
        <NavDropdown.Item href="#action/1.2">Артхаус</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.3">Боевик</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.4">Военные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.5">Детективы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.6">Для всей семьи</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.7">Катастрофы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.8">Для детей</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.9">Документальные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.10">Драмы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.11">Исторические</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.12">Комедии</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.13">Криминальные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.14">Мелодрамы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.15">Мистические</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.16">Приключения</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.17">Триллеры</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.18">Ужасы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.19">Фантастика</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.20">Фэнтези</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className='NavDropdown' title="Сериалы" id="serial-nav-dropdown">
        <NavDropdown.Item href="#action/1.1">Боевик</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.2">Военные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.3">Детективы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.4">Драмы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.5">Исторические</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.6">Комедийные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.7">Криминальные</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.8">Мелодрамы</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.9">Приключения</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.10">Романтический</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.11">Триллеры</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.12">Фантастические</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className='NavDropdown' title="Мультфильмы" id="cartoon-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Советские</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Аниме</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Для взрослых</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Для детей</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Для взрослых</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Полнометражные</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Приключения</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.8">Сериалы</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
        </div>
    )
}

export default MovieSearchNav