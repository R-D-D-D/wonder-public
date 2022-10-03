import { makeStyles } from '@rneui/themed';

type Params = {
  span: number;
};

const useColStyles = makeStyles((theme, props: Params) => ({
  col: {
    flex: props.span
  },
}));

export default useColStyles