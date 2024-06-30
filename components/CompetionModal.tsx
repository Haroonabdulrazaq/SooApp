import React, {useState} from 'react'
import {
  SafeAreaView,
  Modal,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
  import Icon from 'react-native-vector-icons/MaterialIcons'



interface IModalProp {
  isSelectionOpen: boolean;
  setIsSelectionOpen: (value: boolean) => void;
}

const CompetionModal = ({isSelectionOpen, setIsSelectionOpen}: IModalProp) => {
  const [searchInput, setSearchInput] = useState("");

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
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => setIsSelectionOpen(false)}>
                    <Image
                      source={require('@/assets/images/arrow-left-circle.png')}
                      style={styles.backImage}
                    />
                  </TouchableOpacity>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search for a competition"
                      keyboardType="web-search"
                      onChangeText={setSearchInput}
                      value={searchInput}
                    />
                    <Icon name="search" size={24} color="black" style={{ position: "absolute", top: 11, right: 10 }} />
                  </View>
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
  },
  modalWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },
  modalIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  input: {
    padding: 10,
    borderRadius: 15,
    width: 250,
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  backImage: {
    width: 45,
    height: 45,
    marginRight: 15,
  },
})