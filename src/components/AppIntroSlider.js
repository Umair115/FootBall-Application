// AppIntroSlider.js
import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const AppIntroSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotPress = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      swiperRef.current.scrollBy(index - activeIndex);
    }
  };

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {images.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.dot, activeIndex === index && styles.activeDot]}
          onPress={() => handleDotPress(index)}
        />
      ))}
    </View>
  );

  const swiperRef = React.createRef();

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        index={activeIndex}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Inactive dot color
    width: 10, // Adjust the width as needed
    height: 10, // Adjust the height as needed
    borderRadius: 5, // Make it a circle
    marginHorizontal: 5, // Adjust the spacing between dots
  },
  activeDot: {
    backgroundColor: 'pink', // Active dot color
    width: 20, // Adjust the width as needed
    height: 10, // Adjust the height as needed
    borderRadius: 5, // Make it a circle
    marginHorizontal: 5, // Adjust the spacing between dots
  },
});

export default AppIntroSlider;