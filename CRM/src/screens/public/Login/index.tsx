import React, { useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = ({ navigation }) => {
    const { colors }: any = useTheme();
    useEffect(() => {
    }, [])
    return (
        <MainWrapper>
            <LoginWrapper>
                <TextWrapper marginTop={0} color={colors.white} fontSize={18} fontWeight={700}>Lokal CRM WIP</TextWrapper>
                <TextWrapper marginTop={30} color={colors.white} fontSize={40} fontWeight={700}>Welcome</TextWrapper>
                <Formik
                    validationSchema={LOGIN_SCHEMA}
                    initialValues={{
                        email: 'fd@m.c',
                        password: 'as',
                    }}
                    onSubmit={(values) => {
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