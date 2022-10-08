import { View, StyleSheet } from 'react-native'
import useColStyles, { ColProps } from '../lib/hooks/useColStyles'

export type ViewProps = ColProps & View['props']

const Col: React.FC<ViewProps> = (props: ViewProps) => {
  const { style, children, ...otherProps } = props
  const styles = useColStyles(props)

  return (
    <View style={[styles.col, style]} {...otherProps}>
      {children}
    </View>
  )
}

export default Col
