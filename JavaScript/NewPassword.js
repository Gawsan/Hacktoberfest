import classes from "./NewPassword.module.css";
import std from "../../Assets/std.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup";

const NewPassword = (props) => {
  const [password, setPassword] = useState();
  const [pass, setPass] = useState();
  const [valid, setValid] = useState();
  const [redirect, setRedirect] = useState(false);

  const userID = props.match.params.userID;
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/user/check_pass_reset_validity?userID=" + userID
      )
      .then((res) => {
        if (res.data.ack === false) {
          history.replace("/index");
        }
      })
      .catch((er) => {});
  }, []);

  const passwordHandler = (event) => {
    setValid(null);
    setPassword(event.target.value);
  };
  const passHandler = (event) => {
    setValid(null);
    setPass(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (password && pass) {
      if (password.trim().length < 6) {
        setValid("Password should contains 6 characters !");
        return;
      } else if (password.trim() !== pass.trim()) {
        setValid("Passwords did not match !");
        return;
      }
    } else {
      setValid("Please Fill boath fiels");
      return;
    }

    const data = {
      _id: userID,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/reset_password", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.ack === false) {
          setValid("Unable to update password !");
        } else {
          setRedirect(true);
          setTimeout(() => {
            history.replace("/index");
          }, 3000);
        }
      })
      .catch((er) => {
        setValid("Unable to update password !");
      });
  };

  return (
    <div className={classes.login_container}>
      {redirect && (
        <ErrorPopup error={"New password is set, Login with new credentials"} />
      )}
      <div className={classes.login}>
        <h2 className={classes.title}>Reset Password</h2>
        <form onSubmit={submitHandler} className={classes.form_container}>
          <label className={classes.labels} htmlFor={"pass"}>
            New Password
          </label>
          <br />
          <input
            value={password}
            type="password"
            onChange={passwordHandler}
            required
            id="pass"
            className={classes.inputs}
          />
          <br />
          <label className={classes.labels} htmlFor={"password"}>
            Re-Type Password
          </label>
          <br />
          <input
            value={pass}
            onChange={passHandler}
            type="password"
            required
            id="password"
            className={classes.inputs}
          />
          <br />

          <button className={classes.btn}>RESET</button>
          {valid && <div className={classes.errorShow}>{valid}</div>}
        </form>
      </div>
      <div className={classes.img_container}>
        <img className={classes.img} src={std} />
      </div>
    </div>
  );
};

export default NewPassword;
