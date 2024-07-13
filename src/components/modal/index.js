import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";

export default function ModalPassword({ passwordValue, handleClose }) {
    const { saveItem } = useStorage();

    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(passwordValue);      
        await saveItem("@pass", passwordValue);

        alert("Senha salva com sucesso!");
        handleClose();
    }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Senha gerada</Text>
            
            <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                <Text style={styles.password}>{passwordValue}</Text>
            </Pressable>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                    <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: '#030303',
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    password: {
        color: '#FFF',
        textAlign: 'center'
    },
    buttonArea: {
        width: '90%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: 'bold'
    }
})
