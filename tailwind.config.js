/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                //25% lighter, regular, 25% darker
                'primary-color-light': '#8d88ee',
                'primary-color': '#4F46E5',
                'primary-color-dark': '#281dd2',

                'secondary-color': '#0F172A',

                'terciary-color-light': '#808080',
                'terciary-color': '#666666',
                'terciary-color-dark': '#525252',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
