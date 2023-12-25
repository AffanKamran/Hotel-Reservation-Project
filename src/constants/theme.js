import { createTheme } from "@mui/material/styles";

/*const theme = createTheme({
	
	typography: {
		fontFamily: "Poppins"
	}
});*/

const theme = createTheme({
    components: {
        MuiTypography:{
            variants: [{
                props: {
                    variant: "body2",
                },
                style: {
                    fontSize: 11,
                }
            },
            {
                props: {
                    variant: "body3",
                },
                style: {
                    fontSize: 9,
                },
            }],
        },
    },
    palette: {
		primary: {
			main: "#097969",
		},
		secondary: {
			main: "#B99855",
		},
	},

});

export default theme