import React, { useState } from "react";
import { useTheme, withTheme } from "styled-components/native";
import { styled } from "styled-components/native";
import { Switch } from 'react-native-switch';
import { MessageIcon, calenderminusIcon, phoneincomingIcon, voiceMailIcon } from "../../../utils/assets";
import ClientCard from "../../../components/ClientCard";

const CallCenter = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { colors } = useTheme()
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    return (
        <MainWrapper>
            <TopWrapper>
                <Switch
                    activeText='ON'
                    inActiveText="Off    "
                    outerCircleStyle={{ width: 60, height: 35, left: 5 }} // Adjust the width and height for the container
                    switchRightPx={8} // Adjust the switchRightPx to fit the container size
                    backgroundActive="green"
                    backgroundInactive="#d3d3d3"
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    switchLeftPx={5}
                    switchRightPx={5}
                    switchWidthMultiplier={2}
                    value={isEnabled}
                    style={{
                        transform: [{ scaleX: .7 }, { scaleY: 0.7 }], // Set the scale to adjust the thumb size
                    }}
                />
            </TopWrapper>

            <HorizontalWrapper>
                <CardView>
                    <ImageWrapper source={phoneincomingIcon} />
                    <TextView color={colors.black}>0</TextView>
                </CardView>
                <CardView>
                    <ImageWrapper source={MessageIcon} />
                    <TextView color={colors.green}>4</TextView>
                </CardView>
                <CardView>
                    <ImageWrapper source={voiceMailIcon} />
                    <TextView color={colors.green}>18</TextView>
                </CardView>
                <CardView>
                    <ImageWrapper source={calenderminusIcon} />
                    <TextView color={colors.red}>11</TextView>
                </CardView>
            </HorizontalWrapper>
            <ClientCard></ClientCard>
        </MainWrapper>
    )
}

export default withTheme(CallCenter);

type TextProps = {
    color: string;
}

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:16px;
    margin-top:5px;
    font-weight:600;
`;

const ImageWrapper = styled.Image`
    height:30px;
    width:30px;
    tint-color:black;
    resize-mode:contain;
`;

const CardView = styled.View`
    height:70px;
    width:70px;
    border-radius:10px;
    background-color:white;
    justify-content:center;
    align-items:center;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin:8px;
`;

const TopWrapper = styled.View`
    padding-bottom:8px;
    background-color:${({ theme }: any) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

const MainWrapper = styled.View`
background-color:${({ theme }: any) => theme.colors.gray};
`;