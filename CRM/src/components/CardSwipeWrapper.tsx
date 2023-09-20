// @ts-ignore
import React, { useRef } from 'react';
import { useTheme, withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';
import Swiper from 'react-native-deck-swiper'
import { BrushIcon, UndoIcon, bathIcon, hoasIcon, measuringtapeIcon, newbedIcon } from '../utils/assets';

type CardSwipeProps = {
    height: number,
    data: any,
};
const CardSwiperWrapper: React.FC<CardSwipeProps> = ({
    height,
    data = [],
    ...rest
}) => {
    const { colors } = useTheme()
    return (
        <MainWrapper height={height}>
            <Swiper
                style={{ height: height }}
                cardStyle={{ height: height - 40, top: 0, backgroundColor: 'white' }}
                cardHorizontalMargin={0}
                backgroundColor='#FFFFFF'
                cardVerticalMargin={0}
                onSwipedLeft={() => { alert('Ehlo') }}
                onSwipedRight={() => { }}
                verticalSwipe={false}
                cards={data}
                renderCard={(card, index) => {
                    return (
                        <CardWapper>
                            <ImageWrapper source={{ uri: card?.featured_image_src[0]?.guid }}></ImageWrapper>
                            <BottomWrapper>
                                <TextWrapper color={colors.blue} fontSize={18} fontWeight={800}>
                                    {card?.property_price}
                                </TextWrapper>

                                <TextWrapper color={colors.black} fontSize={16} fontWeight={500}>
                                    {card?.title}
                                </TextWrapper>

                                <HorizontalWrapper>
                                    <BottomTabWrapper>
                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={newbedIcon}></ImageWrapperTab>
                                        <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                            {card?.property_bedrooms} Beds
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>

                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={bathIcon}></ImageWrapperTab>
                                        <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                            {card?.bathroomsfull} Baths
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>
                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={measuringtapeIcon}></ImageWrapperTab>
                                        <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                            {card?.property_size} sq ft
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>

                                        <ImageWrapperTab height={28} width={28} source={hoasIcon}></ImageWrapperTab>
                                        <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                            {card?.taxannualamount}
                                        </TextWrapper>
                                    </BottomTabWrapper>

                                </HorizontalWrapper>

                            </BottomWrapper>
                        </CardWapper>
                    )
                }}
            >
            </Swiper>

            <BottomWrapperUndo>
                <ImageWrapperTab height={20} width={26} source={UndoIcon}></ImageWrapperTab>
                <ImageWrapperTab height={20} width={20} source={BrushIcon}></ImageWrapperTab>
            </BottomWrapperUndo>
        </MainWrapper >

    )
}


// @ts-ignore
export default withTheme(CardSwiperWrapper);
type ImageProps = {
    height?: number;
    width?: number;
}

type MainWrapperProps = {
    height: number;
}

type TextProps = {
    fontSize: number;
    color: string;
    fontWeight: number;
}
const VerticleView = styled.View``;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
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

const ImageWrapper = styled.Image`
    height:60%;
    width:100%;
    border-radius:10px;
`;

const CardWapper = styled.View`
    height:100%;
    border-radius:10px;
    border-width:2px;
    width:95%;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const MainWrapper = styled.View<MainWrapperProps>`
    height: ${({ height }: any) => height}px;
    justify-content:space-between;
    position:relative;
`;