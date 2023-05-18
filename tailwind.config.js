/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'menu-primary-color': '#4F46E5',
                'menu-secondary-color': '#0F172A',
                'primary-color': '#4F46E5',
                'secondary-color': '#0F172A',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
