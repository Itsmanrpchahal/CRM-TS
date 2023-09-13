import React, { useRef, useState } from "react";
import { styled, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { dropdownIcon, editIcon, homeIcon, pencilIcon, sendIcon } from '../../utils/assets'
import { TextInput } from "react-native";
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'
import ButtonSecondary from "../ButtonSecondary";


const SendSearchCriteriaSheet = () => {
    const RichText = useRef(); //reference to the RichEditor component
    const [article, setArticle] = useState("");
    return (
        <MainWrapperWhite>
            <TopWrapper>
                <ImageView source={homeIcon} />
                <TextView fontSize={18}>Send Search Criteria</TextView>
            </TopWrapper>

            <TextView fontSize={14}>Client Name</TextView>
            <DropdownView>
                <TextInput style={{ width: '80%', height: 30 }}>

                </TextInput>
                <ImageView source={dropdownIcon} />
            </DropdownView>

            <TextView fontSize={14}>Subject</TextView>
            <DropdownView>
                <TextInput style={{ width: '80%', height: 30 }}>

                </TextInput>
            </DropdownView>

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
                        console.log("descriptionText:", descriptionText);
                    }}
                />
            </RichBox>

            <BtnWrapper>

                <ButtonSecondary
                    onPress={() => { }}
                    btnText='   Edit     '
                    fontSize={16}
                    isIconLeft={false}
                    icon={pencilIcon}>

                </ButtonSecondary>
                <ButtonSecondary
                    onPress={() => { }}
                    btnText='  Send  '
                    fontSize={16}
                    isIconLeft={false}
                    icon={sendIcon}>

                </ButtonSecondary>
            </BtnWrapper>
            <TextView fontSize={16}>Search parameters:</TextView>
            <TextView style={{ fontWeight: 300, marginBottom: 40 }} fontSize={16}>Single Family, Boca Raton, 3 Beds, 3 Baths, Pool,
                Garage, Tennis, Country Club </TextView>

        </MainWrapperWhite>
    )
}
export default withTheme(SendSearchCriteriaSheet)

type TextViewProps = {
    fontSize: number;
}

const BtnWrapper = styled.View`
    margin-top:16px;
    flex-direction:row;
    justify-content:space-between;
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

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;