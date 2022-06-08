import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      mainRed: string;
      mainGray: string;
      lightGray: string;
      middleGray: string;
    };
  }
}
