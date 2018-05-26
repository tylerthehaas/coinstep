/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "enzyme";
// $FlowFixMe
import Adapter from "enzyme-adapter-react-16";

// setup enzyme
configure({ adapter: new Adapter() });
