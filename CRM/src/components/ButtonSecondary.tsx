import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';

enum IconPosition {
    left = 'left',
    right = 'right',
}

type PrimaryButtonProps = {
    onPress: Function;
    btnText: string;
    loading?: boolean;
    icon?: string;
    isIconLeft?: boolean;
    fontSize?: number;
};

const SecondaryButton: React.FC<PrimaryButtonProps> = ({
    onPress,
    btnText,
    loading = false,
    icon,
    isIconLeft = true,
    fontSize,
}) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <SecondaryButton__Wrapper iconPosition={isIconLeft}>
                <SecondaryButton__Wrapper__Text fontSize={fontSize}>
                    {loading ? 'Loading...' : btnText}
                </SecondaryButton__Wrapper__Text>
                <ImageWrapperRight>
                    <ImageWrapperRight__Image tintColor={'white'} source={icon} />
                </ImageWrapperRight>
            </SecondaryButton__Wrapper>
        </TouchableOpacity>
    );
};

// @ts-ignore
export default withTheme(SecondaryButton);

type SecondaryButton__WrapperProps = {
    iconPosition: string;
};

type FontSizeProps = {
    fontSize: number;
};

const ImageWrapperRight = styled.View`
    background-color: ${({ theme }: any) => theme.colors.primary};
    padding: 8px;
    border-radius: 8px;
`;

const ImageWrapperRight__Image = styled.Image`
    height:16px;
    width:16px;
    resize-mode:contain;
`;

const SecondaryButton__Wrapper = styled.View<SecondaryButton__WrapperProps>`
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }: any) => theme.colors.primary};
    height: 50px;
    border-radius: 25px;
    flex-direction: ${({ iconPosition }: any) =>
        iconPosition ? 'row-reverse' : 'row'};
    padding: 0 6px 0 6px;
    margin-left:auto;
`;
const SecondaryButton__Wrapper__Text = styled.Text<FontSizeProps>`
    color: ${({ theme }: any) => theme.colors.white};
    font-size: ${({ theme, fontSize }: any) => fontSize};
`;
