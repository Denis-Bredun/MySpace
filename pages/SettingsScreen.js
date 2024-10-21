import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';

const fetchSettings = async () => {
    const response = await fetch('https://my-json-server.typicode.com/Denis-Bredun/MySpace/settings');
    if (!response.ok) {
        throw new Error('Failed to fetch settings');
    }
    return response.json();
};

const SettingsScreen = ({ navigation }) => {
    const { data: settings, isLoading, error } = useQuery({
        queryKey: ['settings'],
        queryFn: fetchSettings,
    });

    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text>Current Theme: {theme}</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
            {settings.map((setting) => (
                <View key={setting.id} style={styles.itemContainer}>
                    <Text style={styles.item}>{setting.setting}</Text>
                    <Text style={styles.item}>{setting.options}</Text>
                </View>
            ))}
            <Button title="Save Settings" onPress={() => alert('Settings Saved!')} />
            <CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default SettingsScreen;
