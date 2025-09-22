import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/styles/colors";

interface Props {
    title: string;
    content: ReactNode;
}

export default function RadioChooses({ title, content }: Props) {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>
                {title}
            </Text>

            <View style={styles.BanksContent}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "column",
        gap: 8
    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.black
    },
    BanksContent: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center"
    }
});