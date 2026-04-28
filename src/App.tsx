import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/themes.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
            <GlobalStyle />
            <RouterProvider router={router(onClick)} />
        </ThemeProvider>
    );
}

export default App;
