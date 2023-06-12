import React from "react";
import { Text, View ,Image, StyleSheet} from "react-native";
import logo from '../../../assets/logo.png';

export default function Topo(){
    return <View style={estilos.Topo}>
        <Image style={estilos.image} source={logo} />
        <Text style={estilos.boasVindas}>Olá Usuario</Text>
        <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
}

// estilizando os textos

const estilos = StyleSheet.create({
    Topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
},
    image: {
        width: 70,
        height:28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    },

})