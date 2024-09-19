import { StyleSheet } from "react-native";
import { themas } from "../../../global/themes";


export const styles = StyleSheet.create({   
    button:{
        width:250,
        height:50,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 10,
                    },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
            },
            textButton:{
                fontSize:16,
                color: "#FFFF",
                fontWeight: 'bold'
            },

})