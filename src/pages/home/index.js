import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalPassword from "../../components/modal";

const charset = 'abcdefghijklmnovpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const generatePassword = () => {
    let password = '';

    for(let i = 0, n = charset.length; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * n);
      password += charset[randomIndex];
    }

    setPasswordValue(password);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalIsOpen} animationType="fade" transparent>
        <ModalPassword passwordValue={passwordValue} handleClose={handleCloseModal} />
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 6
  },
  button: {
    backgroundColor: "#392de9",
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold" 
  }
});