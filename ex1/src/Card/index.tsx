import React from 'react';

interface CardProps {
  title: string;
  description: string;
  size: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, size, onIncrease, onDecrease }) => {
  const cardStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size / 1.5}px`,
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
      <button
          onClick={onDecrease}
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')}
        >
          -
        </button>
        <button
          onClick={onIncrease}
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
