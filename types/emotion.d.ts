import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      purpleDark: string;
      purpleLight: string;
      blueLight: string;
    };
  }
}
