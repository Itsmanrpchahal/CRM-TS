import React, { useState } from "react";
import { useTheme, withTheme } from "styled-components/native";
import { styled } from "styled-components/native";
import { Switch } from 'react-native-switch';
import { MessageIcon, calenderminusIcon, leftRightIcon, phoneincomingIcon, voiceMailIcon } from "../../../utils/assets";
import ClientCard from "../../../components/ClientCard";
import ChatUI from "../../../components/ChatUI";
import { ScrollView } from "react-native";
import RetalorUI from "../../../components/RetalorUI";

const CallCenter = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { colors } = useTheme()
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    return (
        <ScrollView>
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
                <ChatUI></ChatUI>
                <RetalorUI></RetalorUI>
                <ImageView>
                    <ImageWrapper1 marginBottom={30} marginTop={30} height={30} width={60} source={leftRightIcon}></ImageWrapper1>
                </ImageView>

            </MainWrapper>
        </ScrollView>
    )
}

export default withTheme(CallCenter);

type TextProps = {
    color: string;
}


type ImageProps = {
    height: number;
    width: number;
    marginTop: number;
    marginBottom: number;
}

const ImageWrapper1 = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-bottom:${({ marginBottom }: any) => marginBottom}px;
    resize-mode:contain;
`;

const ImageView = styled.View`
    justify-content:center;
    align-items:center;
`;

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
    background-color:${({ theme }: any) => '#F2F2F2'};
`;