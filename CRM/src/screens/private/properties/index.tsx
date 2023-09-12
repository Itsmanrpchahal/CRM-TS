import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { styled, withTheme } from "styled-components/native";
import { MainWrapperWhite } from '../../../utils/globalStyles'
import { AddIcon, BrushIcon, FilterIcon, UndoIcon } from '../../../utils/assets'
import CardSwipeWrapper from "../../../components/CardSwipeWrapper";
import { useActions } from '../../../hooks/useActions'

const Properties = () => {
    const [topHeight, setTopHeight] = useState(0)
    const [centerHeight, setCenterHeight] = useState(0)
    const [mainHeight, setMainHeight] = useState(0)
    const [visible, setVisible] = useState(false)
    const {
        openModal,
    } = useActions();

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 2000)
    }, [])
    useEffect(() => {
        setCenterHeight(mainHeight - (topHeight + 30))
    }, [topHeight, mainHeight])
    return (
        <MainWrapperWhite onLayout={({ nativeEvent }) => {
            const { x, y, width, height } = nativeEvent.layout
            setMainHeight(height)
        }}>
            <ChildWrapper >
                <TopWrapper onLayout={({ nativeEvent }) => {
                    const { x, y, width, height } = nativeEvent.layout
                    setTopHeight(height)
                }}>
                    <FlatList
                        data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={() => {
                            return (
                                <FilterTabs>
                                    <ImageWrapper height={20} width={20} source={AddIcon} />
                                    <TextWrapper>Text</TextWrapper>
                                </FilterTabs>
                            )
                        }}>
                    </FlatList>
                    <TabWrapper>
                        <FilterBtn>
                            <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                            <TextWrapper numberOfLines={1}>  Send Selected Properties</TextWrapper>
                        </FilterBtn>
                        <TouchableOpacity onPress={() => {
                            openModal(
                                'AccountModalSheet',
                                {
                                    height: '80%',
                                },
                            )
                        }}>
                            <FilterBtn>
                                <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                                <TextWrapper>Filter</TextWrapper>
                            </FilterBtn>
                        </TouchableOpacity>
                        <FilterBtn>
                            <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                            <TextWrapper numberOfLines={1}>  Send Search Criteria</TextWrapper>
                        </FilterBtn>
                    </TabWrapper>

                </TopWrapper>

                {
                    visible && <CardSwipeWrapper height={centerHeight}></CardSwipeWrapper>
                }


            </ChildWrapper>
        </MainWrapperWhite>
    )
}

export default withTheme(Properties)


type ImageProps = {
    height?: number;
    width?: number;
}

type CenterProps = {
    height?: number
}

const TabWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;



const CenterWrapper = styled.View<CenterProps>`
    height:${({ height }: any) => height}px;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
    `;

const FilterBtn = styled.View`
    flex-direction:row;
    height:30px;
    width:120px;
    padding-horizontal:15px;
    justify-content:space-evenly;
    display:inline;
    align-items:center;
    border-radius:10px;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ theme }: any) => theme.colors.white};
`;

const TextWrapper = styled.Text`
    color: ${({ color }: any) => color};
`;

const ImageWrapper = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
`;

const FilterTabs = styled.View`
    margin:8px;
    padding-horizontal:10px;
    align-items:center;
`;

const ChildWrapper = styled.View`
    justify-content:space-between;
    flex:1;
`;