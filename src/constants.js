const BREAKPOINTS = {
  tabletMin: 550,
  largeTabletMin: 770,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  largeTabletAndUp: `(min-width: ${BREAKPOINTS.largeTabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

// Font Constants
const FONTS = {
  titleFont: `
    font-family: "TitleFont", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  `,
};

export { BREAKPOINTS, QUERIES, FONTS };
