// @ts-ignore
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';

type PrimaryButtonProps = {
    onPress: Function;
    btnText: string;
    loading?: boolean;
    backgroundColor?: string;
    heightBT?: number;
    color?: string;
    width?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    onPress,
    btnText,
    loading = false,
    backgroundColor,
    heightBT,
    color = 'white',
    width,
}) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <PrimaryButton__Wrapper
                backgroundColor={backgroundColor}
                height={heightBT}
                width={width}>
                <PrimaryButton__Wrapper__Text color={color}>
                    {loading ? 'Loading...' : btnText}
                </PrimaryButton__Wrapper__Text>
            </PrimaryButton__Wrapper>
        </TouchableOpacity>
    );
};

// @ts-ignore
export default withTheme(PrimaryButton);

type Props = {
    color: string;
}
const PrimaryButton__Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, backgroundColor }: any) =>
        backgroundColor ? backgroundColor : theme.colors.greenColor};
  height: ${({ height }: any) => (height ? height : 55)}px;
  border-radius: 26px;
  width: ${({ width }: any) => (width ? width : 180)}px;
`;
const PrimaryButton__Wrapper__Text = styled.Text<Props>`
  color: ${({ theme, color }: any) => color};
  padding: 10px;
`;