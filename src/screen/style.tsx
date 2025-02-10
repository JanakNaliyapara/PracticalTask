import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/color';
import {normalize} from '../utils';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: normalize(20),
  },
    videoContainer: {
      width: "90%",
      aspectRatio: 16 / 9,  
      borderRadius: normalize(20),
      overflow: 'hidden',   
      alignSelf: 'center',
      backgroundColor: colors.BLACK, 
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(8),
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: normalize(30),
    padding: normalize(10),
  },
  playIcon: {
    color: '#fff',
    fontSize: normalize(20),
  },
  coordinatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.5,
    marginTop : normalize(30)
  },
  coordinateText: {
    fontSize: normalize(16),
    color: '#333',
  },
  controlPad: {
    width: width * 0.7,
    aspectRatio: 1.2,
    backgroundColor: '#b0e0e6',
    borderRadius: normalize(20),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionButton: {
    position: 'absolute',
  },
  buttonImage:{width:normalize(40),height:normalize(40)},
  conterImages:{width:normalize(27),height:normalize(27),tintColor:colors.THEME},
  emoji: {
    fontSize: 20,
  },
  upButton: {
    top: normalize(-25),
  },
  downButton: {
    bottom: normalize(-25),
  },
  leftButton: {
    left: normalize(-25),
  },
  rightButton: {
    right: normalize(-25),
  },
  centerButton: {
    width: normalize(40),
    height: normalize(40),
    backgroundColor: colors.THEME,
    borderRadius: normalize(20),
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    marginTop : normalize(50)
  },
  controlButton: {
    borderRadius: normalize(50),
    height:normalize(50),
    width: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderWidth:1,
    borderColor: colors.THEME,
  },
  controlIcon: {
    color: colors.THEME,
    fontSize: normalize(20),
  },
  fullImage: {
   width: '100%',
  height: '100%',
  borderWidth: 1,
  borderColor: '#b0e0e6'
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default styles;
