import { StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'

function goalItem(props) {
  return <TouchableOpacity activeOpacity={0.5} onPress={props.ondelete.bind(this, props.id)}>

    <Text style={styles.goalItem}>{props.text}</Text>
  </TouchableOpacity>

};

export default goalItem;

const styles = StyleSheet.create({


  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});