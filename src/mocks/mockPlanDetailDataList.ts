export type PlanDetail = {
    id_linea: string;
    orden_compra: string;
    panificador: string;
    tipo_documento: string;
    tipo_cliente: string;
    canal: string;
    discripción: string;
    proveedor: string;
    suporte: string;
    formato: string;
    comentários: string;
    fecha_inicio: string;
    fecha_fin: string;
    tipo_cv: string;
    cantidad_compra: string;
    precio_compra: string;
    importe_venta: string;
    margen_real: string;
    venta_fee: string;
    referencia_cliente: string;
    importe_venta_estimado: string;
    margen_estimado: string;
};

export const PlanDataList: PlanDetail[] = [
    {
        id_linea: '1',
        orden_compra: '21543',
        panificador: 'Juan',
        tipo_documento: 'venta',
        tipo_cliente: 'NB',
        canal: 'display',
        discripción: 'una descripcion',
        proveedor: 'proveedor',
        suporte: 'suporte',
        formato: 'formato',
        comentários: 'un comentario',
        fecha_inicio: '2023-01-01',
        fecha_fin: '2023-05-01',
        tipo_cv: 'coste fijo',
        cantidad_compra: '10',
        precio_compra: '100,00 €',
        importe_venta: '1.000,00 €',
        margen_real: '300,00 €',
        venta_fee: 'n/a',
        referencia_cliente: '23546',
        importe_venta_estimado: '2.000,00 €',
        margen_estimado: '500 €',
    },
    {
        id_linea: '2',
        orden_compra: '21543',
        panificador: 'Juan',
        tipo_documento: 'venta',
        tipo_cliente: 'NB',
        canal: 'display',
        discripción: 'una descripcion',
        proveedor: 'proveedor',
        suporte: 'suporte',
        formato: 'formato',
        comentários: 'un comentario',
        fecha_inicio: '2023-01-01',
        fecha_fin: '2023-05-01',
        tipo_cv: 'coste fijo',
        cantidad_compra: '10',
        precio_compra: '100,00 €',
        importe_venta: '1.000,00 €',
        margen_real: '300,00 €',
        venta_fee: 'n/a',
        referencia_cliente: '23546',
        importe_venta_estimado: '2.000,00 €',
        margen_estimado: '500 €',
    },
    {
        id_linea: '3',
        orden_compra: '21543',
        panificador: 'Juan',
        tipo_documento: 'venta',
        tipo_cliente: 'NB',
        canal: 'display',
        discripción: 'una descripcion',
        proveedor: 'proveedor',
        suporte: 'suporte',
        formato: 'formato',
        comentários: 'un comentario',
        fecha_inicio: '2023-01-01',
        fecha_fin: '2023-05-01',
        tipo_cv: 'coste fijo',
        cantidad_compra: '10',
        precio_compra: '100,00 €',
        importe_venta: '1.000,00 €',
        margen_real: '300,00 €',
        venta_fee: 'n/a',
        referencia_cliente: '23546',
        importe_venta_estimado: '2.000,00 €',
        margen_estimado: '500 €',
    },
];
