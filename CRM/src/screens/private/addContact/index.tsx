import React, { useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import TextField from "../../../components/TextField";
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from "react-native";
import { profileIcon } from "../../../utils/assets";
import PrimaryButton from '../../../components/Button'
import ButtonSecondary from "../../../components/ButtonSecondary";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const AddContact = () => {
    const { colors } = useTheme()
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <MainWrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextField
                    accessibilityLabel={'Full name'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.gray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="email"
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={null}
                />

                <TextField
                    accessibilityLabel={'Email'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.gray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="email"
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={null}
                />

                <TextField
                    accessibilityLabel={'Mobile Phone'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.gray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="mobile phone"
                    keyboardType={'number'}
                    autoCapitalize={'none'}
                    error={null}
                />

                <TextWrapper color={colors.black}>
                    Contact Type
                </TextWrapper>

                <DropDownWrapper>
                    <Dropdown
                        style={{ width: '100%' }}
                        data={data}
                        iconStyle={{ tintColor: colors.black }}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </DropDownWrapper>

                <TextWrapper color={colors.black}>
                    City of interest
                </TextWrapper>

                <DropDownWrapper>
                    <Dropdown
                        style={{ width: '100%' }}
                        data={data}
                        search
                        iconStyle={{ tintColor: colors.black }}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />
                </DropDownWrapper>

                <HorizontalWrapper>
                    <TextField
                        width={'45%'}
                        accessibilityLabel={'Address'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Street Address"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                    <TextField
                        width={'45%'}
                        accessibilityLabel={''}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="City"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                </HorizontalWrapper>

                <HorizontalWrapper>
                    <TextField
                        width={'45%'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="State"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                    <TextField
                        width={'45%'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Zip"
                        keyboardType={'number'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                </HorizontalWrapper>

                <HorizontalWrapper>
                    <TextField
                        width={'45%'}
                        accessibilityLabel={'Social Media'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Facebook URL"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                    <TextField
                        width={'45%'}
                        accessibilityLabel={''}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Google URL"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                </HorizontalWrapper>

                <HorizontalWrapper>
                    <TextField
                        width={'45%'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Instagram URL"
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                    <TextField
                        width={'45%'}
                        accessibilityLabelColor={colors.black}
                        borderColor={colors.gray}
                        placeholderTextColor={colors.gray}
                        borderRadius={18}
                        onChangeText={(value: any) => {
                        }}
                        placeholder="Linked URL"
                        keyboardType={'number'}
                        autoCapitalize={'none'}
                        error={null}
                    />
                </HorizontalWrapper>

                <TextWrapper color={colors.black}>
                    Photo
                </TextWrapper>

                <HorizontalWrapper1>
                    <ImageView height={70} width={70} source={profileIcon} />
                    <ButtonView>
                        <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Replace</TextView>
                    </ButtonView>
                    <ButtonView>
                        <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Remove</TextView>
                    </ButtonView>
                </HorizontalWrapper1>

                <HorizontalBtnWrapper>
                    <PrimaryButton
                        onPress={() => { }}
                        borderColor={colors.primary}
                        width={120}
                        heightBT={40}
                        backgroundColor={colors.white}
                        btnText={'Cancel'}
                        loading={false}
                        showIcon={false}
                        color={colors.black}
                    />

                    <ButtonSecondary
                        onPress={() => { }}
                        style={{ marginLeft: 16 }}
                        btnText='Save'
                        height={40}
                        fontSize={15}
                        showIcon={false}
                        isIconLeft={false}>

                    </ButtonSecondary>
                </HorizontalBtnWrapper>
            </ScrollView>

        </MainWrapper>
    )
}

export default withTheme(AddContact)

type TextProps = {
    color?: string;
}

type ImageProps = {
    height: number;
    width: number;
}

type TextViewProps = {
    fontSize: number;
    marginLeft?: number;
    marginTop?: number;
    color?: number;
    textAlign?: string;
}

const HorizontalBtnWrapper = styled.View`
    flex-direction:row;
    justify-content:flex-end;
    margin-top:16px;
    `;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    text-align:${({ textAlign }: any) => textAlign}
`;

const ButtonView = styled.View`
    padding:8px;
    border-radius:10px;
    height:35px;
    margin-left:10px;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
`;

const HorizontalWrapper1 = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

const DropDownWrapper = styled.View`
    width:100%;
    flex-direction:row;
    border-width:1px;
    border-radius:16px;
    padding:0px 16px 0px 16px;
    margin-top:10px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const TextWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    margin-top:16px;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    padding:0px 16px 16px 16px;
    background-color:${({ theme }: any) => theme.colors.white}
`;