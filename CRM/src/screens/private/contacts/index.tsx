import React from "react";
import { View } from 'react-native'
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Contacts = () => {
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]} sreenName='Contacts'></ContactSurfUI>
        </MainWrapper >
    )
}

export default withTheme(Contacts)

const MainWrapper = styled.View``;