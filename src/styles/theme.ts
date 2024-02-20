export interface Theme {
  colors: {
    primary: {
      light: string;
      medium: string;
      pure: string;
      dark: string;
    };
    character: {
      opaque: string;
      basic: string;
    };
    background: {
      primary: string;
    };
  };
  typography: {
    font: {
      family: string;
    };
  };
}

const theme: Theme = {
  colors: {
    primary: {
      light: "#561CB266",
      medium: "#6D2AC0",
      pure: "#561CB2",
      dark: "#31019F",
    },
    character: {
      opaque: "#BFBFBF",
      basic: "#FCFCFC",
    },
    background: {
      primary: "#010103",
    },
  },
  typography: {
    font: {
      family: "Work Sans",
    },
  },
};

export default theme;
