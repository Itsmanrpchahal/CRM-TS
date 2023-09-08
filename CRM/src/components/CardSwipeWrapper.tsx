// @ts-ignore
import React, { useRef } from 'react';
import { useTheme, withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';
import Swiper from 'react-native-deck-swiper'
import { profileIcon } from '../assets'
import { Text, View } from 'react-native';
import { AddIcon, BrushIcon, UndoIcon } from '../utils/assets';

type CardSwipeProps = {
    height: number
};
const CardSwiperWrapper: React.FC<CardSwipeProps> = ({
    height,
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
                cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                renderCard={(card) => {
                    return (
                        <CardWapper>
                            <ImageWrapper source={profileIcon}></ImageWrapper>
                            <BottomWrapper>
                                <TextWrapper color={colors.blue} fontSize={18} fontWeight={800}>
                                    $ 152,000
                                </TextWrapper>

                                <TextWrapper color={colors.black} fontSize={16} fontWeight={500}>
                                    1787 BGJM , HMK
                                </TextWrapper>

                                <BottomTabWrapper>
                                    <ImageWrapperTab height={28} width={28} source={AddIcon}></ImageWrapperTab>
                                    <TextWrapper color={colors.black} fontSize={14} fontWeight={500}>
                                        BED
                                    </TextWrapper>
                                </BottomTabWrapper>
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
`;

const BottomTabWrapper = styled.View`
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