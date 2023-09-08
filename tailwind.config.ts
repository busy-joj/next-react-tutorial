/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/app/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/app/components/*.{js,ts,jsx,tsx}',
        './src/app/pages/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            // => @media (min-width: 640px) { ... }
            sm: '640px',
            // => @media (min-width: 768px) { ... }
            md: '768px',
            // => @media (min-width: 1024px) { ... }
            lg: '1024px',
        },
        colors: {
            // 여기어때 메인 컬러
            'main-red': '#f7323f',
            white: '#ffffff',
            black: '#000000de',
        },
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            const Header = {
                header: {
                    position: 'fixed',
                    backgroundColor: '#f7323f',
                    width: '100%',
                    zIndex: '999',
                    transition: '0.4s',
                    '.gnb-logo': {
                        color: '#ffffff',
                    },
                    '.gnb-cata-link': {
                        position: 'relative',
                        color: '#ffffffcc',
                        lineHeight: '2rem',
                        '&:hover': {
                            color: '#ffffff',
                        },
                    },
                },
                '.scroll': {
                    backgroundColor: '#ffffff',
                    color: '#000000de',
                    transition: '0.4s',
                    boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.1)',
                    '.gnb-logo a': {
                        color: '#f7323f',
                    },
                    '.gnb-cata-link': {
                        color: '#000000de',
                        '&:hover': {
                            color: '#000000de',
                        },
                    },
                },
            }

            addComponents(Header)
        },
    ],
}
