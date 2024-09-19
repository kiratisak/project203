import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Secret Password</Text>
      </View>

      {/* ปุ่ม + ด้านบนขวา */}
      <TouchableOpacity  style={styles.addButton} onPress={() => navigation.navigate('MainProject')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start', // จัดให้ทุกอย่างอยู่ด้านบน
  },
  header: {
    backgroundColor: '#5383C3', // Header background color
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // จัดให้อยู่ตรงกลาง
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White text in the header
  },
  addButton: {
    marginTop: 20, // ระยะห่างจาก header
    alignSelf: 'flex-end', // จัดปุ่มให้อยู่ด้านขวา
    backgroundColor: '#5383C3',
    width: 50,
    height: 50,
    borderRadius: 25, // ทำให้เป็นปุ่มกลม
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20, // ระยะจากขอบขวา
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff', // สีของเครื่องหมาย +
  },
});
