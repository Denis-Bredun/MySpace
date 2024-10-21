import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';

const fetchNews = async () => {
    const response = await fetch('https://my-json-server.typicode.com/Denis-Bredun/MySpace/news');
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    return response.json();
};

const HomeScreen = ({ navigation }) => {
    const { data: news, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: fetchNews,
    });

    const goToProfile = useCallback(() => {
        navigation.navigate('Profile');
    }, [navigation]);

    const goToShop = useCallback(() => {
        navigation.navigate('Shop');
    }, [navigation]);

    const goToSettings = useCallback(() => {
        navigation.navigate('Settings');
    }, [navigation]);

    const goToAbout = useCallback(() => {
        navigation.navigate('About');
    }, [navigation]);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to "MySpace"!</Text>
            <Text style={styles.subtitle}>Your personalized app for news, shopping, and more.</Text>
            {news.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <CustomButton title="Profile" onPress={goToProfile} />
                <CustomButton title="Shop" onPress={goToShop} />
                <CustomButton title="Settings" onPress={goToSettings} />
                <CustomButton title="About App" onPress={goToAbout} />
            </View>
        </View>
    );
};

export default HomeScreen;
