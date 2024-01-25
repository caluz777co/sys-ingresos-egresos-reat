import React from 'react';
import InfoCard from '../components/layout/InfoCard';
import MenuCard from '../components/layout/MenuCard';
import ButtonActions from '../components/common/ButtonActions';
import CardRegister from '../components/layout/CardRegister';

function HomePage() {
    return (
        <div className="row m-2">
            <div className="col-md-3 p-2 border rounded shadow-sm">
                <div className="d-flex flex-column">
                    <div className="mb-3" style={{ height: '14vh' }}>
                        <InfoCard name="[nombre-usuario]" date="[fecha-utlima-modificacion]" />
                    </div>
                    <div className="flex-grow-1 mb-3 p-2" style={{ height: '70vh' }}>
                        <MenuCard />
                    </div>
                    <div style={{ height: '10vh' }}>
                        Row 3
                    </div>
                </div>
            </div>
            <div className="col-md-9 p-2 border rounded shadow-sm">
                <div className="d-flex flex-column">
                    <div className="mb-3 p-2" style={{ height: '5vh' }}>
                        <div className="row border border-gray rounded">
                            <div className="col p-1 d-flex justify-content-center" style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                Cuentas Cafeteria Enero 2023.xlsx
                            </div>
                            <div className="col d-flex justify-content-end">
                                <div className="p-2">
                                    <ButtonActions />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3" style={{ height: '20vh' }}>
                        <div className="row p-2">
                            <div className="col border rounded">
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        <strong>Total Gastos</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        {12345}
                                    </div>
                                </div>
                            </div>
                            <div className="col border rounded">
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        <strong>Total Gastos</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        {12345}
                                    </div>
                                </div>
                            </div>
                            <div className="col border rounded">
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        <strong>Total Gastos</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center align-items-center">
                                        {12345}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-1 mb-3 p-2" style={{ height: '70vh', overflow: 'auto', display: 'flex', flexWrap: 'wrap' }}>
                    <CardRegister/>
                    <CardRegister/>
                    <CardRegister/>
                    <CardRegister/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
