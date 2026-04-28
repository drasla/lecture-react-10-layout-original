import { createContext, type ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../styles/themes.ts";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeMode>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {/* styled-components의 ThemeProvider도 여기서 함께 감싸줍니다. */}
            <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};