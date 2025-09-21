import { Image, StyleSheet, Text, View } from "react-native";
import { use, useEffect, useState } from "react";

import { colors } from "@/styles/colors";
import Button from "@/components/ui/button";
import Input from "../../components/ui/input";
import useUserDataBase from "@/database/useUserDataBase";

export default function Cadaster() {
    const [name, setName] = useState("");
    const [teste, setTeste] = useState("Caio");

    const userDataBase = useUserDataBase();

    function create() {
        userDataBase.create({
            name
        });
    }

    async function list() {
        try {
            const { response } = await userDataBase.showName();

            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        list();
    }, [])

    return (
        <View style={styles.Screen}>
            <View style={styles.Header}>
                <Image source={require('../../assets/images/panda-coin.png')} />
            </View>

            <View style={styles.MainContent}>
                <View style={styles.Texts}>
                    <Text style={styles.Title}>
                        Que bom ter você por aqui!
                    </Text>

                    <Text style={styles.Description}>
                        Sem cadastro e sem burocracia: informe seu nome e comece a usar o Planejei.
                    </Text>

                    <Input
                        placeholder="Digite seu nome"
                        onChange={(text) => setName(text)}
                        value={name}
                    />
                </View>

                <Button
                    title="Confirmar"
                    backgroud={colors.orange}
                    onPress={create}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Header: {
        backgroundColor: colors.green,
        borderBottomLeftRadius: 256,
        minHeight: 250,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    MainContent: {
        paddingTop: 24,
        paddingRight: 40,
        paddingLeft: 40,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 24
    },
    Texts: {
        display: "flex",
        flexDirection: "column",
        gap: 16
    },
    Title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.black
    },
    Description: {
        fontSize: 16,
        color: colors.darkGray
    }
})