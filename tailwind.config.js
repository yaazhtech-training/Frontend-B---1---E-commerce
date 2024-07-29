/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [  
    function ({ addUtilities, theme, variants }) {
      const gradientTextUtilities = {};
 

      // Define gradient text colors here
      const gradientColors = {
        // 'from-blue-to-pink': {
        //   from: theme('colors.blue.500'),
        //   to: theme('colors.pink.500'),
        // },
        // 'from-red-to-green': {
        //   from: theme('colors.red.500'),
        //   to: theme('colors.green.500'),
        // },
        // Add more gradient color combinations as needed
      };
 
      // Generate gradient text color utilities
      Object.keys(gradientColors).forEach((name) => {
        const gradient = gradientColors[name];
        const gradientTextClass = `.text-gradient-${name}`;
 
        gradientTextUtilities[gradientTextClass] = {
          background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
          '-webkit-background-clip': 'text',
          color: 'transparent',
        };
      });
 
      addUtilities(gradientTextUtilities, variants('textColor'));
    },
  ],
};
 

