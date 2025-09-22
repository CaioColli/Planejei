import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import Button from "@/components/ui/button";
import { Fragment, useEffect, useState } from "react";
import CarouselButton from "@/components/ui/carouselButton";
import { Link } from "expo-router";

export default function Index() {
    const carouselItems = [
        {
            id: 1,
            image: require('../../assets/images/evaluation-card.png'),
            title: "Planeje sua vida facilmente, de forma interativa",
            description: "De 7 a cada 10 brasileiros não conseguem guardar dinheiro todo mês.",
            secondDescription: "Com Planejei esse problema some."
        },
        {
            id: 2,
            image: require('../../assets/images/graph.png'),
            title: "Você nunca mais vai perder o controle de suas finanças.",
            description: "Organize suas finanças em um só lugar, controle despesas, receitas e alcance suas metas.",
            secondDescription: "Com Planejei você faz acontecer."
        },
        {
            id: 3,
            image: require('../../assets/images/cash.png'),
            title: "Crie metas e transforme seus sonhos em realidade com a Planejei.",
            description: "Defina seus objetivos, acompanhe seu progresso e alcance suas metas financeiras com facilidade.",
            secondDescription: "Com Planejei você alcança."

        }
    ];

    // const [item, setItem] = useState(carouselItems[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function handleCarouselButtonPress(index: number) {
        setCurrentIndex(index);
    }

    return (
        <View style={styles.Screen}>
            <View style={styles.MainContent}>
                {carouselItems[currentIndex] && (
                    <Fragment key={carouselItems[currentIndex].id}>
                        <Image source={carouselItems[currentIndex].image} />

                        <Text style={styles.Title}>
                            {carouselItems[currentIndex].title}
                        </Text>

                        <View style={styles.DescriptionsContainer}>
                            <Text style={styles.Description}>
                                {carouselItems[currentIndex].description}
                            </Text>
                            <Text style={styles.Description}>
                                {carouselItems[currentIndex].secondDescription}
                            </Text>
                        </View>
                    </Fragment>
                )}

            </View>

            <View style={styles.FinalContent}>
                <View style={styles.CarouselButtonsContainer}>
                    {carouselItems.map((carouselItems, index) => (
                        <CarouselButton
                            key={carouselItems.id}
                            backgroundColor={index === currentIndex ? colors.green : colors.gray}
                            onPress={() => handleCarouselButtonPress(index)}
                        />
                    ))}
                </View>

                <Link href="/register" asChild>
                    <Button
                        title="Comece a usar agora"
                        backgroud={colors.orange}
                    />
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 32,
    },
    MainContent: {
        flex: 1,
        alignItems: "center",
        gap: 24
    },
    Title: {
        fontSize: 32,
        color: colors.black,
        fontWeight: "bold",
    },
    DescriptionsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    Description: {
        fontSize: 16,
        color: colors.darkGray,
        textAlign: "center"
    },
    SpecialDescription: {
        color: colors.green
    },
    FinalContent: {
        display: "flex",
        flexDirection: "column",
        gap: 24
    },
    CarouselButtonsContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        gap: 8
    }
});