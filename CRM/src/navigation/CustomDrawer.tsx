// @ts-ignore
import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
import navigationStrings from './navigationStrings';
import { clearAll } from "../storage";
import { persistor } from "../store";
import { useActions } from "../hooks/useActions";
import axios from "axios";
import { profileIcon, settingIcon } from '../assets';
import { sideMenuOptions } from '../utils/constants'
import { useTypedSelector } from '../hooks/useTypedSelector';

function CustomDrawer(props: any) {
  const { setAuthentication, setSAuthentication, logout } = useActions();
  const { colors }: any = useTheme();
  const navigation = useNavigation()
  const { loading, error, isAuthenticated } = useTypedSelector(
    state => state.auth,
  );
  const { s_loading, s_isAuthenticated } = useTypedSelector(
    state => state.socialLogin,
  );
  const logoutAction = async () => {
    await logout()
    props.navigation.closeDrawer()

    await clearAll();
    await persistor.flush();
    await persistor.purge();
    setAuthentication(false);
    setSAuthentication(false)
    delete axios.defaults.headers.common["security_key"];
    delete axios.defaults.headers.common["access_token"];
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
              <TouchableOpacity onPress={() => {
                navigation.navigate(navigationStrings.SETTING)
              }}>
                <ImageView source={settingIcon}></ImageView>
              </TouchableOpacity>
            </HorizontalWrapper>
            <FlatList
              data={sideMenuOptions}
              ItemSeparatorComponent={<Divider backgroundColor={colors.white}></Divider>}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    item.value === 1 ? navigation.navigate(navigationStrings.TAB_BAR_DASHBOARD) :
                      item.value === 2 ? navigation.navigate(navigationStrings.TAB_BAR_CONTACTS) :
                        item.value === 3 ? navigation.navigate(navigationStrings.TAB_BAR_USERS) :
                          item.value === 4 ? navigation.navigate(navigationStrings.SELF_SOURCED_LEADS) :
                            item.value === 5 ? navigation.navigate(navigationStrings.TRANSACTION_DESK) :
                              item.value === 6 ? navigation.navigate(navigationStrings.DOCUMENT_PORTAL) :
                                item.value === 7 ? navigation.navigate(navigationStrings.TAB_BAR_PROPERTIES) :
                                  item.value === 8 ? navigation.navigate(navigationStrings.CALL_CENTER) :
                                    item.value === 9 ? navigation.navigate(navigationStrings.AGENTS) :
                                      item.value === 10 ? navigation.navigate(navigationStrings.RETALORS) :
                                        item.value === 11 ? navigation.navigate(navigationStrings.MARKETING) :
                                          item.value ? logoutAction() : null
                  }}>
                    <ItemWrapper>
                      <ImageView source={item.image}></ImageView>
                      <UserName>{item.label}</UserName>
                    </ItemWrapper>
                  </TouchableOpacity>
                )
              }}>

            </FlatList>
          </MainWrapper>
        </DrawerWrapper>
      </ScrollView >
    </SafeAreaView >
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
  height:28px;
  width:28px;
  resize-mode:contain;
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