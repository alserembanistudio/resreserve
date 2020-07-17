import * as React from 'react';
import { StyleSheet } from 'react-native';
import { firebase } from './firebase';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const TabOneScreen:React.FC = () => {
  const [trigger, setTrigger] = React.useState(false);

  // React.useEffect(() => {
  //   const getValue = firebase.database().ref("trigger");
  //   getValue.on("value", (snapshot: any) => {
  //     let value = snapshot.val();
  //     typeof trigger == "boolean" && setTrigger(value);
  //   });
  // }, [trigger]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One Is there?</Text>
      <Text style={styles.title}>{trigger.toString()}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
