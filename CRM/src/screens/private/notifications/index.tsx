import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { mailBlackIcon, MessageIcon, PhoneIcon, pulseIcon, transactionDeskIcon } from "../../../utils/assets";
import { FlatList } from "react-native";
import { chatTabIcon, phoneTabIcon } from "../../../assets";

const data = [
    {
        label: 'surf Mail',
        image: MessageIcon,
        count: 1,
    },
    {
        label: 'surf Mail',
        image: phoneTabIcon,
        count: 6,
    },
    {
        label: 'surf Mail',
        image: chatTabIcon,
        count: 5,
    },
    {
        label: 'surf Mail',
        image: transactionDeskIcon,
        count: 1,
    },
    {
        label: 'surf Mail',
        image: pulseIcon,
        count: 4,
    }
]
const Notifications = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <FlatList
                data={data}
                ItemSeparatorComponent={<Divider />}
                ListFooterComponent={<Divider />}
                renderItem={({ item }) => {
                    return (
                        <ItemWrapper style={{ padding: 16 }}>
                            <ItemWrapper>
                                <ImageView tintColor={colors.black} source={item.image} />
                                <TextView>{item.label}</TextView>
                            </ItemWrapper>
                            <BadgeView>
                                <TextView>{item.count}</TextView>
                            </BadgeView>
                        </ItemWrapper>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(Notifications)

type TextProps = {
    color?: number
}

const Divider = styled.View`
    height:1px;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const BadgeView = styled.View`
    height:30px;
    width:30px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    background-color:#00D8FF;
`;

const TextView = styled.Text<TextProps>`
    font-size:16px;
    font-weight:500;
    color:${({ color }: any) => color};
`;

const ImageView = styled.Image`
    height:22px;
    width:22px;
    margin-right:16px;
    resize-mode:contain;
`;

const ItemWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;