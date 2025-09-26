import { Fragment, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

import Button from "@/components/ui/button";
import RadioButton from "@/components/ui/radioButton";

import InitialRegisterBody from "@/components/initialRegisterBody";
import RadioChooses from "@/components/radioChooses";
import { banks } from "@/constants/banks";
import InputContainer from "@/components/inputContainer";

export default function FirstBankRegister() {
    const [bank, setBank] = useState<string>('');
    const [bankLimit, setBankLimit] = useState<number>();
    const [invoiceClosing, setInvoiceClosing] = useState<number>();
    const [payday, setPayday] = useState<number>();


    return (
        <InitialRegisterBody>
            <View style={styles.MainContent}>
                <View style={styles.Texts}>
                    <Text style={styles.Title}>
                        Que bom que deseja usar o Planejei!!
                    </Text>

                    <Text style={styles.Description}>
                        Precisamos apenas que insira os dados de seu banco para que possamos iniciar nossa jornada juntos.
                    </Text>
                </View>

                <View style={styles.FormContent}>
                    <Text style={styles.Title}>
                        Adicionar uma nova conta
                    </Text>

                    <RadioChooses
                        title="Escolha seu banco"
                        content={
                            banks.map((item) => (
                                <Fragment key={item.id}>
                                    <RadioButton
                                        image={item.image}
                                        onPress={() => setBank(item.name)}
                                        opacity={bank === "" ? 1 : bank === item.name ? 1 : 0.2}
                                    />
                                </Fragment>
                            ))
                        }
                    />

                    <InputContainer
                        label="Digite o valor do seu limite"
                        onChange={(value) => setBankLimit(Number(value))}
                        placeholder="Ex: 1000,00"
                    />

                    <InputContainer
                        label="Digite o fechamento da fatura"
                        onChange={(value) => setInvoiceClosing(Number(value))}
                        placeholder="Ex: 10"
                    />

                    <InputContainer
                        label="Digite o dia de pagamento"
                        onChange={(value) => setPayday(Number(value))}
                        placeholder="Ex: 15"
                    />

                </View>

                <Button
                    title="Confirmar"
                    backgroud={colors.orange}
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
        gap: 24,
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
    },
    FormContent: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
    },

});