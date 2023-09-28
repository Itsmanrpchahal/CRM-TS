import React, { useEffect, useRef, useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { dropdownIcon, sendIcon, thumbsupIcon } from '../../utils/assets'
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'
import { Dropdown } from 'react-native-element-dropdown';
import ButtonSecondary from "../ButtonSecondary";
import { Formik } from 'formik';
import { SEND_SELECTED_PROPERTIES_SCHEMA } from "../../screens/public/Login/helpers";
import TextField from "../TextField";

const SendSelectedPropertiesSheet = (props: any) => {
    const RichText = useRef(); //reference to the RichEditor component
    const [article, setArticle] = useState("");
    const { colors } = useTheme()
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <MainWrapperWhite>
            <TopWrapper>
                <ImageView source={thumbsupIcon} />
                <TextView fontSize={18}>Send Selected Properties</TextView>
            </TopWrapper>
            <Formik
                validationSchema={SEND_SELECTED_PROPERTIES_SCHEMA}
                initialValues={{
                    client_email: '',
                    subject: '',
                    message: ''
                }}
                onSubmit={async (values) => {
                }}>
                {({ setFieldValue, handleSubmit, errors }) => (
                    <FormikWrapper>
                        <TextView fontSize={14}>Client Name</TextView>
                        <DropdownView>
                            <Dropdown
                                style={{ width: '100%' }}
                                data={props?.data}
                                iconStyle={{ tintColor: colors.black }}
                                search
                                maxHeight={300}
                                labelField="email"
                                valueField="email"
                                placeholder={!isFocus ? 'Select Client' : '...'}
                                searchPlaceholder="Search..."
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                renderRightIcon={() => {
                                    return (
                                        <ImageView source={dropdownIcon} />
                                    )
                                }}
                                onChange={item => {
                                    // setValue(item.value);
                                    setFieldValue('client_email', item?.email)
                                    setIsFocus(false);
                                }}

                            />
                        </DropdownView>

                        {errors !== null && (
                            <ErrorWrapper>
                                <ErrorWrapper__Text>{errors.client_email}</ErrorWrapper__Text>
                            </ErrorWrapper>
                        )}

                        <TextField
                            accessibilityLabel={'Subject'}
                            accessibilityLabelColor={colors.black}
                            borderColor={colors.gray}
                            borderRadius={5}
                            color={colors.black}
                            onChangeText={(value: any) => {
                                setFieldValue('subject', value);
                            }}
                            placeholder="subject"
                            keyboardType={'default'}
                            autoCapitalize={'none'}
                            error={errors ? errors.subject : null}
                        />

                        <TextView fontSize={14}>Message</TextView>

                        <RichBox>
                            <RichToolbar
                                style={{ backgroundColor: 'white' }}
                                placeholder='Type here...'
                                editor={RichText}
                                actions={[
                                    actions.undo,
                                    actions.redo,
                                    actions.setBold,
                                    actions.setItalic,
                                    actions.setUnderline,
                                    actions.alignCenter,
                                    actions.alignFull,
                                    actions.alignLeft,
                                    actions.alignRight,
                                    actions.blockquote,
                                    actions.checkboxList,
                                    actions.insertLink]}
                            />
                            <RichEditor
                                ref={RichText}
                                containerStyle={{ height: 100 }}
                                style={{ height: 400 }}
                                onChange={descriptionText => {
                                    setFieldValue('message', descriptionText)
                                    console.log("descriptionText:", descriptionText);
                                }}
                            />
                        </RichBox>
                        {errors !== null && (
                            <ErrorWrapper>
                                <ErrorWrapper__Text>{errors.message}</ErrorWrapper__Text>
                            </ErrorWrapper>
                        )}

                        <BtnWrapper>
                            <ButtonSecondary
                                onPress={() => { handleSubmit() }}
                                btnText='  Send  '
                                fontSize={16}
                                isIconLeft={false}
                                icon={sendIcon}>

                            </ButtonSecondary>
                        </BtnWrapper>
                    </FormikWrapper>
                )}
            </Formik>


        </MainWrapperWhite>
    )
}

export default withTheme(SendSelectedPropertiesSheet)

type TextViewProps = {
    fontSize: number;
}


const ErrorWrapper = styled.View`
  margin-top: 3px;
  padding-left: 2px;
`;
const ErrorWrapper__Text = styled.Text`
  color: red;
`;

const BtnWrapper = styled.View`
    margin-top:16px;
`;

const RichBox = styled.View`
    border-radius:10px;
    border-width:1px;
    padding:10px;
    margin-top:10px;
    height:150px;
    border-color:${({ theme }: any) => theme.colors.gray}
`;
const DropdownView = styled.View`
    border-radius:8px;
    border-width:1px;
    margin-top:10px;
    padding:4px;
    justify-content:space-between;
    flex-direction:row;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ theme }: any) => theme.colors.black};
    margin-top:10px;
`;

const ImageView = styled.Image`
    height:30px;
    width:30px;
    resize-mode:contain;
`;

const FormikWrapper = styled.View`
    width:100%;
    margin-top:20px;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;