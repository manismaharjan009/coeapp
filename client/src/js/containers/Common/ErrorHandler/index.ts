import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ErrorModalComponent from './components';
import { IAppState } from "../../../reducers";
import { resetError } from './actions';


const mapStateToProps = (state: IAppState) => ({
  error: state.err.error,
  errorData: state.err.errorData
});

const mapDispatchToProps = {
  resetError
};

//@ts-ignore
const ErrorModal = withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorModalComponent));
export default ErrorModal;
