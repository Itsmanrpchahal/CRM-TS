import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { grommetIcon, waveIcon } from "../../utils/assets";
import { FlatList, Text, View, StyleSheet } from "react-native";

const ContactHeatMap = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                Heat Map
            </TextView>

            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Favorites</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />

                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>124</TextView1>

                </Card>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Saved Search</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />

                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>8</TextView1>
                </Card>
            </HorizontalWrapper>

            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Engagement</TextView1>

                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>00:13:53</TextView1>
                </Card>
                <Card>
                    <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Saved Criteria</TextView1>
                    <LiveView>
                        <FlatList
                            style={{ height: 80 }}
                            nestedScrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                            renderItem={() => {
                                return (
                                    <LineBarView>
                                        <LineBarText>
                                            4 Bedrooms
                                        </LineBarText>
                                        <LineBarProgress>
                                            <LineInProgress>
                                            </LineInProgress>
                                        </LineBarProgress>
                                        <LineProgressText>10</LineProgressText>
                                    </LineBarView>
                                )
                            }}>
                        </FlatList>
                    </LiveView>
                </Card>
            </HorizontalWrapper>

            <HorizontalWrapper>
                <Card>
                    <TextView1 style={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center" }} fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Surf Level</TextView1>

                    <View style={{ position: "relative", height: "100%", width: "100%", flexDirection: "row", alignItems: "flex-end" }}>
                        <View style={{ position: "relative", height: "100%", width: "90%", marginTop: 12, paddingHorizontal: 12, alignItems: "flex-end", justifyContent: "flex-start", paddingVertical: 12, flexDirection: "row", paddingLeft: 1 }}>
                            <View style={styles.leftnum}>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                                <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>

                                <Text style={styles.nummain}>0 -</Text>
                            </View>
                            <View style={{ justifyContent: "space-between", flexDirection: "row", height: "80%", width: "100%" }}>

                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 50 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >M</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 20 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >T</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 40 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >W</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 55 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >T</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 65 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >F</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 5 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >S</Text>
                                </View>
                                <View style={styles.mainlymain}>
                                    <View style={styles.covertop}>
                                        <View style={{ backgroundColor: colors.primary, height: 17 }}></View>
                                    </View>
                                    <Text style={styles.maincoverbar} >S</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </Card>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Search Behavior</TextView1>
                    </HorizontalWrapper1>
                    <ImageView source={grommetIcon} />
                    <TextView1 fontSize={12} color={colors.black} fontWeight={700} marginTop={0}>Grommet</TextView1>
                </Card>
            </HorizontalWrapper>

        </MainWrapper>
    )
}

export default withTheme(ContactHeatMap)

const styles = StyleSheet.create({
    nummain: { fontSize: 8, textAlign: "center", },
    leftnum: {
        // position:"absolute",
        // backgroundColor:"red",
        height: "100%",
        justifyContent: "space-between",
        // bottom:6
    },
    mainlymain: { position: "relative", width: 12, marginHorizontal: 2 },
    covertop: { height: "100%", justifyContent: "flex-end", position: "relative" },
    maincoverbar: { fontSize: 8, textAlign: "center" },

})

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    marginTop?: number;
}

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

const ImageView = styled.Image`
    height:70px;
    width:70px;
    resize-mode:contain;
    margin-top:10px;
`;


const LineProgressText = styled.Text`
    text-align: right;
    font-size: 7px;
    margin-top: 4;
    color: #979897;
`;

const LineInProgress = styled.View`
    height: 3px;
    border-radius: 22px;
    background-rolor: red;
    position:absolute;
    left: 0;
    top: 0;
    bottom: 0;
`;

const LineBarProgress = styled.View`
    width: 100%;
    height: 3px;
    border-radius: 22px;
    background-color:${({ theme }: any) => theme.colors.green};
    position: relative;
`;

const LineBarText = styled.Text`
    font-size: 11px;
    margin-bottom: 4px;
    width: 100%; 
`;

const LineBarView = styled.View`
    width: 100%;
    margin-bottom: 2px;  
`;

const HorizontalWrapper1 = styled.View`
    flex-direction:row;
    top:0;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:100%;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
`;

const ImageView1 = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    position:absolute;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    top:0;
    right:-6;
`;

const TextView1 = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-items:center;
    justify-content:center;
    align-self:center;
`;

const LiveView = styled.View`
    height:80px;
    width:90px;
    flex:1;
    overflow:hidden;
`;

const Card = styled.View`
    height:130px;
    width:130px;
    margin-bottom:15px;
    margin-top:15px;
    border-radius:15px;
    border-width:2px;
    justify-content:center;
    align-items:center;
    position:relative;
    align-self:center;
    border-color:${({ theme }: any) => theme.colors.primary};
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    text-align:${({ textAlign }: any) => textAlign};
    flexShrink:1;
    margin-top:${({ marginTop }: any) => marginTop}px
`;

const MainWrapper = styled.View`
    background-color:${({ theme }: any) => theme.colors.white};
    height:100%;
    padding:8px;
    flex: 1;
`;