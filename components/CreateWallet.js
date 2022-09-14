import React,{useState} from 'react';
import{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
}from 'react-native';



const CreateWallet = () => {

   /* const [secret, setSecret] = useState('');
    const [publicKey, setPublicKey] = useState('');

    const resetAccount = () => {
        setSecret('');
        setPublicKey('')
    }
    const createAccount = () => {
        const secret = pair.secret();
        const publicKey = pair.publicKey();

        setSecret(secret);
        setPublicKey(publicKey);

        Alert.alert(secret);
        Alert.alert(publicKey);
    }*/

    return(
        <View  style={styles.container}>
             
            <View style={styles.buttonContainer}> 
                <TouchableOpacity   
                    style={styles.button}
                    
                >
                <Text style={styles.buttonText}>Crear Wallet</Text>
                
                </TouchableOpacity>
                <Text style={{marginTop:20, marginBottom:10}}>Si ya tienes una cuenta importala</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    placeholder="Ingresa tu llave privada"
                    style={styles.input}
                    />
                </View>
                <TouchableOpacity   
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Importar Cuenta</Text>
                
                </TouchableOpacity>
            </View>
        </View>
       
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
     button: {
        backgroundColor: '#5D2DFD',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '100%',
        marginBottom: 20,
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      }
})

export default CreateWallet;