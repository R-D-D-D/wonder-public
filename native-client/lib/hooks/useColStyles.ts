import { makeStyles } from '@rneui/themed'
import { FlexAlignType } from 'react-native'

export type ColProps = {
  span: number
  alignItems?: FlexAlignType
}

const useColStyles = makeStyles((theme, props: ColProps) => ({
  col: {
    flex: props.span,
    alignItems: props.alignItems,
  },
}))

export default useColStyles
