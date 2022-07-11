
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalVisible] = useState(false)

  function startAddGoal() {
    setModalVisible(true);
  }

  function endAddGoal() {
    setModalVisible(false);
  }


  function addGoal(entredGoalText) {

    if (entredGoalText.length === 0) {
      return;
      
    }
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: entredGoalText, id: Math.random().toString() },
    ]);

    endAddGoal();
  }

  function deleteGoal(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })

    console.log('DELETED');
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>

        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoal} />
        <GoalInput
          onAddGoal={addGoal}
          visible={modalIsVisible}
          onCancel={endAddGoal} />
        <Text style={styles.label}>
          Liste Goals
        </Text>
        <View style={styles.goalsCont}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (<GoalItem text={itemData.item.text}
                id={itemData.item.id}
                ondelete={deleteGoal}
              />
              );
            }}

            keyExtractor={(item, index) => {
              return item.id;
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#1e085a'
  },
  label: {
    color: 'white',
    marginVertical: 25
  },

  goalsCont: {
    flex: 5,

  },
});
