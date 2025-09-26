import { StyleSheet, Text, View } from "react-native";
import Input from "./ui/input";
import { colors } from "@/styles/colors";

interface Props {
    label: string;
    placeholder: string;
    onChange: (value: string | number) => void;

}

export default function InputContainer({ label, placeholder, onChange }: Props) {
    return (
        <View>
            <Text style={styles.Label}>
                {label}
            </Text>

            <Input
                placeholder={placeholder}
                onChange={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Label: {
        fontSize: 20,
        color: colors.black,
        fontWeight: "bold"
    }
});