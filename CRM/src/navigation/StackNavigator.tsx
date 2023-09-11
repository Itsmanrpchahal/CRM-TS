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
import transactionDesk from '../screens/private/transactionDesk';
import callCenter from '../screens/private/callCenter';
import userProfileView from '../screens/private/userProfileView';
import contactView from '../screens/private/contactView';
import documentPortal from '../screens/private/documentPortal';
import DocumentPortalDetail from '../screens/private/DocumentPortalDetail';
import marketing from '../screens/private/marketing';
import selfSourcedLeads from '../screens/private/selfSourcedLeads';
const Stack = createStackNavigator();

function StackNavigator(props: any) {
    const { colors }: any = useTheme();
    const { isAuthenticated } = useTypedSelector((state) => state.auth);

    // @ts-ignore
    return (
        <Stack.Navigator initialRouteName={navigationStrings.LOGIN} >
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
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: 'Agents',
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.RETALORS}
                component={retalors}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.RETALORS,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.TRANSACTION_DESK}
                component={transactionDesk}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: 'Transaction Desk',
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.CALL_CENTER}
                component={callCenter}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.CALL_CENTER,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.USER_PROFILE}
                component={userProfileView}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.USER_PROFILE,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.CONTACT_VIEW}
                component={contactView}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.CONTACT_VIEW,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.DOCUMENT_PORTAL}
                component={documentPortal}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.DOCUMENT_PORTAL,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />


            <Stack.Screen
                name={navigationStrings.DOCUMENT_PORTAL_DETAIL}
                component={DocumentPortalDetail}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.DOCUMENT_PORTAL_DETAIL,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.MARKETING}
                component={marketing}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.MARKETING,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

            <Stack.Screen
                name={navigationStrings.SELF_SOURCED_LEADS}
                component={selfSourcedLeads}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.white,
                    title: navigationStrings.SELF_SOURCED_LEADS,
                    headerStyle: {
                        backgroundColor: colors.primary
                    }
                }}
            />

        </Stack.Navigator>
    )
}
export default StackNavigator;
