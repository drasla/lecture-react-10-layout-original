import { Outlet } from "react-router";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function MainLayout() {
    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    );
}

export default MainLayout;
