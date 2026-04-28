import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter.tsx";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ThemeContextProvider } from "./contexts/theme/ThemeContext.tsx";

function App() {
    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <RouterProvider router={router()} />
        </ThemeContextProvider>
    );
}

export default App;
