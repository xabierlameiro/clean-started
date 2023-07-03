export type Plan = {
    id_plan: string;
    titular: string;
    cliente: string;
    canal: string;
    anunciante: string;
    marca: string;
    campaña: string;
    fecha_contable: string;
    importe: string;
    estado: string;
};

export const PlansDataList: Plan[] = [
    {
        id_plan: '1001',
        titular: 'Juan Pérez',
        cliente: 'Coca-Cola',
        canal: 'Display',
        anunciante: 'Marca X',
        marca: 'Producto Y',
        campaña: 'Campaña Z',
        fecha_contable: '2023-01-01',
        importe: '$1000',
        estado: 'Abierto',
    },
    {
        id_plan: '1002',
        titular: 'María López',
        cliente: 'Telefónica',
        canal: 'Display',
        anunciante: 'Marca Y',
        marca: 'Producto Z',
        campaña: 'Campaña X',
        fecha_contable: '2023-02-15',
        importe: '$2000',
        estado: 'Cerrado',
    },
    {
        id_plan: '1003',
        titular: 'Luis García',
        cliente: 'BBVA',
        canal: 'Display',
        anunciante: 'Marca Z',
        marca: 'Producto X',
        campaña: 'Campaña Y',
        fecha_contable: '2023-03-30',
        importe: '$1500',
        estado: 'Abierto',
    },
    {
        id_plan: '1004',
        titular: 'Ana Martínez',
        cliente: 'Mercadona',
        canal: 'Display',
        anunciante: 'Marca X',
        marca: 'Producto Y',
        campaña: 'Campaña Z',
        fecha_contable: '2023-04-12',
        importe: '$1200',
        estado: 'Abierto',
    },
    {
        id_plan: '1005',
        titular: 'Carlos Rodríguez',
        cliente: 'Iberdrola',
        canal: 'Display',
        anunciante: 'Marca Y',
        marca: 'Producto Z',
        campaña: 'Campaña X',
        fecha_contable: '2023-05-20',
        importe: '$1800',
        estado: 'Cerrado',
    },
];
