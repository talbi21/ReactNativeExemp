import { StyleSheet, Text, Pressable } from 'react-native'

function goalItem(props) {
  return <Pressable android_ripple={{ color: '#a065ec' }} onPress={props.ondelete.bind(this, props.id)}>

    <Text style={styles.goalItem}>{props.text}</Text>
  </Pressable>

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