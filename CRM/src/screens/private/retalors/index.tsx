import React from "react";
import { View } from 'react-native'
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Retalors = () => {
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]}></ContactSurfUI>
        </MainWrapper >
    )
}

export default withTheme(Retalors)

const MainWrapper = styled.View``;