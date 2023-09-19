import React, { useEffect, useState } from "react";
import styled, { useTheme, withTheme } from "styled-components/native";
import Speedmeter from "../Speedmeter";
import { BaseIcon, NeedleCustom, RookieAloneIcon, RookieIcon, infoIcon } from "../../utils/assets";
import { Dimensions, Platform, ScrollView, TouchableOpacity, View } from "react-native";

const HeatMapSheet = () => {
    const { colors } = useTheme()
    const [topHeight, setTopHeight] = useState(0)
    const [bottomHeight, setBottomHeight] = useState(0);
    const [mainHeight, setMainHeight] = useState(0);
    let deviceHeight = Dimensions.get('window').height
    const [modalHeight, setModalHeight] = useState(0)
    const [info, setInfo] = useState(false);
    useEffect(() => {
        setBottomHeight(mainHeight - topHeight)
    }, [topHeight, mainHeight])

    useEffect(() => {
        setModalHeight(deviceHeight / 100 * 80);
    }, [deviceHeight])
    return (
        <MainWrapper height={modalHeight} onLayout={({ nativeEvent }) => {
            const { x, y, width, height } = nativeEvent.layout
            setMainHeight(height)
        }}>

            <SpeedView onLayout={({ nativeEvent }) => {
                const { x, y, width, height } = nativeEvent.layout
                setTopHeight(height)
            }}>
                <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                    Your surf level
                </TextView>
                <VerticleView>
                    <TouchableOpacity onPress={() => { setInfo(!info) }}>
                        <InfoIcon width={22} height={22} source={infoIcon}></InfoIcon>
                    </TouchableOpacity>
                    <Speedmeter
                        minValue={0}
                        defaultValue={0}
                        allowedDecimals={0}
                        backgroundColor={colors.white}
                        size={155}
                        marginTopLebel={-55}
                        needleImage={NeedleCustom}
                        maxValue={100}
                        labels={[

                        ]}
                        value={20}>
                    </Speedmeter>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ImageView source={BaseIcon}></ImageView>
                    </View>
                    {
                        info &&
                        <InfoMainView>
                            <TouchableOpacity onPress={() => { setInfo(!info) }}>
                                <TriangleView></TriangleView>
                            </TouchableOpacity>
                            <InfoView>
                                <TextView fontWeight={500} fontColor={colors.black} fontSize={16} textAlign='center'>
                                    0 to 25 points - Rookie
                                </TextView>
                                <TextView fontWeight={500} fontColor={colors.black} fontSize={16} textAlign='center'>
                                    26 to 50 points - Novice
                                </TextView>
                                <TextView fontWeight={500} fontColor={colors.black} fontSize={16} textAlign='center'>
                                    51 to 75 points - Booster
                                </TextView>
                                <TextView fontWeight={500} fontColor={colors.black} fontSize={16} textAlign='center'>
                                    51 to 75 points - Rockstar
                                </TextView>

                            </InfoView>
                        </InfoMainView>

                    }
                </VerticleView>




                <TextView fontWeight={500} fontColor={colors.black} fontSize={29} textAlign='center'>
                    Rookie
                </TextView>
                <TextView fontWeight={500} fontColor={colors.black} fontSize={16} textAlign='flex-start'>
                    “I’m here to help you stay focused and get the
                    most out of our righteous CRM!”
                </TextView>
            </SpeedView>

            <HorizontalView height={bottomHeight - 30}>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                    <VerticleView>
                        <TextView fontWeight={400} fontColor={colors.black} fontSize={14} textAlign='flex-start'>
                            1. Use the CRM everyday!
                        </TextView>
                        <TextView fontWeight={400} fontColor={colors.black} fontSize={14} textAlign='flex-start'>
                            2. Accept and follow up on
                            every lead from your surf
                            tools.
                        </TextView>
                        <TextView fontWeight={400} fontColor={colors.black} fontSize={14} textAlign='flex-start'>
                            3. Booking as many showings
                            as humanly possible.
                        </TextView>
                        <TextView fontWeight={400} fontColor={colors.black} fontSize={14} textAlign='flex-start'>
                            4. Preparing sales and listing
                            contracts from the transaction
                            desk.
                        </TextView>
                        <TextView marginTop={10} fontWeight={400} fontColor={colors.black} fontSize={14} textAlign='flex-start'>
                            I’ll be here to help you anyway I can.
                            Click me everyday to see
                            useful tips and tricks on how you can
                            level up!”

                        </TextView>
                    </VerticleView>
                </ScrollView>
                <RookieImage height={bottomHeight - 30} source={RookieIcon}></RookieImage>
            </HorizontalView>


        </MainWrapper>
    )
}

export default withTheme(HeatMapSheet)

type MainProps = {
    height: number;
}
type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    marginTop?: number;
}

type ImageProps = {
    width?: number;
    height?: number;
}
type BottomProps = {
    height?: number;
}

const TriangleView = styled.View`
    width: 0px;
    height: 0px;
    borderLeftWidth: 10px;
    borderRightWidth: 10px;
    borderBottomWidth: 20px;
    borderStyle: solid;
    backgroundColor: transparent;
    borderLeftColor: transparent;
    borderRightColor: transparent;
    borderBottomColor: ${({ theme }: any) => theme.colors.orange};
`;
const InfoView = styled.View`
    background-color:${({ theme }: any) => theme.colors.orange};   
    padding:10px;
    border-radius:10px;
    margin-top:-2px;
`;

const InfoMainView = styled.View`
    justify-content:center;
    align-items:center;
    position:absolute;
    right:-92;
    top:25;
`;

const VerticleView = styled.View`
    flexShrink:1;
    justify-content:center;
`;

const HorizontalView = styled.View<BottomProps>`
    position:absolute;
    align-items:bottom;
    flex-direction:row;
    bottom:${({ height }: any) => Platform.OS === 'android' ? 0 : -15};
    right:0;
    width:100%;
    height:${({ height }: any) => height}px;
`;

const RookieImage = styled.Image<BottomProps>`
    resize-mode:contain;
    right:0;
    height:${({ height }: any) => height}px;
    bottom:0;
`;

const InfoIcon = styled.Image<ImageProps>`
    width:${({ width }: any) => width}px;
    height:${({ height }: any) => height}px;
    position:absolute;
    right:0;
    top:10;
    resiz-mode:contain;
`;

const SpeedView = styled.View`
    justify-content:center;
    align-items:center;
`;

const ImageView = styled.Image`
    height:35px;
    width:100px;
    justify-content:center;
    resize-mode:contain;
    align-items:center;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    text-align:${({ textAlign }: any) => textAlign};
    flexShrink:1;
    margin-top:${({ marginTop }: any) => marginTop}px
`;

const MainWrapper = styled.View<MainProps>`
    background-color:${({ theme }: any) => theme.colors.white};
    height:${({ height }: any) => height}px;
    padding:8px;
    flex: 1;
`;