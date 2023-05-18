/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'menu-primary-color': '#0ea5e9',
                'menu-secondary-color': '#000',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
