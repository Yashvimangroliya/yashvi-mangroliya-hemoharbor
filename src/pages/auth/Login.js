import Form from "../../components/Shared/Form/Form";
import {useSelector} from 'react-redux';
import Spinner from "../../components/Shared/Spinner";

const Login = () => {
  const {loading, error} = useSelector((state) => state.auth);
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ?(<Spinner/> ) :(
      
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img
            src="./assets/images/image-1.jpg"
            alt="background for home page"
          />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Login Page"}
            submitBtn={"Login"}
            formType={"login"}
          />
        </div>
      </div>
   
    )}
    </>
  );
}

export default Login;
