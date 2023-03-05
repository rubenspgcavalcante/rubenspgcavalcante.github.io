import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      purpleDark: string;
      purpleLight: string;
      blueLight: string;

      base90: string;
      base80: string;
      base70: string;
      base60: string;
      base50: string;
      base40: string;
      base30: string;
      base20: string;
      base10: string;
    };
  }
}
