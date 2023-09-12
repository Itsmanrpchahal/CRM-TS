import React from "react";
import { styled, withTheme } from "styled-components/native";

const surfMailCustomDrawer = () => {
    return (
        <MainWrapper></MainWrapper>
    )
}

export default withTheme(surfMailCustomDrawer)

const MainWrapper = styled.View`
    background-color:white;
    border-left-radius:16px;
`;