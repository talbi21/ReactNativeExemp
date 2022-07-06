
import {StyleSheet, View,FlatList} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals]= useState([])

 
  function addGoal(entredGoalText){
setCourseGoals(currentCourseGoals=>[
  ...currentCourseGoals,
  {text:entredGoalText, id: Math.random().toString()},
]);
  }

  function deleteGoal(id){
setCourseGoals(currentCourseGoals=>{
  return currentCourseGoals.filter((goal)=>goal.id !==id);
})

    console.log('DELETED');
  }
  return (
    <View style={styles.appContainer}>
<GoalInput onAddGoal={addGoal} />
<View style={styles.goalsCont}>
<FlatList 
data={courseGoals} 
renderItem={itemData =>{
return  (<GoalItem text ={itemData.item.text} 
  id={itemData.item.id}
ondelete={deleteGoal}
/>
);
}}

keyExtractor={(item,index)=>{
  return item.id;
}}/>
 
  
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

  goalsCont:{
    flex:5,
  },
});
