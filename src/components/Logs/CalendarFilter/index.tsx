import React from 'react';

const DateRangePicker: React.FC = () => {
    return (
        <div className="flex items-center justify-end mb-10">
            <span className="m-0 mr-2">Desde</span>
            <input type="date" className="mr-2" />
            <span className="m-0 mr-2">hasta</span>
            <input type="date" className="mr-2" />
            <button className="bg-green-500 text-white w-24 rounded-md">Filtrar</button>
        </div>
    );
};

export default DateRangePicker;
