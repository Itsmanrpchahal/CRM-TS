import React from "react";
import { View } from 'react-native'
import { withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const surfLeads = () => {
    return (
        <View>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}></ContactSurfUI>
        </View>
    )
}

export default withTheme(surfLeads)