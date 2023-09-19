import React, { useState } from 'react'
import { styled, useTheme, withTheme } from 'styled-components/native'
import { Agenda, DateData } from 'react-native-calendars';
import { Card } from 'react-native-paper'
import { TouchableOpacity, View, Text } from 'react-native';
import { plusIcon } from '../../../utils/assets'

const CalerderScreen = () => {
    const [items, setItems] = useState({})
    const { colors } = useTheme()
    const loadItems = (day: DateData) => {
        const timeToString = (time: number) => {
            const date = new Date(time);
            return date.toISOString().split('T')[0];
        }
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }

            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems)
        }, 1000);
    };

    const renderDay = (item) => {
        return (
            <TouchableOpacity>
                <Card style={{ backgroundColor: 'white', marginTop: 25 }}>
                    <Card.Content >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <MainWrapper>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                numColumns={2}
                theme={{ dotColor: colors.primary, agendaKnobColor: colors.primary, selectedDayBackgroundColor: colors.primary }}
                selected={'2023-10-17'}
                renderItem={renderDay}>
            </Agenda>

            <AddView>
                <ImageView source={plusIcon}>

                </ImageView>
            </AddView>
        </MainWrapper>
    )
}

export default withTheme(CalerderScreen)

const ImageView = styled.Image`
    height:16px;
    width:16px;
    resize-mode:contain;
`;
const AddView = styled.View`
    height:50px;
    width:50px;
    border-radius:25px;
    position:absolute;
    bottom:16;
    right:16;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }: any) => theme.colors.primary}

`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white}
`;


