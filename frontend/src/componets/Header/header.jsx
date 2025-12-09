import React from "react";
import './header.css';
import '../../assets/styles.css';

function Header() {
  return (
    <header className="header-container">
    <nav className="nav-container">
        <ul>
            <li><a href="/" id="home">Home</a></li>
            <li>
                <a href="#" id="sucursales">Sucursales</a>
                <ul className="submenu-sucursales">
                    <li><a href="/agregar_sucursales" id="sucursal1">Agregar</a></li>
                    <li><a href="#" id="sucursal2">Editar</a></li>
                    <li><a href="#" id="sucursal3">Eliminar</a></li>
                </ul>
            </li>
            <li>
                <a href="#" id="marcas">Marcas</a>
                <ul className="submenu-marcas">
                    <li><a href="/agregar_marcas" id="marca1">Agregar</a></li>
                    <li><a href="#" id="marca2">Editar</a></li>
                    <li><a href="#" id="marca3">Eliminar</a></li>
                </ul>
            </li>
            <li>
                <a href="#" id="tipo_producto">Tipo de producto</a>
                <ul className="submenu-tipo_producto">
                    <li><a href="/agregarTipo_producto" id="tipo_producto1">Agregar</a></li>
                    <li><a href="#" id="tipo_producto2">Editar</a></li>
                    <li><a href="#" id="tipo_producto3">Eliminar</a></li>
                </ul>
            </li>
            <li>
                <a href="#" id="productos">Productos</a>
                <ul className="submenu-productos">
                    <li><a href="/agregar" id="agregar">Agregar</a></li>
                    <li><a href="/actualizar_producto" id="editar">Editar</a></li>
                    <li><a href="#" id="eliminar">Eliminar</a></li>
                </ul>
            </li>
            <li>
                <a href="#" id="info">Info</a>
                <ul className="submenu-info">
                    <li><a href="#" id="acerca">Ventas</a></li>
                    <li><a href="#" id="contacto">Contacto</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div className="dark_mode">
        <button id="toggleDarkMode">🌙</button>
    </div>
</header>
    );
}

export default Header;