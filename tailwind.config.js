/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                nav: "#222222",
                page: "#4B4E6D",
                card: "#FFFFFF",
                "card-hover": "#95A3B3",
                "default-text": "#222222",
                "form-button": "#84DCC6",
                "form-button-hover": "#222222",
            },
        },
    },
    plugins: [],
};

