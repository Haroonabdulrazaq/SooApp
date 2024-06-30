import React from 'react'
import { SafeAreaView, Modal, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface IModalProp {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const CustomModal = ({modalVisible, setModalVisible}: IModalProp) => {

  return (
    <SafeAreaView>
      {modalVisible && (
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={()=>setModalVisible(false)}
            presentationStyle="pageSheet"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalWrapper}>
                <View style={styles.modalIconWrapper}>
                  <Image
                    source={require('@/assets/images/star-icon.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <TouchableOpacity onPress={()=> setModalVisible(false)}>
                    <Image 
                      source={require('@/assets/images/close-icon.png')}
                      style={{ width: 50, height: 50}}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{fontSize: 20, marginBottom: 10}}>Welcome to Soo</Text>
                  <Text style={{fontSize: 16, marginBottom: 10}}>Great to have you with us!</Text>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={()=>setModalVisible(false)}>
                  <Text style={styles.submitButtonText}>Got it</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
      )}
    </SafeAreaView>
  )
}

export default CustomModal;

const styles= StyleSheet.create({
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalWrapper: {
    justifyContent: 'space-around',
    width: '80%',
    height: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20
  },
  modalIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#253BFF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})