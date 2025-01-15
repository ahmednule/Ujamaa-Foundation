import { ThemeProvider, createTheme } from "@mui/material";

export default function MyThemeProvider({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ADD8E6",
                dark: "#008000",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
