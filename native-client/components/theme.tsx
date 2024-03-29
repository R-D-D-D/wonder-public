import { ThemeProvider, Button, createTheme } from '@rneui/themed'

const theme = createTheme({
  components: {
    Button: {
      raised: true,
      size: 'md',
      color: 'secondary',
    },
  },
})

export default theme
