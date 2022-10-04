import { View, StyleSheet } from 'react-native';
import useColStyles, { ColProps } from '../lib/hooks/useColStyles';

type RowProps = {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
};

export type ViewProps = RowProps & View['props'];

export const Row: React.FC<ViewProps> = (props: ViewProps) => {
  const { style, children, justifyContent, ...otherProps } = props;

  return (
    <View style={[rowStyles.container, style, { justifyContent }]} {...otherProps}>
      {children}
    </View>
  );
}

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export const Col: React.FC<ColProps & View['props']> = (props: ColProps & View['props']) => {
  const { style, children, ...otherProps } = props;
  const styles = useColStyles(props);

  return (
    <View style={[styles.col, style]} {...otherProps}>
      {children}
    </View>
  );
}