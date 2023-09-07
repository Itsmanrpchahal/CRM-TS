import React from "react";
import { View } from 'react-native'
import { withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../../utils/globalStyles";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Contacts = () => {
    return (
        <MainWrapperWhite>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]}></ContactSurfUI>
        </MainWrapperWhite >
    )
}

export default withTheme(Contacts)