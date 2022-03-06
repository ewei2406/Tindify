import { ThemeNames } from "./ThemeNames";

const Light = {
    // main: "red"
    borderWidth: 2,
    transition: "0.1s ease",

    bodyFont: "'Nunito', sans-serif",

    titleFont: "'Montserrat', sans-serif",
    titleWeight: 800,

    headingFont: "'Montserrat', sans-serif",
    headingWeight: 800,



    accent: "#EF466F",
    delete: "#f00",

    textColor: "rgb(64,64,64)",
    lightColor: "#b6b6b6",
    darkColor: "#4e4e4e",
    invertedColor: "#fff",
    buttonColor: "#fff",
    sliderColor: "#fff",
    backgroundColor: "#fff",
    shadowColor: "#d6d6d6",
};

const Dark = {
    ...Light,
    textColor: "#e6e6e6",
    lightColor: "#727272",
    darkColor: "#111111",
    invertedColor: "#eee",
    sliderColor: "#535353",
    buttonColor: "#2b2c30",
    backgroundColor: "#2b2c30",
    shadowColor: "#161616"
}

const Themes = { 
    [ThemeNames.LIGHT]: Light, 
    [ThemeNames.DARK]: Dark 
}

export default Themes

