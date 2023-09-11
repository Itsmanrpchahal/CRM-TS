import React from "react";
import { withTheme } from "styled-components/native";
import ContactUI from "../contacts/ContactUI";

const ContactView = () => {

    return (
        <ContactUI></ContactUI>
    )
}

export default withTheme(ContactView)