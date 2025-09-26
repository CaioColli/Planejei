import { colors } from "@/styles/colors";
import { StyleSheet, TextInput } from "react-native";

interface Props {
    placeholder: string;
    onChange: (value: string | number) => void;
}
export default function Input({ placeholder, onChange }: Props) {
    return (
        <TextInput 
            style={styles.Input}
            placeholder={placeholder}
            placeholderTextColor={colors.darkGray}
            onChangeText={onChange}
        />
    )
}

const styles = StyleSheet.create({
    Input: {
        borderColor: colors.darkGray,
        borderBottomWidth: 2,
        color: colors.darkGray,
        fontSize: 16
    }
})