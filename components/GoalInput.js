import {StyleSheet,TextInput,Button,View} from'react-native'
import { useState } from 'react';



function GoalInput(props){
    const [entredGoalText,setgoal]= useState('');

    function goalHandler(entredtext){
        setgoal(entredtext);
        console.log(entredtext);
      }

      function addGoal(){
        props.onAddGoal(entredGoalText);
        setgoal('');
          }


    return(  <View style={styles.inputContainer}>
    <TextInput
    
       style={styles.textInput}
       placeholder='Your course goal!'
       onChangeText={goalHandler}
       value = {entredGoalText}
       />
    <Button title='add Goal' color='#5e0acc' onPress={addGoal}/>
  </View>

    )
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom :25,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        marginVertical:30,
        justifyContent:'space-between'
      },
      textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'70%',
        marginRight:10,
        padding:8  
      },
})