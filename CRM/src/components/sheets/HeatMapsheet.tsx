import React, { useEffect, useState } from "react";
import styled, { useTheme, withTheme } from "styled-components/native";
import { RookieAloneIcon, infoIcon, tooltipIcon } from "../../utils/assets";
import { Dimensions, TouchableOpacity } from "react-native";
import LineChart from "../LineChart";
import { grommetIcon } from "../../utils/assets";

const HeatMapSheet = () => {
    const { colors } = useTheme()
    let deviceHeight = Dimensions.get('window').height
    const [info, setInfo] = useState(false);
    const [rookieInfo, setRookieInfo] = useState(false)

    return (
        <MainWrapper >

            <TopHorizontalView>
                <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                    Your surf stats
                </TextView>
                <TouchableOpacity onPress={() => { setInfo(!info) }}>
                    <InfoIcon width={22} height={22} source={infoIcon}></InfoIcon>
                </TouchableOpacity>

            </TopHorizontalView>
            {
                info &&
                <InfoMainView>
                    <TouchableOpacity onPress={() => { setInfo(!info) }}>
                        <TriangleView borderBottomColor={colors.orange}></TriangleView>
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

            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Time on CRM</TextView1>
                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>00:13:53</TextView1>

                </Card>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Daily Logins</TextView1>
                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>61</TextView1>
                </Card>
            </HorizontalWrapper>


            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Self-sourced
                            Leads</TextView1>
                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>159</TextView1>
                </Card>
                <Card>
                    <TextView1 style={{ position: 'absolute', top: 0 }} fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Heatmap</TextView1>
                    <LineChart />

                </Card>
            </HorizontalWrapper>
            {
                rookieInfo && <ToolTipMainDiv>
                    <ToolTipView>
                        <TextView1
                            fontSize={21} color={colors.primary}
                            fontWeight={700} marginTop={0}>“I’m here to help you stay focused
                            and get the most out of our
                            righteous CRM!”</TextView1>

                    </ToolTipView>
                    <TriangleView style={{ transform: [{ rotate: '145deg' }], marginTop: 2, marginLeft: '30%' }} borderBottomColor={'#D4EDF9'}></TriangleView>

                </ToolTipMainDiv>
            }
            <HorizontalWrapper>
                <TouchableOpacity onPress={async () => {

                }}>
                    <Card>
                        <TextView1 style={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center" }}
                            fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>surf level</TextView1>
                        <ImageView1 height={110} width={110} marginLeft={0} source={grommetIcon}></ImageView1>

                        <TextView1
                            fontSize={10} color={colors.black} fontWeight={700} marginTop={-10}>Rookie</TextView1>
                    </Card>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { setRookieInfo(!rookieInfo) }}>
                    <Card>
                        <ImageView1 height={130} width={130} marginLeft={0} source={RookieAloneIcon}></ImageView1>
                    </Card>
                </TouchableOpacity>


            </HorizontalWrapper>

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

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

type TriangleProp = {
    borderBottomColor?: string
}

const ToolTipView = styled.View`
    position:absolute;
    width:80%;
    height:150px;
    border-radius:16px;
    top:-140;
    padding:8px;
    align-items:center;
    justify-content:center;
    background-color:#D4EDF9;
`;

const ToolTipMainDiv = styled.View`
    position:relative;
    width:100%;  
    z-index:9;
    align-items:center;
    justify-content:center;
    display:flex;margin:0 auto;
`;

const ImageView1 = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    align-items:center;
    resize-mode:contain;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
`;

const TextView1 = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-items:center;
    justify-content:center;
    align-self:center;
`;

const Card = styled.View`
    height:130px;
    width:130px;
    margin-bottom:15px;
    margin-top:15px;
    border-radius:15px;
    border-width:2px;
    justify-content:center;
    align-items:center;
    position:relative;
    align-self:center;
    border-color:${({ theme }: any) => theme.colors.primary};
`;

const HorizontalWrapper1 = styled.View`
    flex-direction:row;
    top:0;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:100%;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
`;

const TriangleView = styled.View<TriangleProp>`
    width: 0px;
    height: 0px;
    borderLeftWidth: 10px;
    borderRightWidth: 10px;
    borderBottomWidth: 20px;
    borderStyle: solid;
    backgroundColor: transparent;
    borderLeftColor: transparent;
    borderRightColor: transparent;
    borderBottomColor: ${({ borderBottomColor }: any) => borderBottomColor};
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
    top:20;
    z-index:999;
    right:10;
`;

const TopHorizontalView = styled.View`
    flex-direction:row;
    justify-content:center;
    margin-top:10px;
`;

const InfoIcon = styled.Image<ImageProps>`
    width:${({ width }: any) => width}px;
    height:${({ height }: any) => height}px;
    resiz-mode:contain;
    margin-left:8px;
    margin-top:-10px;
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