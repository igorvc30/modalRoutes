import {Animated, Easing} from 'react-native'

let MyTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const outputRange = [.8, 1, 1];
  const opacity = position.interpolate({
      inputRange,
      outputRange,
  });

  const scaleY = position.interpolate({
      inputRange,
      outputRange,
  });

  return {
  opacity,
      transform: [
          {scaleY}
      ]
  }
};

const MyCustomTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1];

  const opacity = position.interpolate({
      inputRange,
      outputRange: ([0, 1, 1, 0]),
  });

  const translateX = 0;
  const translateY = position.interpolate({
      inputRange,
      outputRange: ([50, 0, 0, 0]),
  });

  return {
      opacity,
      transform: [
          { translateX },
          { translateY }
      ],
  };
};

export default TransitionConfiguration = () => {

  const MyTransitionSpec = ({
    duration: 2000,
    easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    timing: Animated.timing,
  });

  return {
      transitionSpec: MyTransitionSpec,
      screenInterpolator: (sceneProps) => {

        const {position, scene} = sceneProps;
        const {index, route} = scene;
        const params = route.params || {};
        const transition = params.transition || 'default';  

        return {
                myCustomTransition: MyCustomTransition(index, position),
                default: MyTransition(index, position),
        }[transition];
    }
  }
};