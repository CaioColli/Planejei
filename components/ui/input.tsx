import { colors } from "@/styles/colors";
import { StyleSheet, TextInput } from "react-native";

interface Props {
    placeholder: string;
    onChange: (text: string) => void;
    value: string
}
export default function Input({ placeholder, onChange, value }: Props) {
    return (
        <TextInput 
            style={styles.Input}
            placeholder={placeholder}
            placeholderTextColor={colors.darkGray}
            onChangeText={onChange}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    Input: {
        borderColor: colors.darkGray,
        borderBottomWidth: 2,
        color: colors.darkGray
    }
})