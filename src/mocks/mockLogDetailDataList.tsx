export type LogDetail = {
    ID_Plan: string;
    Usuario: string;
    Lineal_modificada: number;
    Campo_modificado: string;
    Valor_previo: string;
    Valor_nuevo: string;
    Fecha_modificación: string;
};

export const logDetails: LogDetail[] = [
    {
        ID_Plan: '5782',
        Usuario: 'Juan Pérez',
        Lineal_modificada: 1,
        Campo_modificado: 'Precio de compra',
        Valor_previo: '4250€',
        Valor_nuevo: '7100€',
        Fecha_modificación: '2022-02-12',
    },
    {
        ID_Plan: '2578',
        Usuario: 'María Rodríguez',
        Lineal_modificada: 2,
        Campo_modificado: 'Precio de venta',
        Valor_previo: '3200€',
        Valor_nuevo: '5200€',
        Fecha_modificación: '2022-07-05',
    },
    {
        ID_Plan: '8395',
        Usuario: 'Pedro Gómez',
        Lineal_modificada: 1,
        Campo_modificado: 'Cantidad de compra',
        Valor_previo: '6',
        Valor_nuevo: '9',
        Fecha_modificación: '2022-09-28',
    },
    {
        ID_Plan: '4827',
        Usuario: 'Laura Torres',
        Lineal_modificada: 3,
        Campo_modificado: 'Precio de venta',
        Valor_previo: '600€',
        Valor_nuevo: '900€',
        Fecha_modificación: '2022-03-19',
    },
    {
        ID_Plan: '7214',
        Usuario: 'Antonio García',
        Lineal_modificada: 2,
        Campo_modificado: 'Cantidad de compra',
        Valor_previo: '25',
        Valor_nuevo: '45',
        Fecha_modificación: '2022-11-07',
    },
    {
        ID_Plan: '1536',
        Usuario: 'Carmen López',
        Lineal_modificada: 1,
        Campo_modificado: 'Precio de compra',
        Valor_previo: '1900€',
        Valor_nuevo: '4100€',
        Fecha_modificación: '2022-06-14',
    },
    {
        ID_Plan: '6897',
        Usuario: 'Manuel Fernández',
        Lineal_modificada: 2,
        Campo_modificado: 'Precio de compra',
        Valor_previo: '1800€',
        Valor_nuevo: '5100€',
        Fecha_modificación: '2022-09-02',
    },
    {
        ID_Plan: '3265',
        Usuario: 'Isabel Martínez',
        Lineal_modificada: 1,
        Campo_modificado: 'Precio de venta',
        Valor_previo: '3800€',
        Valor_nuevo: '6700€',
        Fecha_modificación: '2022-05-22',
    },
    {
        ID_Plan: '4803',
        Usuario: 'Alejandro Ramírez',
        Lineal_modificada: 3,
        Campo_modificado: 'Precio de compra',
        Valor_previo: '15/06/2022',
        Valor_nuevo: '01/07/2022',
        Fecha_modificación: '2022-03-11',
    },
    {
        ID_Plan: '7502',
        Usuario: 'Sofía Morales',
        Lineal_modificada: 2,
        Campo_modificado: 'Precio de compra',
        Valor_previo: '2700€',
        Valor_nuevo: '6100€',
        Fecha_modificación: '2022-08-28',
    },
    {
        ID_Plan: '9658',
        Usuario: 'David Silva',
        Lineal_modificada: 1,
        Campo_modificado: 'Precio de venta',
        Valor_previo: '3100€',
        Valor_nuevo: '8100€',
        Fecha_modificación: '2022-04-06',
    },
];
