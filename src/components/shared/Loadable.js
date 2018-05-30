import ReactLoadable from "react-loadable";

import Loading from "../presentational/Loading";

const Loadable = (importLocation: string) =>
  // $FlowFixMe
  ReactLoadable({
    // $FlowFixMe
    loader: () => import(`../${importLocation}`),
    loading: Loading,
  });

export default Loadable;
