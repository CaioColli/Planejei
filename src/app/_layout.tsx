import { SQLiteProvider } from 'expo-sqlite';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView } from 'react-native';
import { Slot } from 'expo-router';

import { initializeDatabase } from '@/database/initializeDatabase';

export default function Layout() {
    return (
        <SQLiteProvider databaseName='planejei.db' onInit={initializeDatabase}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.Container}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <Slot />
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </SQLiteProvider>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    }
});