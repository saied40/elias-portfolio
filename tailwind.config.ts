import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "#282C33",
        primary: {
          DEFAULT: "#C778DD",
          20: "#C778DD33",
        },
        gray: {
          DEFAULT: "#ABB2BF",
          20: "#ABB2BF33",
        },
      },
      fontFamily: {
        firaCode: ["var(--font-fira-code)"],
      },
      spacing: {
        17: "4.25rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      animation: {
        "show-ltr": "show-ltr 800ms ease-in-out",
        "show-rtl": "show-rtl 800ms ease-in-out",
        "bounce-slow": "bounce 4s infinite",
        "bounce-slower": "bounce 12s infinite",
      },
      keyframes: {
        "show-ltr": {
          "0%": {
            left: "-200%",
          },
          "100%": {
            left: "0",
          },
        },
        "show-rtl": {
          "0%": {
            right: "-100%",
          },
          "100%": {
            right: "0",
          },
        },
      },
    },
  },
  plugins: [
    ({ addComponents }: { addComponents: any }): void => {
      addComponents({
        "::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#C778DD",
          borderRadius: "50px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#ABB2BF1a",
        },
        "::selection": {
          backgroundColor: "#C778DD",
          color: "#282C33",
        },
        html: {
          "@media (max-width: 1280px)": {
            fontSize: "14px",
          },
          "@media (max-width: 1024px)": {
            fontSize: "12px",
          },
          "@media (max-width: 640px)": {
            fontSize: "10px",
          },
        },
        body: {
          backgroundColor: "#282C33",
          color: "#fff",
          // fontFamily: "'Fira Code', monospace !important",
          overflowX: "hidden",
        },
        ".container": {
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          "@media (max-width: 640px)": {
            width: "90%",
          },
        },
        ".header": {
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "50",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-10",
            backdropFilter: "blur(12px)",
          },
          ".container": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 0 .5rem 0",
            ".menu-cont": {
              display: "flex",
              alignItems: "center",
              ".menu-btn": {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: ".5rem",
                width: "2.5rem",
                margin: ".5rem 1.5rem",
                border: "none",
                outline: "none",
                background: "transparent",
                "@media (min-width: 1024px)": {
                  display: "none",
                },
                span: {
                  display: "inline-block",
                  backgroundColor: "#d9d9d9",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  height: ".25rem",
                  "&:is(.dark *)": { backgroundColor: "#f1f5f9" },
                  "&:nth-child(1)": { width: "100%" },
                  "&:nth-child(2)": { width: "62.5%" },
                },
                "&.open": {
                  span: {
                    "&:nth-child(1)": {
                      transform: "rotate(45deg) translate(3px, 3px)",
                    },
                    "&:nth-child(2)": {
                      transform: "rotate(-45deg) translate(3px, -3px)",
                      width: "100%",
                    },
                  },
                },
              },
              ".menubar": {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "2rem",
                width: "100%",
                "@media (max-width: 768px)": {
                  position: "fixed",
                  left: "100%",
                  top: "50px",
                  height: "calc(100vh - 50px)",
                  flexDirection: "column",
                  paddingTop: "5rem",
                  paddingLeft: "10%",
                  backdropFilter: "blur(24px)",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                },
                "@media (min-width: 768px)": {
                  justifyContent: "space-between",
                },
                ".nav-link": {
                  fontSize: "1rem",
                  lineHeight: "1.75rem",
                  fontWeight: "400",
                  textAlign: "center",
                  textWrap: "nowrap",
                  color: "#ABB2BF",
                  "&:hover": {
                    color: "#fff",
                  },
                  "&.active": {
                    color: "#fff",
                    fontWeight: "500",
                  },
                  "&::before": {
                    content: "'#'",
                    color: "#C778DD",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "1.875rem",
                    lineHeight: "2.25rem",
                  },
                },
              },
            },
          },
        },
        ".section-heading": {
          fontSize: "2.25rem",
          fontWeight: "500",
          position: "relative",
          "&::before": {
            content: "'#'",
            color: "#C778DD",
          },
          "&.after::after": {
            content: "''",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translate(calc(100% + 1rem), 50%)",
            width: "200%",
            height: "1px",
            backgroundColor: "#C778DD",
            "@media (max-width: 640px)": {
              width: "70%",
            },
          },
        },
        ".primary-btn": {
          fontSize: "1rem",
          fontWeight: "500",
          padding: ".5rem 1rem",
          border: "1px solid #C778DD",
          cursor: "pointer",
          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "#C778DD33",
          },
        },
        ".gray-btn": {
          fontSize: "1rem",
          fontWeight: "500",
          color: "#ABB2BF",
          padding: ".5rem 1rem",
          border: "1px solid #ABB2BF",
          cursor: "pointer",
          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "#ABB2BF33",
          },
        },
        ".page-title": {
          paddingTop: "5rem",
          h2: {
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: ".75rem",
            "&::before": {
              content: "'/'",
              color: "#C778DD",
            },
          },
          p: {
            fontSize: "1rem",
            fontWeight: "400",
          },
        },
        ".project-card": {
          width: "100%",
          height: "fit-content",
          border: "1px solid #ABB2BF",
          transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.05)",
          },
          img: {
            width: "100%",
          },
          ".tools": {
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: ".5rem",
            padding: ".5rem",
            borderTop: "1px solid #ABB2BF",
            borderBottom: "1px solid #ABB2BF",
            li: {
              fontSize: "1rem",
              fontWeight: "400",
              color: "#ABB2BF",
            },
          },
          ".body": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1rem",
            h3: {
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "500",
            },
            p: {
              fontSize: "1rem",
              fontWeight: "400",
              color: "#ABB2BF",
            },
            ".btns": {
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            },
          },
        },
      });
    },
  ],
  corePlugins: {
    textOpacity: false,
    ringOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    placeholderOpacity: false,
  },
};
export default config;
