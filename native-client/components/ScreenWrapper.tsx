import { View, StyleSheet } from 'react-native';

type Props = {} & View['props']

const ScreenWrapper: React.FC<Props> = (props: Props) => {
  const { children, ...otherProps } = props;

  return (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    margin: 0
  }
});

export default ScreenWrapper