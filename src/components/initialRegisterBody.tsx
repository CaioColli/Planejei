import { Image, StyleSheet, View } from "react-native"

import { colors } from "@/styles/colors";

interface Props {
    children: React.ReactNode
}

export default function InitialRegisterBody({ children }: Props) {
    return (
        <View style={styles.Screen}>
            <View style={styles.Header}>
                <Image source={require('../../assets/images/panda-coin.png')} />
            </View>

            {children}
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
    }
});