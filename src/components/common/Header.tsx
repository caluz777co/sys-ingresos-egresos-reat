import React from 'react';
import logo from '../../assets/header/logo_sys.png'; // Asegúrate de cambiar esto por la ruta correcta de tu logo

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <h1 style={titleStyle}>SISTEMA DE INGRESOS Y EGRESOS</h1>
    </header>
  );
};

// Estilos para el encabezado, logo y título
const headerStyle = {
  backgroundColor: '#fff', // Fondo blanco
  color: '#333',           // Color del texto
  display: 'flex',         // Flex para alinear logo y título
  alignItems: 'center',    // Centrar elementos verticalmente
  padding: '10px',         // Espaciado interno
};

const logoStyle = {
  width: '50px',           // Ancho del logo
  marginRight: '10px',     // Espacio a la derecha del logo
};

const titleStyle = {
  margin: 0,               // Quitar margen del título
};

export default Header;