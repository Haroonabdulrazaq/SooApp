import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomBackButton({ navigation }: any) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('@/assets/images/arrow-left-circle.png')}
        style={styles.backImage}
      />
    </TouchableOpacity>
  );
}

export default CustomBackButton;

const styles= StyleSheet.create({
    backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  backImage: {
    width: 45,
    height: 45,
    marginRight: 15,
  }
})