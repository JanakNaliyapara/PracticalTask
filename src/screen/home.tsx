import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  PanResponder,
  Animated,
  Image,
  ScrollView,
  GestureResponderEvent,
  PanResponderGestureState,
} from 'react-native';
import Video, {OnErrorEvent} from 'react-native-video';
import styles from './style';
import { normalize } from '../utils';

// Define the coordinate type
type Coordinates = {
  x: number;
  y: number;
};

const Home: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const [paused, setPaused] = useState<boolean>(true);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<Coordinates>({x: 0, y: 0});

  const pan = useRef(new Animated.ValueXY()).current;

  const handlePlay = (): void => {
    setPaused(false);
    setShowPlayButton(false);
  };

  const handlePause = (): void => setPaused(true);

  const handleStop = (): void => {
    setPaused(true);
    setShowPlayButton(true);
    videoRef.current?.seek(0); 
    setCoordinates({x: 0, y: 0});
    pan.setValue({x: 0, y: 0});
  };

  const moveButton = (direction: 'up' | 'down' | 'left' | 'right'): void => {
    let {x, y} = pan.__getValue() as {x: number; y: number};

    switch (direction) {
      case 'up':
        y = Math.max(y - 10, -100);
        break;
      case 'down':
        y = Math.min(y + 10, 100);
        break;
      case 'left':
        x = Math.max(x - 10, -100);
        break;
      case 'right':
        x = Math.min(x + 10, 100);
        break;
    }

    pan.setValue({x, y});
    setCoordinates({
      x: Math.round((x / 100) * 100),
      y: Math.round((-y / 100) * 100),
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => {
        const newX = Math.min(Math.max(gestureState.dx, -100), 100);
        const newY = Math.min(Math.max(gestureState.dy, -100), 100);
        pan.setValue({x: newX, y: newY});
        setCoordinates({
          x: Math.round((newX / 100) * 100),
          y: Math.round((-newY / 100) * 100),
        });
      },
      onPanResponderRelease: () => pan.flattenOffset(),
    }),
  ).current;

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* Video Player */}
          <View style={{height : normalize(300)}}>
          <View style={styles.videoContainer}>
            <Video
              ref={videoRef}
              source={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
              }}
              style={[styles.fullImage, {borderRadius: 20}]}
              controls={false}
              resizeMode="contain"
              paused={paused}
              onError={(error: OnErrorEvent) =>
                console.error('Video error:', error)
              }
            />
            {showPlayButton && (
              <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
                <Text style={styles.playIcon}>▶</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Coordinates Display */}
          
          <View style={styles.coordinatesContainer}>
            <Text style={styles.coordinateText}>X: {coordinates.x}</Text>
            <Text style={styles.coordinateText}>Y: {coordinates.y}</Text>
          </View>
          </View>
          {/* Control Pad */}
          <View style={styles.controlPad} {...panResponder.panHandlers}>
            <TouchableOpacity
              style={[styles.directionButton, styles.upButton]}
              onPress={() => moveButton('up')}>
              <Image
                source={require('../assets/happy.png')}
                resizeMode="contain"
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.directionButton, styles.leftButton]}
              onPress={() => moveButton('left')}>
              <Image
                source={require('../assets/dislike.png')}
                resizeMode="contain"
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <Animated.View
              style={[
                styles.centerButton,
                {transform: [{translateX: pan.x}, {translateY: pan.y}]},
              ]}
            />
            <TouchableOpacity
              style={[styles.directionButton, styles.rightButton]}
              onPress={() => moveButton('right')}>
              <Image
                source={require('../assets/like.png')}
                resizeMode="contain"
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.directionButton, styles.downButton]}
              onPress={() => moveButton('down')}>
              <Image
                source={require('../assets/unhappy.png')}
                resizeMode="contain"
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>

          {/* Bottom Controls */}
          <View style={styles.bottomControls}>
            <TouchableOpacity style={styles.controlButton} onPress={handlePlay}>
              <Image
                source={require('../assets/play.png')}
                resizeMode="contain"
                style={styles.conterImages}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={handlePause}>
              <Image
                source={require('../assets/pause.png')}
                resizeMode="contain"
                style={styles.conterImages}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={handleStop}>
              <Image
                source={require('../assets/stop.png')}
                resizeMode="contain"
                style={styles.conterImages}
              />
            </TouchableOpacity>
          </View>
      </ScrollView>

        </View>
    </SafeAreaView>
  );
};

export default Home;
