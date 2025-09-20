import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Página inicial"
                }}
            />
            
            <Tabs.Screen 
                name="report"
                options={{
                    title: "Relatório"
                }}
            />
        </Tabs>
    )
}