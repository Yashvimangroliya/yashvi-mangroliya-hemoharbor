
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password){
        return alert("please provide All field")
    }
    console.log("login =>", email, password, role);
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
    if (!role || !email || !password || !name || !organisationName || !hospitalName || !website || ! address || !phone){
        return alert("please provide All field")
    }
    console.log("handleRegister called");
    console.log(
      "Register =>",
      name,
      email,
      password,
      role,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};
