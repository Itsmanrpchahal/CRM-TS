import React from "react";
import { profileIcon } from '../../../assets';
import { styled, useTheme, withTheme } from "styled-components/native";
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import Speedmeter from "../../../components/Speedmeter";
import { BaseIcon, NeedleCustom } from "../../../utils/assets";
import { dataCell } from '../../../utils/constants'
import { useActions } from "../../../hooks/useActions";
const Dashboard = () => {
    const { colors } = useTheme();
    const {
        openModal,
    } = useActions();
    return (
        <MainWrapper>
            <OnlineWrapper>
                <FlatList
                    data={[1, 1, 1, 1, 1]}
                    horizontal
                    renderItem={() => {
                        return (
                            <RenderImage source={profileIcon}></RenderImage>
                        )
                    }}
                >
                </FlatList>
            </OnlineWrapper>
            <ScrollView>
                <ScrollWraper>
                    <TextWrapper fontWeight={300} fontSize={18} color={colors.black}>
                        Welcome John
                    </TextWrapper>

                    <TouchableOpacity onPress={() => {
                        openModal(
                            'HeatMapSheet',
                            {
                                height: '80%',
                            },
                        )
                    }}>
                        <Speedmeter
                            minValue={0}
                            defaultValue={0}
                            allowedDecimals={0}
                            size={200}
                            needleImage={NeedleCustom}
                            maxValue={100}
                            labels={[

                            ]}
                            value={20}>
                        </Speedmeter>
                    </TouchableOpacity>
                    <ImageView source={BaseIcon}></ImageView>

                    <MainCardView>
                        {
                            dataCell.map((item) => {
                                return (
                                    <Card style={{
                                        shadowColor: 'black',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowRadius: 6,
                                        shadowOpacity: 0.26,
                                        elevation: 8,
                                        backgroundColor: 'white',
                                        padding: 20,
                                        borderRadius: 10
                                    }}>

                                        <CardItemView style={{
                                            shadowOffset: { width: -2, height: 4 },
                                            shadowOpacity: 0.2,
                                            shadowRadius: 3,
                                        }} >
                                            <ItemImage source={item.image}></ItemImage>
                                        </CardItemView>
                                        <TextWrapper fontWeight={300} fontSize={15} color={colors.black}>{item.title}</TextWrapper>
                                        <TextWrapper fontWeight={800} fontSize={18} color={colors.primary}>{item.subTitle}</TextWrapper>
                                    </Card>
                                )
                            })
                        }
                    </MainCardView>



                </ScrollWraper>
            </ScrollView>

        </MainWrapper>
    )
}

export default withTheme(Dashboard)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number
}

const Card = styled.View`
    height:140px;
    width:140px;
    align-self:center;
    margin:15px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    position:relative;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const MainCardView = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    margin-bottom:50px;
`;

const ItemImage = styled.Image`
    height:12;
    width:12;
`;

const ImageView = styled.Image`
    height:35px;
    width:130px;
    justify-content:center;
    resize-mode:contain;
    align-items:center;
`;
const ListContainer = styled.View`
   margin-bottom:60px;
`;

const CardItemView = styled.View`
    height:30px;
    width:30px;
    border-radius:15px;
    background-color:white;
    position:absolute;
    right:10px;
    top:10px;
    z-index:9;
    padding:2px;
    justify-content:center;
    align-items:center;
`;

const CardChildWrapper = styled.View`
    background-color: white;
    padding-vertical: 45px;
    padding-horizontal: 25px;
    width: 100%;
    margin-vertical: 10px;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 15px;
    align-items:center;
    position:relative;
`;

const CardWrapper = styled.View`
   width:50%;
  padding:0 10px
`;

const ScrollWraper = styled.View`
    margin-top:10px;
    align-items:center;
`;

const TextWrapper = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    align-self:center;
    margin-top:20px;
    font-weight:${({ fontWeight }: any) => fontWeight};
`;

const RenderImage = styled.Image`
    height:40px;
    width:40px;
    border-radius:20px;
    margin-top:10px;
    margin-horizontal:10px;
    border-width:1px;
    border-color: ${({ theme }: any) => theme.colors.green};
`
const OnlineWrapper = styled.View`
    width:100%;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
`;

const MainWrapper = styled.View``;