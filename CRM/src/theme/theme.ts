import { DarkTheme, DefaultTheme as LightTheme } from '@react-navigation/native';

export const navigationTheme = {
    light: {
        ...LightTheme,
        type: 'light',
        colors: {
            ...LightTheme.colors,
            primary: '#496D8C',
            secondary: '#E3E1EE',
            white: '#ffffff',
            black: '#000000',
            gray: '#D9D8D8'
        },
        spacing: {
            horizontal: 15,
        },
        fontSize: {
            cardDate: 15,
            cardTitle: 20,
            cardSubTitle: 15,
            cardHeading: 30,
        },
    },
    dark: {
        ...DarkTheme,
        type: 'dark',
        colors: {
            ...DarkTheme.colors,
            primary: '#496D8C',
            secondary: '#E3E1EE',
            white: '#ffffff',
            black: '#000000',
            gray: '#D9D8D8'
        },
        spacing: {
            horizontal: 15,
        },
        fontSize: {
            cardDate: 15,
            cardTitle: 20,
            cardSubTitle: 15,
            cardHeading: 30,
        },
    },
};