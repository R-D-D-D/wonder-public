import { View, StyleSheet } from 'react-native';

type RowProps = {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
};

export type ViewProps = RowProps & View['props'];

const Row: React.FC<ViewProps> = (props: ViewProps) => {
  const { style, children, justifyContent, ...otherProps } = props;

  return (
    <View style={[styles.container, style, { justifyContent }]} {...otherProps}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export default Row
