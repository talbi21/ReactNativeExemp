import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'
import { useState } from 'react';



function GoalInput(props) {
  const [entredGoalText, setgoal] = useState('');

  function goalHandler(entredtext) {
    setgoal(entredtext);
    console.log(entredtext);
  }

  function addGoal() {
    props.onAddGoal(entredGoalText);
    setgoal('');
  }


  return (
    <Modal visible={props.visible} animationType="slide">


      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />

        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          placeholderTextColor={'grey'}
          onChangeText={goalHandler}
          value={entredGoalText}

        />
        <View style={styles.ButtonCon}>
          <View style={styles.Button}>
            <Button title='add Goal' color='#5e0acc' onPress={addGoal} />
          </View>
          <View style={styles.Button}>
            <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
          </View>



        </View>

      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    marginRight: 10,
    padding: 8,
    color: '#120438',
    backgroundColor: '#e4d0ff',
    borderRadius: 50
  },
  ButtonCon: {
    flexDirection: 'row',

  },
  Button: {
    width: '40%',
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
    aspectRatio: 5 / 4
  }
})