
import { Button,StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.appContainer}>
<View>
  <TextInput placeholder='Your course goal!' />
  <Button title='add Goal' />
</View>
<View>
  <Text>Liste of goals...</Text>
</View>


      
    
     
  
 
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50
  }
});
