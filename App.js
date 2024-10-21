import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import ShopScreen from './pages/ShopScreen';
import SettingsScreen from './pages/SettingsScreen';
import AboutScreen from './pages/AboutScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Shop" component={ShopScreen} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen name="About" component={AboutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default App;
