/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                // verde, azul, naranja, maron
                //'#16a34a''#4F46E5''#fb923c''#713f12'

                //25% lighter, regular, 25% darker
                'primary-color-light': '#1CD05E',
                'primary-color': '#16a34a',
                'primary-color-dark': '#107636',

                'secondary-color': '#0F172A',

                'terciary-color-light': '#808080',
                'terciary-color': '#666666',
                'terciary-color-dark': '#525252',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
