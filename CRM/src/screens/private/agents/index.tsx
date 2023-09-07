import React from "react";
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Agents = () => {
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]}></ContactSurfUI>
        </MainWrapper >
    )
}

export default withTheme(Agents)

const MainWrapper = styled.View``;