export type Person = {
    id: string;
    titular: string;
    amount: number;
    campaing: string;
    stateDoc: string;
    numDoc: number;
    customer: string;
};

export const PersonsDataList: Person[] = [
    {
        id: '8889',
        titular: 'Bahar Constantia',
        amount: 1984,
        stateDoc: 'Cerrado',
        campaing: 'Computer Science',
        customer: 'Bahar Constantia',
        numDoc: 3423432,
    },
    {
        id: '2222',
        titular: 'Harold Nona',
        amount: 1961,
        stateDoc: 'Cerrado',
        campaing: 'Communications',
        customer: 'Harold Nona',
        numDoc: 3423432,
    },
    {
        id: '3333',
        titular: 'Raginolf Arnulf',
        amount: 1991,
        stateDoc: 'Abierto',
        campaing: 'Business',
        customer: 'Raginolf Arnulf',
        numDoc: 3423432,
    },
    {
        id: '4444',
        titular: 'Marvyn Wendi',
        amount: 1978,
        stateDoc: 'Abierto',
        campaing: 'Psychology',
        customer: 'Marvyn Wendi',
        numDoc: 3423432,
    },
];
