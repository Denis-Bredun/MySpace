import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';

const fetchDevelopers = async () => {
    const response = await fetch('https://my-json-server.typicode.com/Denis-Bredun/MySpace/developers');
    if (!response.ok) {
        throw new Error('Failed to fetch developers');
    }
    return response.json();
};

const AboutScreen = ({ navigation }) => {
    const { data: developers, isLoading, error } = useQuery({
        queryKey: ['developers'],
        queryFn: fetchDevelopers,
    });

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About the App</Text>
            <Text style={styles.subtitle}>Version: 1.0.0</Text>
            <Text style={styles.text}>
                This application is designed to provide the best experience for browsing news, shopping, and managing your personal profile. We are constantly updating and improving features based on your feedback!
            </Text>
            <Text style={styles.subtitle}>Developers:</Text>
            {developers.map((developer) => (
                <View key={developer.id} style={styles.itemContainer}>
                    <Text style={styles.item}>{developer.name} - {developer.role}</Text>
                </View>
            ))}
            <CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default AboutScreen;
