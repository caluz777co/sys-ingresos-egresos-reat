import React from 'react';
import FieldRegister from '../common/FieldRegister';

const CardRegister: React.FC = () => {
    return (
        <div className="card m-1" style={{ width: '550px', height: '400px' }}>
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Título de la tarjeta</h5>
                    <div>
                        <button className="btn btn-primary me-2">Buscar</button>
                        <button className="btn btn-success">Agregar</button>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{ overflow: 'auto' }}>
                <FieldRegister/>
                <FieldRegister/>
                <FieldRegister/>
                <FieldRegister/>
                <FieldRegister/>
                <FieldRegister/>
                
                 </div>
            <div className="card-footer">
                Aquí va el contenido del footer
            </div>
        </div>
    );
};

export default CardRegister;

