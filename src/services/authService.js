import { userLogin, userRegister } from "../redux/Features/Auth/authAction";
import store from "../redux/Store";
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("please provide All field");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  email,
  password,
  role,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        email,
        password,
        role,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
