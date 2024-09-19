import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
//import { firestore} from '../firebaseConfig';
//import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => App);

export default function MainProjectScreen({ navigation }) {
  const [application, setApplication] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [note, setNote] = useState('');

  // ฟังก์ชันสำหรับบันทึกข้อมูลลง Firestore
  const saveData = async () => {
    if (!application || !username || !password) {
      alert('Please enter application, username, and password');
      return;
    }

    try {
      await db.collection('userPasswords').add({
        application: application,
        username: username,
        password: password,
        note: note ? note : '', // ถ้าไม่มี note ให้เก็บเป็นค่าว่าง
        createdAt: firebase.firestore.FieldValue.serverTimestamp(), // เก็บ timestamp
      });
      // นำทางไปยัง Home2
      navigation.navigate('Home2');

      alert('Data saved successfully');
      // รีเซ็ตข้อมูลหลังจากบันทึกเสร็จ
      setApplication('');
      setUsername('');
      setPassword('');
      setNote('');
    } catch (error) {
      console.error('Error saving data: ', error);
      alert('Error saving data');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Application</Text>
      <TextInput
        style={styles.input}
        value={application}
        onChangeText={setApplication}
        placeholder="Enter application name"
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry // เพื่อซ่อนรหัสผ่าน
      />

      <Text style={styles.label}>Note (Optional)</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Enter any note"
      />

      <Button title="Save" onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});