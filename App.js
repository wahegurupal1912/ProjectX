import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  const images = [
    require('./assets/ads/image1.jpg'),
    require('./assets/ads/image2.jpg'),
    require('./assets/ads/image3.jpg')
  ];

  let [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      setCurrentImage(images[i]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <StatusBar hidden={true} />
        <Image source = {currentImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
