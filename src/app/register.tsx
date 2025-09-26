import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";

import useUserDataBase from "@/database/useUserDataBase";

import { colors } from "@/styles/colors";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import InitialRegisterBody from "@/components/initialRegisterBody";

export default function Register() {
    const [name, setName] = useState<string>("");

    const userDataBase = useUserDataBase();

    function create() {
        if (name.length >= 4) {
            userDataBase.create({
                name
            });

            alert("Usuário criado com sucesso!");

            router.replace("/firstBankRegister");
        } else {
            alert("Não foi possivel criar usuário pois é preciso de 4 ou mais caracteres")
        }
    }

    function temp() {
        router.replace("/firstBankRegister");
    }

    async function list() {
        try {
            const { response } = await userDataBase.showUser();

            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        list();
    }, [])

    return (
        <InitialRegisterBody>
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
                        onChange={(text) => setName(String(text))}
                    />
                </View>

                <Button
                    title="Confirmar"
                    backgroud={colors.orange}
                    onPress={temp}
                />
            </View>
        </InitialRegisterBody>
    )
}

const styles = StyleSheet.create({
    MainContent: {
        paddingTop: 24,
        paddingRight: 32,
        paddingLeft: 32,
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