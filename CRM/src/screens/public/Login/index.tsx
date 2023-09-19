import React, { useEffect, useState } from "react";
import { styled, withTheme } from "styled-components/native";
import { MainWrapper } from '../../../utils/globalStyles'
import navigationStrings from "../../../navigation/navigationStrings";
import { useTheme } from "styled-components";
import TextField from '../../../components/TextField';
import { Formik } from 'formik';
import { LOGIN_SCHEMA } from "./helpers";
import PrimaryButton from '../../../components/Button';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { googleIcon } from "../../../utils/assets";
import { TouchableOpacity } from "react-native";
import messaging from '@react-native-firebase/messaging';
import { useActions } from '../../../hooks/useActions'
import { requestUserPermission, NotificationListerner } from '../../../utils/pushnotifications_helper'
import { useTypedSelector } from '../../../hooks/useTypedSelector';


const Login = ({ navigation }) => {
    const { colors }: any = useTheme();
    const [deviceToken, setDeviceToken] = useState('')
    const { login } = useActions();
    const { loading, error, isAuthenticated } = useTypedSelector(
        state => state.auth,
    );
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '681904798882-r41s7mipcih0gdmsau2ds4c21pq4p476.apps.googleusercontent.com',
            iosClientId: '681904798882-24aavuvkrsg3l1mqrkn49g4kh0s4pom5.apps.googleusercontent.com',
        });
    }, [])

    useEffect(() => {
        requestUserPermission()
        NotificationListerner()
    }, [])

    useEffect(() => {
        getToken()
    }, [])

    const getToken = async () => {
        const token = await messaging().getToken()
        setDeviceToken(token)
    }

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut()
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo ==>', userInfo)
            //   setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('userInfo4 ==>', error)

                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('userInfo3 ==>', error)

                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log('userInfo2 ==>', error)

            } else {
                // some other error happened
                console.log('userInfo1 ==>', error)
            }
        }
    };

    return (
        <MainWrapper>
            <LoginWrapper>
                <TextWrapper marginTop={0} color={colors.white} fontSize={18} fontWeight={700}>Lokal CRM WIP</TextWrapper>
                <TextWrapper marginTop={30} color={colors.white} fontSize={40} fontWeight={700}>Welcome</TextWrapper>
                <Formik
                    validationSchema={LOGIN_SCHEMA}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        const formData = new FormData()
                        formData.append('username', 'access@wpkraken.io')
                        formData.append('password', 'CherryPicker1!')
                        formData.append('device_type', '2')
                        formData.append('device_token', deviceToken)
                        formData.append('user_type', '2')
                        await login(formData)
                        navigation.navigate(navigationStrings.TAB_BAR_DASHBOARD)
                    }}>
                    {({ setFieldValue, handleSubmit, errors }) => (
                        <FormikWrapper>
                            <TextField
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                placeholder="email"
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                error={errors ? errors.email : null}
                            />
                            <TextField
                                onChangeText={(value: any) => {
                                    setFieldValue('password', value);
                                }}
                                placeholder="********"
                                secureTextEntry={true}
                                error={errors ? errors.password : null}
                            />

                            <ButtonWrapper>
                                <PrimaryButton
                                    onPress={handleSubmit}
                                    backgroundColor={colors.white}
                                    btnText={'Continue'}
                                    loading={false}
                                    color={colors.black}
                                />
                                <TouchableOpacity onPress={() => { signIn() }}>
                                    <GoogleButton>
                                        <ImageView source={googleIcon}></ImageView>
                                        <TextWrapper marginTop={0} color={colors.white} fontSize={18} fontWeight={700}>Sign in with google</TextWrapper>
                                    </GoogleButton>
                                </TouchableOpacity>
                            </ButtonWrapper>

                        </FormikWrapper>
                    )}
                </Formik>


            </LoginWrapper>
        </MainWrapper>
    )
}

export default withTheme(Login)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    marginTop?: number;
}


const ImageView = styled.Image`
    justify-content:center;
    align-items:center;
    height:30px;
    width:30px;
    resize-mode:contain;
    margin-right:10px;
`;

const GoogleButton = styled.View`
    border-color:white;
    border-width:1px;
    padding:5px;
    flex-direction:row;
    margin: 0px 10px 0px 10px;
    align-items:center;
    border-radius:20px;
    margin-top:20px;
`;

const FormikWrapper = styled.View`
    width:100%;
    margin-top:20px;
`;

const ButtonWrapper = styled.View`
  margin-top: 80px;
  align-items: center;
  width:100%;
`;

const TextWrapper = styled.Text<TextProps>`
    color: ${({ theme, color }: any) => color};
    font-size: ${({ theme, fontSize }: any) => fontSize}px;
    font-weight: ${({ theme, fontWeight }: any) => fontWeight};
    margin-top:${({ theme, marginTop }: any) => marginTop}px;
`;

const TopView = styled.View``;

const LoginWrapper = styled.View`
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
`