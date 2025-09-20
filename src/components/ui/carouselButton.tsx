import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    backgroundColor: string,
    onPress: () => void
}

export default function CarouselButton({ onPress, backgroundColor }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.Button, { backgroundColor: backgroundColor }]} 
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    Button: {
        width: 16,
        height: 16,
        display: "flex",
        borderRadius: "100%",
    }
})