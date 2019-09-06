import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ToasterComponent from './components';
import { IAppState } from "../../../reducers";
import { showToaster,  hideToaster } from './actions';

const mapStateToProps = (state: IAppState) => ({
  type: state.toaster.type,
  message: state.toaster.message,
  visibility: state.toaster.visibility
});

const mapDispatchToProps = {
  showToaster,
  hideToaster
};

//@ts-ignore
const Toaster = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToasterComponent));
export default Toaster;
