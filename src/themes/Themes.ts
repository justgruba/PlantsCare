import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#85be4a"
        },
        secondary: {
            main: "#FF5A33"
        },
    },
    typography: {
        fontFamily: [
            'Amatic SC',
            'cursive'
        ].join(','),
        fontSize: 18
    }
});

export default theme;