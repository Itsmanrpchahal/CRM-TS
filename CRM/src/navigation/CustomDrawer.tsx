// @ts-ignore
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import { withTheme } from 'styled-components';
import navigationStrings from './navigationStrings';
import { clearAll } from "../storage";
import { persistor } from "../store";
import { useActions } from "../hooks/useActions";
import axios from "axios";
import { profileIcon, settingIcon } from '../assets';
import { sideMenuOptions } from '../utils/constants'

function CustomDrawer(props: any) {
  const { setAuthentication } = useActions();
  const { colors }: any = useTheme();

  const logout = async () => {
    await clearAll();
    await persistor.flush();
    await persistor.purge();
    setAuthentication(false);
    delete axios.defaults.headers.common["Authorization"];
    props.navigation.reset({
      index: 0,
      routes: [{ name: navigationStrings.LOGIN }],
    });
  };
  // @ts-ignore
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ScrollView>
        <DrawerWrapper backgroundColor={colors.primary}>
          <MainWrapper>
            <HorizontalWrapper>
              <ItemWrapper>
                <ImageView source={profileIcon}></ImageView>
                <UserName>Username</UserName>
              </ItemWrapper>
              <ImageView source={settingIcon}></ImageView>
            </HorizontalWrapper>
            <FlatList
              data={sideMenuOptions}
              ItemSeparatorComponent={<Divider backgroundColor={colors.white}></Divider>}
              renderItem={({ item }) => {
                return (
                  <ItemWrapper>
                    <ImageView source={item.image}></ImageView>
                    <UserName>{item.label}</UserName>
                  </ItemWrapper>
                )
              }}>

            </FlatList>
          </MainWrapper>
        </DrawerWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withTheme(CustomDrawer);

type DrawerWrapperProps = {
  backgroundColor: string;
};


const UserName = styled.Text`
  color:${({ theme }: any) => theme.colors.white};
  font-size:18px;
`;

const ImageView = styled.Image`
  margin: 10px;
`;

const HorizontalWrapper = styled.View`
  flex-direction:row;
  justify-content:space-between;
`;

const ItemWrapper = styled.View`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`;

const Divider = styled.View<DrawerWrapperProps>`
  height: 1px;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:5px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const MainWrapper = styled.View`
  flex: 1;
`;

const DrawerWrapper = styled.View<DrawerWrapperProps>`
  background-color: ${({ backgroundColor }: any) => backgroundColor};
  margin-top: 20px;
  justify-content: space-between;
`;