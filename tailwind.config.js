
tailwind.config = {
  theme: {
    extend: {
      //Container
      maxWidth: {
        myContainer: "1170px",
      },

      //Colors
      colors: {
        headerBg: 'rgba(22, 12, 109, 0.5)',
        hoverColor: '#1BBF00',
        bannerOverlay: 'rgba(106, 98, 197, 0.9)',
        whyTextColor: '#726E9E',
        circleColor: 'rgba(25, 191, 0, 0.3)',
        circleHoverColor: 'rgba(255, 255, 255, 0.3)',
      },
      
      //Font family
      fontFamily: {
        openSans: ["Open Sans"],
        paprika : ["Paprika"],
      },
      //Background Image
      backgroundImage: {
        bannerBg: "url('./images/bannerBg.png')",
        cardBg: "url('./images/cardBg.png')",
        whyBg: "url('./images/whyBg.png')",
      }
    },
  },
  plugins: [],
};
