export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: {
                    400: '#ffde59',
                    500: '#f2d144',
                }
            },
            animation: {
                pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.8 },
                },
            },
        },
    },
    plugins: [],
};