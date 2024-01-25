import React, { CSSProperties } from 'react';
import logo from '../../assets/header/logo-sys-bg.png';

interface InfoCardProps {
    name: string;
    date: string;
}

const InfoCard = ({ name, date }: InfoCardProps) => {
    const cardStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#fff',
    };

    const logoStyle: CSSProperties = {
        width: '50px',
        marginRight: '15px',
    };

    const textContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column' as 'column',
    };

    const nameStyle: CSSProperties = {
        fontWeight: 'bold',
    };

    const dateStyle: CSSProperties = {
        color: '#666',
        fontSize: '0.85rem',
    };

    return (
        <div style={cardStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <div style={textContainerStyle}>
                <div style={nameStyle}>{name}</div>
                <div style={dateStyle}>{date}</div>
            </div>
        </div>
    );
};

export default InfoCard;