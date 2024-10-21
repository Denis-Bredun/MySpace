import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#ffffff',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
        color: '#ffffff',
    },
    itemContainer: {
        padding: 15,
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 2,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        alignItems: 'center', 
    },
    item: {
        color: '#ffffff',
        fontSize: 16,
    },
    customButton: {
        backgroundColor: '#6200EE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10, 
        width: '100%', 
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

    buttonContainer: {
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
});

export default styles;
