import ReactLoadable from "react-loadable";

import Loading from "./Loading";

const Loadable = (importLocation: string) =>
  ReactLoadable({
    // $FlowFixMe
    loader: () => import(`../${importLocation}`),
    loading: Loading,
  });

export default Loadable;
