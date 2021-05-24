const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                '11': '11px',
                '22': '22px',
            },
            colors: {
                gray: color,
                pink: 'orange',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({addComponents, theme}) {
            const buttons = {
                '.btn': {
                    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
                    borderRadius: theme('borderRadius.md'),
                    fontWeight: theme('fontWeight.600'),
                },
                '.btn-indigo-2': {
                    backgroundColor: theme('colors.indigo.500'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.indigo.600')
                    },
                },
            }
            addComponents(buttons)
        })
    ]
}
