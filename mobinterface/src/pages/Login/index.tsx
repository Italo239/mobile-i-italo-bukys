import React, { useState } from "react";

import { useBatteryLevel } from 'expo-battery';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {FontAwesome, Octicons} from '@expo/vector-icons'

import {
    StyleSheet,
    Text,
    View,
    Image, 
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/Logo.png'
import{MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Input/Button";
//import { Input } from "../../components/Input";
import {useNavigation, NavigationProp} from '@react-navigation/native'

export default function Login (){ 
    const navigation =useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ShowPassword,setShowPassword] = useState(true);
    const [loading,setLoanding] = useState(false);
    
     async function getLogin(){
        try {
            setLoanding(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == 'daora.legal@gmail.com' && password == '1234'){
                    Alert.alert('Logado com sucesso')
                    navigation.navigate("BottomRoutes")

                }else{
                    Alert.alert('Usuário não encontrado!')

                }

                navigation.navigate("BottomRoutes")
                setLoanding(false)
            },3000)

            
        } catch (error) {
            console.log(error)
            
        }
    }
    

    
    
    return (
        
        <View style={style.container}>
            <View style={style.BoxTop}>
                <Image
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                 />
                 <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.BoxMid}>
                <Input
                    value={email}
                    onChangeText ={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                  <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={ShowPassword?"eye-closed":"eye   "}
                    secureTextEntry={ShowPassword}
                    OnIconLeftPress={()=>setShowPassword(!ShowPassword)}

                    
                />
                
            </View>
            <View style ={style.BoxBottom}>
                <Button 
                    text="ENTRAR"
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={style.textBottonCreate}>Crie agora</Text></Text>
        </View>
    )
}
