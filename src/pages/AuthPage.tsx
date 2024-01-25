import React from 'react';
import "../styles/AuthPage.css"
import "../styles/App.css"

const AuthPage: React.FC = () => {
  return (
    <div className="container">
        <div className="logo"></div> {/* Aquí podrías incluir una imagen o dejarlo así para un fondo de color */}
        <h1 className="title">Sistema de gestión Gastos e Ingresos</h1>
        <input type="text" className="input-field" placeholder="Usuario" />
        <input type="password" className="input-field" placeholder="Contraseña" />
        <button className="button">Ingresar</button>
      </div>
  );
};

export default AuthPage;
