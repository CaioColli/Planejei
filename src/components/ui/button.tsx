import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

interface Props {
    title: string;
    backgroud: string;
    color?: string;
}

export default function Button({ title, backgroud, color = colors.white }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={10}
            style={[styles.Button, { backgroundColor: backgroud }]}
        >
            <Text style={{ color: color, fontWeight: "bold", fontSize: 16 }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        borderRadius: 24,
        alignContent: "center",
        padding: 16,
        alignItems: "center"
    }
})