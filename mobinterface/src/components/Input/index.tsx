import React, { forwardRef, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style} from "./styles";
import { themas } from "../../global/themes";

import {MaterialIcons, FontAwesome, Octicons} from '@expo/vector-icons'

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void,
    OnIconRightPress?: () => void,
}


export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput>| null    )=>{

    const{IconLeft, IconRight, IconLeftName, IconRightName,title, OnIconLeftPress, OnIconRightPress, ...rest} =Props

    const calculateSizeWidth = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }
    const calculateSizePaddingLeft = () =>{
        if(IconLeft && IconRight){
            return 10;
        }else if(IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }
    };


    return(
        <>
        {title&&<Text style={style.titleInput}>{title}</Text>}
         <View style={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft()}]}>
            {IconLeft && IconLeftName &&(

            <TouchableOpacity onPress={OnIconLeftPress} style={style.Button}>
                <IconLeft name ={IconLeftName as any} size={28} color={themas.colors.gray} style={style.Icon} />
            </TouchableOpacity>

            )}
            
                <TextInput 
                    style={[
                        style.input, {width: calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName &&(
                    <TouchableOpacity onPress={OnIconRightPress} style={style.Button}>
                        <IconRight name ={IconRightName as any} size={28} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                </View>
                </>
    )
})