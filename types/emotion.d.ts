import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    meta: {
      name: string;
    };
    colors: {
      purpleDark: string;
      purpleLight: string;
      blueLight: string;
      yellowLight: string;

      base90: string;
      base80: string;
      base70: string;
      base60: string;
      base50: string;
      base40: string;
      base30: string;
      base20: string;
      base10: string;

      baseAlpha90: string;
      baseAlpha80: string;
      baseAlpha70: string;
      baseAlpha60: string;
      baseAlpha50: string;
      baseAlpha40: string;
      baseAlpha30: string;
      baseAlpha20: string;
      baseAlpha10: string;

      background: string;
    };
  }
}
