import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Portal} from 'react-native-portalize';

// Định nghĩa kiểu dữ liệu của Context
interface BottomBarFixedContextType {
  isVisibleBottomBarFixed: boolean;
  showBottomBarFixed: () => void;
  hideBottomBarFixed: () => void;
}

// Tạo Context
const BottomBarFixedContext = createContext<
  BottomBarFixedContextType | undefined
>(undefined);

// Provider Component
export const BottomBarFixedProvider = ({children}: {children: ReactNode}) => {
  const [isVisibleBottomBarFixed, setIsVisibleBottomBarFixed] = useState(true);

  const showBottomBarFixed = useCallback(
    () => setIsVisibleBottomBarFixed(true),
    [],
  );
  const hideBottomBarFixed = useCallback(
    () => setIsVisibleBottomBarFixed(false),
    [],
  );

  return (
    <BottomBarFixedContext.Provider
      value={{isVisibleBottomBarFixed, showBottomBarFixed, hideBottomBarFixed}}>
      {children}
      <Portal>
        {isVisibleBottomBarFixed && (
          <Animated.View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.text}>This is Bottom Layout</Text>
              <TouchableOpacity
                onPress={hideBottomBarFixed}
                style={styles.button}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </Portal>
    </BottomBarFixedContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useBottomBarFixed = () => {
  const context = useContext(BottomBarFixedContext);
  if (!context) {
    throw new Error(
      'useBottomBarFixed must be used within a BottomBarFixedProvider',
    );
  }
  return context;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
