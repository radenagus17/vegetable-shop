import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) throw Error(res.status);
        return res.json();
      })
      .then(() => {
        // localStorage.setItem("access_token", data.access_token);
        // props.setLogin(true);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container" style={{ marginTop: "15em" }}>
      <div class="card text-center mx-auto" style={{ width: "45rem" }}>
        <div class="card-header text-white bg-success">Welcome</div>
        <div class="card-body">
          <form onSubmit={(e) => handleClickLogin(e)}>
            <input type="text" name="username" onChange={(e) => handleOnChange(e)} value={user.username} class="form-control mx-auto" style={{ width: 500 }} placeholder="Your Username" required />
            <input type="email" name="email" onChange={(e) => handleOnChange(e)} value={user.email} class="form-control mx-auto mt-3" style={{ width: 500 }} placeholder="Your email" required />
            <input type="password" name="password" onChange={(e) => handleOnChange(e)} value={user.password} class="form-control mx-auto mt-3" style={{ width: 500 }} placeholder="Your password" required />
            <div class="d-grid gap-2 col-8 mx-auto mt-3">
              <button type="submit" class="btn btn-success">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
