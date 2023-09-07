// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../navigation/navigationStrings';
import { useTheme } from '@react-navigation/native';
import Login from '../screens/public/Login';
import { useTypedSelector } from "../hooks/useTypedSelector";
import DashboardTabs from './Tabbar';
import { Call, Chat, Contacts, Messages, Properties } from '.';
import surfLeads from '../screens/private/surfLeads';
import agents from '../screens/private/agents';
import retalors from '../screens/private/retalors';
const Stack = createStackNavigator();

function StackNavigator(props: any) {
    const { colors }: any = useTheme();
    const { isAuthenticated } = useTypedSelector((state) => state.auth);

    // @ts-ignore
    return (
        <Stack.Navigator initialRouteName={navigationStrings.LOGIN}  >
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                    animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_DASHBOARD}
                component={DashboardTabs}
                options={{
                    headerShown: false,
                    title: 'Dashboard',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_CALL}
                component={Call}
                options={{
                    headerShown: false,
                    title: 'Call',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_PROPERTIES}
                component={Properties}
                options={{
                    headerShown: false,
                    title: 'Properties',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_CHAT}
                component={Chat}
                options={{
                    headerShown: false,
                    title: 'Chat',
                }}
            />
            <Stack.Screen
                name={navigationStrings.TAB_BAR_MESSAGE}
                component={Messages}
                options={{
                    headerShown: false,
                    title: 'Message',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_USERS}
                component={surfLeads}
                options={{
                    headerShown: false,
                    title: 'Surf Leads',
                }}
            />

            <Stack.Screen
                name={navigationStrings.TAB_BAR_CONTACTS}
                component={Contacts}
                options={{
                    headerShown: false,
                    title: 'Contacts',
                }}
            />
            <Stack.Screen
                name={navigationStrings.AGENTS}
                component={agents}
                options={{
                    headerShown: false,
                    title: 'Agents',
                }}
            />

            <Stack.Screen
                name={navigationStrings.RETALORS}
                component={retalors}
                options={{
                    headerShown: false,
                    title: 'Retalors',
                }}
            />

        </Stack.Navigator>
    )
}
export default StackNavigator;
