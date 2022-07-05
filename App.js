
import { Button,StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [entredGoalText,setgoal]= useState('');
  const [courseGoals, setCourseGoals]= useState([])

  function goalHandler(entredtext){
    setgoal(entredtext);
    console.log(entredtext);
  }
  function addGoal(){
setCourseGoals(currentCourseGoals=>[...currentCourseGoals,entredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
<View style={styles.inputContainer}>
  <TextInput
     style={styles.textInput}
     placeholder='Your course goal!'
     onChangeText={goalHandler} />
  <Button title='add Goal' onPress={addGoal}/>
</View>
<View style={styles.goalsCont}>
  <Text >Liste of goals</Text>
  {courseGoals.map((goal)=><Text style={styles.goalItem} key={goal}>{goal}</Text>)}
</View>


      
    
     
  
 
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:30,
    paddingHorizontal:15
  },
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
  goalsCont:{
    flex:5,
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'white'
  }
});
