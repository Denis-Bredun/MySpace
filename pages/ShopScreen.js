import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import CustomButton from '../components/CustomButton';
import styles from '../styles/styles';

const fetchShopItems = async () => {
    const response = await fetch('https://my-json-server.typicode.com/Denis-Bredun/MySpace/shop');
    if (!response.ok) {
        throw new Error('Failed to fetch shop items');
    }
    return response.json();
};

const ShopScreen = ({ navigation }) => {
    const { data: shopItems, isLoading, error } = useQuery({
        queryKey: ['shop'],
        queryFn: fetchShopItems,
    });

    const memoizedShopItems = useMemo(() => {
        if (!shopItems) return [];
        return shopItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
                <Text style={styles.item}>{item.product} - {item.price}</Text>
                <Text style={styles.item}>{item.description}</Text>
            </View>
        ));
    }, [shopItems]);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
            {memoizedShopItems}
            <Button title="Buy Now" onPress={() => alert('Proceed to checkout')} />
            <CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default ShopScreen;
