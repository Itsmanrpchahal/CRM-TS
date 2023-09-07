import React from "react";
import { FlatList, Text, View } from 'react-native'
import { styled, withTheme } from "styled-components/native";
import { MainWrapper, MainWrapperWhite } from '../../../utils/globalStyles'
import { AddIcon, FilterIcon } from '../../../utils/assets'
const Properties = () => {
    return (
        <MainWrapperWhite>
            <ChildWrapper>
                <TopWrapper>
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
                    <FilterBtn>
                        <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                        <TextWrapper>Filters</TextWrapper>
                    </FilterBtn>
                </TopWrapper>

                <CenterWrapper>

                </CenterWrapper>

                <BottomWrapper></BottomWrapper>
            </ChildWrapper>
        </MainWrapperWhite>
    )
}

export default withTheme(Properties)


type ImageProps = {
    height?: number;
    width?: number;
}

const BottomWrapper = styled.View`
height:100px;
`;

const CenterWrapper = styled.View`
    height:100px;
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
    height:100%;
`;