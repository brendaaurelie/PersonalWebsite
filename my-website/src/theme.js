import { grommet } from "grommet/themes";

export const theme = 
    {
        "name": "theming",
        "rounding": 2,
        "spacing": 24,
        "defaultMode": "light",
        "global": {
          "colors": {
            "brand": {
              "dark": "neutral",
              "light": "neutral!"
            },
            "background": {
              "dark": "#111111",
              "light": "#f4f4f4"
            },
            "background-back": {
              "dark": "#111111",
              "light": "#f4f4f4"
            },
            "background-front": {
              "dark": "#222222",
              "light": "neutral"
            },
            "background-contrast": {
              "dark": "#FFFFFF11",
              "light": "#ffff"
            },
            "text": {
              "dark": "#EEEEEE",
              "light": "#1b1a19"
            },
            "text-strong": {
              "dark": "#FFFFFF",
              "light": "#000000"
            },
            "text-weak": {
              "dark": "#CCCCCC",
              "light": "#444444"
            },
            "text-xweak": {
              "dark": "#999999",
              "light": "#666666"
            },
            "border": {
              "dark": "#444444",
              "light": "#CCCCCC"
            },
            "control": "neutral!",
            "active-background": "neutral",
            "active-text": "text-strong",
            "selected-background": "#3e4028",
            "selected-text": "text-strong",
            "status-critical": "#FF4040",
            "status-warning": "#FFAA15",
            "status-ok": "#00C781",
            "status-unknown": "#CCCCCC",
            "status-disabled": "#CCCCCC",
            "graph-0": "brand",
            "graph-1": "status-warning",
            "neutral": {
              "dark": "#3e4028",
              "light": "#ebded4"
            },
            "neutral!": "#c47f38",
            "focus": "#3e4028"
          },
          "font": {
            "family": "\"Muli\"",
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px",
            "face": "/* vietnamese */\n@font-face {\n  font-family: 'Muli';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/muli/v27/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40e6fwniDtzNAAw.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Muli';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/muli/v27/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50e6fwniDtzNAAw.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Muli';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/muli/v27/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30e6fwniDtzM.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
          },
          "active": {
            "background": "active-background",
            "color": "active-text"
          },
          "hover": {
            "background": "active-background",
            "color": "active-text"
          },
          "selected": {
            "background": "selected-background",
            "color": "selected-text"
          },
          "control": {
            "border": {
              "radius": "2px"
            }
          },
          "drop": {
            "border": {
              "radius": "2px"
            }
          },
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "4px",
            "large": "12px",
            "xlarge": "24px"
          },
          "breakpoints": {
            "small": {
              "value": 768,
              "borderSize": {
                "xsmall": "1px",
                "small": "2px",
                "medium": "4px",
                "large": "6px",
                "xlarge": "12px"
              },
              "edgeSize": {
                "none": "0px",
                "hair": "1px",
                "xxsmall": "2px",
                "xsmall": "3px",
                "small": "6px",
                "medium": "12px",
                "large": "24px",
                "xlarge": "48px"
              },
              "size": {
                "xxsmall": "24px",
                "xsmall": "48px",
                "small": "96px",
                "medium": "192px",
                "large": "384px",
                "xlarge": "768px",
                "full": "100%"
              }
            },
            "medium": {
              "value": 1536
            },
            "large": {}
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "3px",
            "xsmall": "6px",
            "small": "12px",
            "medium": "24px",
            "large": "48px",
            "xlarge": "96px",
            "responsiveBreakpoint": "small"
          },
          "input": {
            "padding": "12px",
            "weight": 600
          },
          "spacing": "24px",
          "size": {
            "xxsmall": "48px",
            "xsmall": "96px",
            "small": "192px",
            "medium": "384px",
            "large": "768px",
            "xlarge": "1152px",
            "xxlarge": "1536px",
            "full": "100%"
          }
        },
        "chart": {},
        "diagram": {
          "line": {}
        },
        "meter": {},
        "tip": {
          "content": {
            "background": {
              "color": "background"
            },
            "elevation": "none",
            "round": false
          }
        },
        "button": {
          "border": {
            "width": "2px",
            "radius": "18px"
          },
          "padding": {
            "vertical": "4px",
            "horizontal": "22px"
          }
        },
        "checkBox": {
          "check": {
            "radius": "2px"
          },
          "toggle": {
            "radius": "24px",
            "size": "48px"
          },
          "size": "24px"
        },
        "radioButton": {
          "size": "24px"
        },
        "formField": {
          "border": {
            "color": "border",
            "error": {
              "color": {
                "dark": "white",
                "light": "status-critical"
              }
            },
            "position": "inner",
            "side": "bottom"
          },
          "content": {
            "pad": "small"
          },
          "disabled": {
            "background": {
              "color": "status-disabled",
              "opacity": "medium"
            }
          },
          "error": {
            "color": "status-critical",
            "margin": {
              "vertical": "xsmall",
              "horizontal": "small"
            }
          },
          "help": {
            "color": "dark-3",
            "margin": {
              "start": "small"
            }
          },
          "info": {
            "color": "text-xweak",
            "margin": {
              "vertical": "xsmall",
              "horizontal": "small"
            }
          },
          "label": {
            "margin": {
              "vertical": "xsmall",
              "horizontal": "small"
            },
            "color": "active-background"
          },
          "margin": {
            "bottom": "small"
          },
          "round": "2px"
        },
        "calendar": {
          "small": {
            "fontSize": "14.8px",
            "lineHeight": 1.375,
            "daySize": "27.43px"
          },
          "medium": {
            "fontSize": "18px",
            "lineHeight": 1.45,
            "daySize": "54.86px"
          },
          "large": {
            "fontSize": "27.6px",
            "lineHeight": 1.11,
            "daySize": "109.71px"
          }
        },
        "clock": {
          "analog": {
            "hour": {
              "width": "8px",
              "size": "24px"
            },
            "minute": {
              "width": "4px",
              "size": "12px"
            },
            "second": {
              "width": "3px",
              "size": "9px"
            },
            "size": {
              "small": "72px",
              "medium": "96px",
              "large": "144px",
              "xlarge": "216px",
              "huge": "288px"
            }
          },
          "digital": {
            "text": {
              "xsmall": {
                "size": "11.6px",
                "height": 1.5
              },
              "small": {
                "size": "14.8px",
                "height": 1.43
              },
              "medium": {
                "size": "18px",
                "height": 1.375
              },
              "large": {
                "size": "21.2px",
                "height": 1.167
              },
              "xlarge": {
                "size": "24.4px",
                "height": 1.1875
              },
              "xxlarge": {
                "size": "30.8px",
                "height": 1.125
              }
            }
          }
        },
        "heading": {
          "level": {
            "1": {
              "small": {
                "size": "31px",
                "height": "37px",
                "maxWidth": "739px"
              },
              "medium": {
                "size": "44px",
                "height": "50px",
                "maxWidth": "1046px"
              },
              "large": {
                "size": "69px",
                "height": "75px",
                "maxWidth": "1661px"
              },
              "xlarge": {
                "size": "95px",
                "height": "101px",
                "maxWidth": "2275px"
              }
            },
            "2": {
              "small": {
                "size": "28px",
                "height": "34px",
                "maxWidth": "662px"
              },
              "medium": {
                "size": "37px",
                "height": "43px",
                "maxWidth": "893px"
              },
              "large": {
                "size": "47px",
                "height": "53px",
                "maxWidth": "1123px"
              },
              "xlarge": {
                "size": "56px",
                "height": "62px",
                "maxWidth": "1354px"
              }
            },
            "3": {
              "small": {
                "size": "24px",
                "height": "30px",
                "maxWidth": "586px"
              },
              "medium": {
                "size": "31px",
                "height": "37px",
                "maxWidth": "739px"
              },
              "large": {
                "size": "37px",
                "height": "43px",
                "maxWidth": "893px"
              },
              "xlarge": {
                "size": "44px",
                "height": "50px",
                "maxWidth": "1046px"
              }
            },
            "4": {
              "small": {
                "size": "21px",
                "height": "27px",
                "maxWidth": "509px"
              },
              "medium": {
                "size": "24px",
                "height": "30px",
                "maxWidth": "586px"
              },
              "large": {
                "size": "28px",
                "height": "34px",
                "maxWidth": "662px"
              },
              "xlarge": {
                "size": "31px",
                "height": "37px",
                "maxWidth": "739px"
              }
            },
            "5": {
              "small": {
                "size": "16px",
                "height": "22px",
                "maxWidth": "394px"
              },
              "medium": {
                "size": "16px",
                "height": "22px",
                "maxWidth": "394px"
              },
              "large": {
                "size": "16px",
                "height": "22px",
                "maxWidth": "394px"
              },
              "xlarge": {
                "size": "16px",
                "height": "22px",
                "maxWidth": "394px"
              }
            },
            "6": {
              "small": {
                "size": "15px",
                "height": "21px",
                "maxWidth": "355px"
              },
              "medium": {
                "size": "15px",
                "height": "21px",
                "maxWidth": "355px"
              },
              "large": {
                "size": "15px",
                "height": "21px",
                "maxWidth": "355px"
              },
              "xlarge": {
                "size": "15px",
                "height": "21px",
                "maxWidth": "355px"
              }
            }
          }
        },
        "paragraph": {
          "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "394px"
          },
          "medium": {
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px"
          },
          "large": {
            "size": "21px",
            "height": "27px",
            "maxWidth": "509px"
          },
          "xlarge": {
            "size": "24px",
            "height": "30px",
            "maxWidth": "586px"
          },
          "xxlarge": {
            "size": "31px",
            "height": "37px",
            "maxWidth": "739px"
          }
        },
        "text": {
          "xsmall": {
            "size": "15px",
            "height": "21px",
            "maxWidth": "355px"
          },
          "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "394px"
          },
          "medium": {
            "size": "18px",
            "height": "24px",
            "maxWidth": "432px"
          },
          "large": {
            "size": "21px",
            "height": "27px",
            "maxWidth": "509px"
          },
          "xlarge": {
            "size": "24px",
            "height": "30px",
            "maxWidth": "586px"
          },
          "xxlarge": {
            "size": "31px",
            "height": "37px",
            "maxWidth": "739px"
          }
        },
        "scale": 0.8,
        "layer": {
          "background": {
            "dark": "#111111",
            "light": "#f4f4f4"
          }
        },
        "email": "brenda.aurelie@gmail.com",
        "date": "2022-05-21T04:56:55.185Z"
      }
