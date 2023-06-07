import React from 'react';

const DateRangePicker: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <span style={{ margin: '0 10px' }}>Desde</span>
            <input type="date" />
            <span style={{ margin: '0 10px' }}>hasta</span>
            <input type="date" style={{ marginRight: '10px' }} />
            <button style={{ backgroundColor: 'green', color: 'white', width: '120px', borderRadius: '4px' }}>
                Filtrar
            </button>
        </div>
    );
};

export default DateRangePicker;
