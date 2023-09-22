import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { TouchableOpacity } from "react-native";
import { bathIcon, hoasIcon, measuringtapeIcon, newbedIcon } from "../../../utils/assets";


const PropertyDetailPage = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            {/* <CardWapper>
                <SwiperFlatList
                    contentContainerStyle={{ height: '100%', width: '100%' }}
                    style={{ height: '60%', width: '100%' }}
                    scrollEnabled
                    data={card?.featured_image_src}
                    renderItem={({ item, index }) => (
                        <ImageArea>
                            <TouchableOpacity style={{
                                width: 50,
                                height: '100%',
                                position: 'absolute',
                                zIndex: 999
                            }}
                                // disabled={indexs >= 0 ? false : true}
                                onPress={() => {
                                }}>
                                <TapArea />
                            </TouchableOpacity>
                            <ImageWrapper style={{ height: '100%', width: '100%' }} source={{ uri: card?.featured_image_src[indexs]?.guid }}></ImageWrapper>
                            <TouchableOpacity style={{
                                width: 50,
                                height: '100%',
                                position: 'absolute',
                                zIndex: 999,
                                right: 0,
                            }}
                                // disabled={item?.featured_image_src?.length - 1 === indexs ? true : false}
                                onPress={() => {
                                }}>
                                <TapArea style={{ right: 0, position: 'absolute', }} />
                            </TouchableOpacity>
                        </ImageArea>

                    )}
                />

                <BottomWrapper>
                    <TextWrapper color={colors.blue} fontSize={18} fontWeight={800}>
                        jj
                    </TextWrapper>

                    <TextWrapper color={colors.black} fontSize={16} fontWeight={500}>
                        titile
                    </TextWrapper>

                    <HorizontalWrapper>
                        <BottomTabWrapper>
                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={newbedIcon}></ImageWrapperTab>
                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                Beds
                            </TextWrapper>
                        </BottomTabWrapper>
                        <BottomTabWrapper>

                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={bathIcon}></ImageWrapperTab>
                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                Baths
                            </TextWrapper>
                        </BottomTabWrapper>
                        <BottomTabWrapper>
                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={measuringtapeIcon}></ImageWrapperTab>
                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                sq ft
                            </TextWrapper>
                        </BottomTabWrapper>
                        <BottomTabWrapper>

                            <ImageWrapperTab height={28} width={28} source={hoasIcon}></ImageWrapperTab>
                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                4321
                            </TextWrapper>
                        </BottomTabWrapper>

                    </HorizontalWrapper>

                </BottomWrapper>
            </CardWapper> */}
        </MainWrapper>
    )
}


export default withTheme(PropertyDetailPage)

type ImageProps = {
    height?: number;
    width?: number;
}

type TextProps = {
    fontSize: number;
    color: string;
    fontWeight: number;
}

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;


const TextWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;

const BottomWrapper = styled.View`
    background-color:white;
    justify-content:space-between;
    height:40%;
    align-items:center;
    padding:10px;
`;

const BottomWrapperUndo = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
    width:100%;
    bottom:0;
    position:absolute;
`;

const ImageWrapperTab = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    background-color:white;
    resize-mode:contain;
`;

const BottomTabWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;

const ImageWrapper = styled.Image`
    border-radius:10px;
    resize-mode:cover;
`;

const TapArea = styled.View`
    width:50px;
    height:100%;
    position:absolute;
    z-index:999;
`;

const ImageArea = styled.View`
    position:relative;
    height:100%;
    width:100%;
    z-index:-999;
`;

const CardWapper = styled.View`
    height:100%;
    border-radius:10px;
    border-width:2px;
    width:95%;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;