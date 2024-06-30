import React from 'react'
import { SafeAreaView, Modal, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface IModalProp {
  isSelectionOpen: boolean;
  setIsSelectionOpen: (value: boolean) => void;
}

const CompetionModal = ({isSelectionOpen, setIsSelectionOpen}: IModalProp) => {
    // const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  return (
    <SafeAreaView>
      {isSelectionOpen && (
          <Modal
            animationType="slide"
            visible={isSelectionOpen}
            onRequestClose={()=>setIsSelectionOpen(false)}
            presentationStyle="pageSheet"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalWrapper}>
                <View style={styles.modalIconWrapper}>
                  <Image
                    source={require('@/assets/images/star-icon.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <TouchableOpacity onPress={()=> setIsSelectionOpen(false)}>
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
                <TouchableOpacity style={styles.submitButton} onPress={()=>setIsSelectionOpen(false)}>
                  <Text style={styles.submitButtonText}>Got it</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
      )}
    </SafeAreaView>
  )
}

export default CompetionModal;

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