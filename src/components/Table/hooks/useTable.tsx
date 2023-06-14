import { Person } from '@/mocks/mockMakeDataList';
import { LogEntry } from '@/mocks/mockLogsDataList';
import React from 'react';

const useTable = (
    data: (Person | LogEntry)[],
    setData: React.Dispatch<React.SetStateAction<(Person | LogEntry)[]>>
) => {
    const handleAddRow = () => {
        let newData = {} as Person | LogEntry;

        newData = {
            id: crypto.randomUUID().slice(0, 8),
            titular: '',
            amount: 0,
            stateDoc: '',
            campaing: '',
            customer: '',
            numDoc: 0,
        };

        setData([...data, newData]);
    };

    return {
        handleAddRow,
    };
};

export default useTable;
