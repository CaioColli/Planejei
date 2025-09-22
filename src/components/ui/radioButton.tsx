import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    image: ImageSourcePropType;
    onPress: () => void;
    opacity: number
}

export default function RadioButton({ onPress, image, opacity }: Props) {
    return (
        <TouchableOpacity
            style={styles.Button}
            onPress={onPress}
        >
            <Image
                source={image}
                style={[styles.Image, { opacity: opacity }]}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: 48,
        height: 48,
    },
    Image: {
        width: "100%",
        height: "100%"
    }
});