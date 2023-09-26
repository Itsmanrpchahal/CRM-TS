import React, { useState } from "react";
import styled, { useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { alarmIcon, pencilBorderIcon, uncheckIcon } from "../../utils/assets";
import TextField from "../TextField";
import { TouchableOpacity } from "react-native";

const NewAppointmentSheet = () => {
    const { colors } = useTheme()
    const [check1, setCheck1] = useState(false);

    return (
        <MainWrapperWhite>
            <TextWrapper marginTop={0} color={colors.black} fontSize={22} fontWeight={700}>New Appointment</TextWrapper>
            <HorizontalWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 50 }} height={22} width={22} source={pencilBorderIcon}></ImageView>
                <TextField
                    width={'90%'}
                    accessibilityLabel={'Email'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.darkGray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="email"
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={null}
                />
            </HorizontalWrapper>
            <HorizontalWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 16 }} height={22} width={22} source={alarmIcon}></ImageView>
                <TouchableOpacity onPress={() => { }}>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>9/14/2023</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>

                <TouchableOpacity>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>9/14/2023</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>

                <TextWrapper marginTop={10} color={colors.darkGray} fontSize={10} fontWeight={400}>to</TextWrapper>

                <TouchableOpacity>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>9/14/2023</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>
                <TouchableOpacity>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>9/14/2023</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>
            </HorizontalWrapper>


        </MainWrapperWhite>
    )
}

export default withTheme(NewAppointmentSheet)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    marginTop?: number;
}

const BorderTextView = styled.View`
    border-color:${({ theme }: any) => theme.colors.darkGray};
    padding:8px;
    margin-top:12px;
    border-width:1px;
    border-radius:15px;
    text-center:center;
    color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image`
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    resize-mode:contain;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

const TextWrapper = styled.Text<TextProps>`
    color: ${({ theme, color }: any) => color};
    font-size: ${({ theme, fontSize }: any) => fontSize}px;
    font-weight: ${({ theme, fontWeight }: any) => fontWeight};
    margin-top:${({ theme, marginTop }: any) => marginTop}px;
`;
