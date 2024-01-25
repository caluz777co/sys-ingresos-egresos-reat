import React from 'react';
import { FaTrash, FaSave } from 'react-icons/fa';

const FieldRegister: React.FC = () => {
    return (
        <div className="row p-1">
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Usuario" />
            </div>
            <div className="col-4">
                <input type="text" className="form-control" placeholder="Entrada" />
            </div>

            <div className="col-2">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger">
                        <FaTrash />
                    </button>
                    <button className="btn btn-success">
                        <FaSave />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FieldRegister;
