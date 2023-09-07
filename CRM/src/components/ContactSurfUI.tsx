// @ts-ignore
import React, { useState } from "react";
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { useTheme, withTheme } from "styled-components";
// @ts-ignore
import styled from "styled-components/native";
import { profileIcon } from "../assets";
import { AddIcon, FilterIcon, MessageBlueIcon, PhoneGreenIcon, mailBlackIcon, seacrhIcon, vedioGreenIcon } from "../utils/assets";

type ContactSurfProps = {
    sreenName: string;
    data: any;
}

const contactSurfUI: React.FC<ContactSurfProps> = ({
    sreenName = "",
    data = []
}) => {
    const [tab, setTab] = useState(0)
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <SearchWrapperView>
                <SearchWrapperTextFieldView>
                    <ImageView height={16} width={16} marginLeft={0} source={seacrhIcon}></ImageView>
                    <SearchTextInput style={{ paddingTop: Platform.OS === 'android' && -5, paddingBottom: Platform.OS === 'android' && -5 }} placeholder="Search"></SearchTextInput>
                </SearchWrapperTextFieldView>
                <FilterView>
                    <ImageView height={18} width={18} marginLeft={0} source={FilterIcon}></ImageView>
                    {
                        sreenName != 'surfLeads' &&
                        <ImageView height={18} width={18} marginLeft={10} source={AddIcon}></ImageView>
                    }

                </FilterView>
            </SearchWrapperView>

            <TabsWarpper>
                <TouchableOpacity onPress={() => { setTab(0) }}>
                    <TabView>
                        <TabText fontSize={12} color={tab === 0 ? colors.primary : colors.black}>All contacts</TabText>
                        <Divider color={tab === 0 ? colors.primary : 'transparent'}></Divider>
                    </TabView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTab(1) }}>
                    <TabView>
                        <TabText fontSize={12} color={tab === 1 ? colors.primary : colors.black}>Partner contacts</TabText>
                        <Divider color={tab === 1 ? colors.primary : 'transparent'}></Divider>
                    </TabView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTab(2) }}>
                    <TabView>
                        <TabText fontSize={12} color={tab === 2 ? colors.primary : colors.black}>My sphere</TabText>
                        <Divider color={tab === 2 ? colors.primary : 'transparent'}></Divider>
                    </TabView>
                </TouchableOpacity>

            </TabsWarpper>

            <FlatList
                data={data}
                ListHeaderComponent={<View></View>}
                ListHeaderComponentStyle={{ marginTop: 16 }}
                renderItem={() => {
                    return (
                        <ListWapper>
                            <HorizontalView>
                                <ProfileImageWrapper>
                                    <ProfileImage source={profileIcon} />
                                    <OnlineImage></OnlineImage>
                                </ProfileImageWrapper>
                                <VerticleWrapper>
                                    <TabText fontSize={15} color={tab === 1 ? colors.black : colors.black}>Partner contacts</TabText>
                                    <TabText fontSize={12} color={tab === 1 ? colors.black : colors.black}>Partner contacts</TabText>
                                </VerticleWrapper>
                            </HorizontalView>

                            <SocailMediaWrapper>
                                <ImageView height={24} width={24} marginLeft={0} source={PhoneGreenIcon}></ImageView>
                                <ImageView height={24} width={24} marginLeft={8} source={MessageBlueIcon}></ImageView>
                                <ImageView height={24} width={24} marginLeft={8} source={mailBlackIcon}></ImageView>
                                <ImageView height={24} width={24} marginLeft={8} source={vedioGreenIcon}></ImageView>
                            </SocailMediaWrapper>
                        </ListWapper>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

// @ts-ignore
export default withTheme(contactSurfUI);

type TextProps = {
    color: string,
    fontSize?: number,
}

type ImageProps = {
    marginLeft?: number,
    height?: number,
    width?: number,
}

const SocailMediaWrapper = styled.View`
    flex-direction:row;
    align-items:center;
`;

const VerticleWrapper = styled.View`
align-items:center;
justify-content:center;
margin-left:16px;
`;

const OnlineImage = styled.View`
    height:10px;
    width:10px;
    border-radius:5px;
    background-color:green;
    position:absolute;
    margin:3px;
`;

const ProfileImage = styled.Image`
    height:50px;
    width:50px;
    border-radius:25px;
`;

const HorizontalView = styled.View`
    flex-direction:row;
`;

const ProfileImageWrapper = styled.View``;

const ListWapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    background-color:${({ theme }: any) => theme.colors.gray};
    border-radius:8px;
    padding:5px;
    margin:5px;
`;

const TabView = styled.View``;

const Divider = styled.View<TextProps>`
    height:1px;
    width:100%;
    background-color:${({ theme, color }: any) => color};
`;

const TabText = styled.Text<TextProps>`
    color:${({ theme, color }: any) => color};
    align-self:flex-start;
    font-size:${({ theme, fontSize }: any) => fontSize}px;
`;

const TabsWarpper = styled.View`
    flex-direction:row;
    margin-left:16px;
    margin-right:16px;
    margin-top:16px;
    justify-content:space-between;
`;

const FilterView = styled.View`
    flex-direction:row;
    width:40%;
    align-items:center;
    justify-content:flex-end;
`;

const SearchTextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }: any) => theme.colors.text};
    font-size: ${({ theme, fontSize }: any) => theme.fontSize.cardDate}px;
    padding-left: 8px;
`;

const ImageView = styled.Image<ImageProps>`
    margin-left:${({ theme, marginLeft }: any) => marginLeft}px;
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    `;

const SearchWrapperTextFieldView = styled.View`
    flex-direction:row;
    width:60%;
    padding:5px;
    align-items:center;
    border-radius:8px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const SearchWrapperView = styled.View`
    flex-direction:row; 
    justify-content:space-between;
    width:100%;
    padding:10px;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;