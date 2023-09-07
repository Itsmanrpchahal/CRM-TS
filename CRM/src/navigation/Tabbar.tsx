// @ts-ignore
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import { Chat, Call, Contacts, Dashboard, Properties, Messages } from '../navigation/index';
import navigationStrings from './navigationStrings';
import { TabBarIcon } from './TabbarIcon';
import { MenuIcon } from '../assets';
import surfLeads from '../screens/private/surfLeads';

const Tab = createBottomTabNavigator();

function DashboardTabs(props: any) {
    const { colors, type }: any = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => (
                    <TabBarIcon color={color} routeName={route.name} />
                ),
                tabBarStyle: { backgroundColor: colors.primary },
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.black,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                        <NavigationBurgerIcon
                            source={type === 'dark' ? MenuIcon : MenuIcon}
                        />
                    </TouchableOpacity>
                ),
            })}>
            <Tab.Screen name={navigationStrings.TAB_BAR_PROPERTIES} component={Properties} options={{
                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen name={navigationStrings.TAB_BAR_USERS} component={surfLeads} options={{
                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen
                name={navigationStrings.TAB_BAR_CONTACTS}
                component={Contacts}
                options={{
                    tabBarLabel: () => { return null }
                }}
            />
            <Tab.Screen name={navigationStrings.TAB_BAR_DASHBOARD} component={Dashboard} options={{
                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen name={navigationStrings.TAB_BAR_MESSAGE} component={Messages} options={{
                tabBarLabel: () => { return null }
            }} />
            <Tab.Screen name={navigationStrings.TAB_BAR_CALL} component={Call} options={{
                tabBarLabel: () => { return null }
            }} />
            <Tab.Screen name={navigationStrings.TAB_BAR_CHAT} component={Chat} options={{
                tabBarLabel: () => { return null }
            }} />
        </Tab.Navigator>
    );
}

export default DashboardTabs;
const NavigationBurgerIcon = styled.Image`
  margin-left: 16px;
`;