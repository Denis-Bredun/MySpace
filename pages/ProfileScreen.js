import React from 'react';
import { View, Text, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';

const fetchProfileData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/Denis-Bredun/MySpace/profile');
    if (!response.ok) {
        throw new Error('Failed to fetch profile data');
    }
    return response.json();
};

const ProfileScreen = ({ navigation }) => {
    const { data: profileData, isLoading, error } = useQuery({
        queryKey: ['profile'],
        queryFn: fetchProfileData,
    });

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Image
                source={{ uri: 'https://avatarfiles.alphacoders.com/375/thumb-1920-375542.png' }}
                style={styles.avatar}
            />
            <Text>Name: Denis Bredun</Text>
            <Text>Email: bredun.denis@gmail.com</Text>
            {profileData.map((activity) => (
                <View key={activity.id} style={styles.itemContainer}>
                    <Text style={styles.item}>{activity.activity}</Text>
                </View>
            ))}
            <CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default ProfileScreen;
