import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ErrorPopup from "../../../Components/ErrorPopup/ErrorPopup";

import classes from "./AddUser.module.css";
import useInput from "./useInput";
import { logout } from "../../../Store/auth";
import Success from "../../../Components/SuccessPopup/Success";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".com");
const isContactNo = (value) => value.trim() !== "" && value.trim().length == 10 && !value.includes("e");
// value.trim().length>9

const AddUser = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.loging.type);
  const token = useSelector((state) => state.loging.token);
  const history = useHistory();
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [userID, setUserID] = useState();
  const [error, setError] = useState(null);
  const [isUploaded, setIsUploaded] = useState(true);
  const [success, setSuccess] = useState(false);

  //get today date
  const getTodayDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/userManagement/get_userID", {
        headers: { Authorization: "lmsvalidation " + token },
      })
      .then((res) => {
        if (res.data.auth === false) {
          setError("You Are not Authorized to Create Users !");
          setIsUploaded(false);
          setTimeout(() => {
            dispatch(logout());
          }, 800);
        } else if (res.data.error === true) {
          setError("Something wrong. Try again later");
          setIsUploaded(false);
        } else if (res.data.noData === true) {
          setError("Error to get LMS ID Details. Try Again Later");
          setIsUploaded(false);
        } else {
          setUserID(res.data);
        }
      })
      .catch((er) => {
        setError("Somethin Wrong. Error is " + er);
        setIsUploaded(false);
      });
  }, []);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty);

  const {
    value: contactValue,
    isValid: contactIsValid,
    hasError: contactHasError,
    valueChangeHandler: contactChangeHandler,
    inputBlurHandler: contactBlurHandler,
    reset: resetContact,
  } = useInput(isContactNo);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

  const {
    value: facultyValue,
    isValid: facultyIsValid,
    hasError: facultyHasError,
    valueChangeHandler: facultyChangeHandler,
    inputBlurHandler: facultyBlurHandler,
    reset: resetFaculty,
  } = useInput(isNotEmpty);

  const {
    value: roleValue,
    isValid: roleIsValid,
    hasError: roleHasError,
    valueChangeHandler: roleChangeHandler,
    inputBlurHandler: roleBlurHandler,
    reset: resetRole,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    emailIsValid &&
    nameIsValid &&
    dateIsValid &&
    contactIsValid &&
    addressIsValid &&
    roleIsValid &&
    facultyIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setError("Please Check that you filled all the field");
      setIsUploaded(false);
      return;
    }

    const user = {
      userIdNo: userID,
      name: nameValue,
      email: emailValue,
      date: dateValue,
      contact: contactValue,
      address: addressValue,
      role: roleValue,
      faculty: facultyValue,
    };

    axios
      .post("http://localhost:5000/userManagement/add_user", user, {
        headers: { Authorization: "lmsvalidation " + token },
      })
      .then((res) => {
        if (res.data.auth === false) {
          setError("You Are not Authorized to Create Users !");
          setIsUploaded(false);
          setTimeout(() => {
            dispatch(logout());
          }, 500);
        } else if (res.data.notAdded === true) {
          setIsEmailExist(true);
          resetEmail();
          setError("Email is Already Exsist. Enter New One");
          setIsUploaded(false);
        } else if (res.data.contactExist === true) {
          resetContact();
          setError("Contact Number is Already Exist. Enter New One");
          setIsUploaded(false);
        } else if (res.data.error === true) {
          setError("Something wrong. Try again later");
          setIsUploaded(false);
        } else if (res.data.inValidReq === true) {
          setError("Invalid Request. or Empty Field Request");
          setIsUploaded(false);
        } else {
          resetEmail();
          resetName();
          resetDate();
          resetContact();
          resetAddress();
          resetFaculty();
          resetRole();
          setIsEmailExist(false);
          setSuccess(true);
        }
      })
      .catch((er) => {
        setError("Something wrong. Try again later");
        setIsUploaded(false);
      });
  };

  const IDClass = classes.inputs;
  const emailClass = emailHasError ? classes.invalid_inputs : classes.inputs;
  const nameClass = nameHasError ? classes.invalid_inputs : classes.inputs;
  const dateClass = dateHasError ? classes.invalid_inputs : classes.inputs;
  const addressClass = addressHasError
    ? classes.invalid_inputs
    : classes.inputs;
  const contactClass = contactHasError
    ? classes.invalid_inputs
    : classes.inputs;
  const roleClass = roleHasError ? classes.invalid_select : classes.select;
  const facultyClass = facultyHasError
    ? classes.invalid_select
    : classes.select;

  const labelOfEmail = isEmailExist
    ? "Email is Taken. Enter a New Email:"
    : "Email ID";
  const lables = isEmailExist ? classes.invalid_lables : classes.lables;

  const BackHandler = () => {
    history.replace("/user-report");
  };
  const clickedHandler = (event) => {
    setIsUploaded(true);
  };
  const onRedirect = () => {
    window.location.reload();
  };

  return (
    <>
      {userType === "admin" && (
        <div className={classes.CardView}>
          {!isUploaded && (
            <ErrorPopup error={error} clickedHandler={clickedHandler} />
          )}
          {success && <Success redirect={onRedirect} />}
          <h2 className={classes.title}>ADD USER</h2>
          <hr className={classes.line}></hr>
          <form className={classes.formContainer} onSubmit={submitHandler}>
            <label for="Uname" className={classes.lables}>
              User ID :
            </label>
            <br />
            <input
              type="text"
              id="uID"
              name="uID"
              className={IDClass}
              value={"LMS" + userID}
              readonly
            ></input>
            <label for="email" className={lables}>
              {labelOfEmail}
            </label>
            <br />

            <input
              type="email"
              id="email"
              name="userEmail"
              className={emailClass}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            ></input>
            {emailHasError && (
              <p className={classes.errorText}>
                Please Enter a Valid Email !!!
              </p>
            )}
            {/* {ISEmailExist && (
             <p className={classes.errorText}> Email is Already Taken. Enter a new Email</p>
           )} */}

            <label for="Uname" className={classes.lables}>
              Name :
            </label>
            <br />
            <input
              type="text"
              id="Uname"
              name="userName"
              className={nameClass}
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            ></input>
            {nameHasError && (
              <p className={classes.errorText}>Please Enter a Name !!!</p>
            )}

            <label for="DOB" className={classes.lables}>
              Date of Birth :
            </label>
            <br />
            <input
              type="date"
              id="DOB"
              name="DOB"
              value={dateValue}
              className={dateClass}
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
              min="1930-01-01"
              max={getTodayDate()}
            ></input>
            {dateHasError && (
              <p className={classes.errorText}>Please Select a Date !!!</p>
            )}

            <label for="contactNo" className={classes.lables}>
              Contact Number :
            </label>
            <br />
            <input
              type="number"
              id="contactNo"
              name="contactNo"
              value={contactValue}
              className={contactClass}
              onChange={contactChangeHandler}
              onBlur={contactBlurHandler}
            ></input>
            {contactHasError && (
              <p className={classes.errorText}>
                Please Enter a Valid Contact No!!!
              </p>
            )}

            <label for="address" className={classes.lables}>
              Address :
            </label>
            <br />
            <input
              id="address"
              name="address"
              className={addressClass}
              value={addressValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            ></input>
            {addressHasError && (
              <p className={classes.errorText}>Please Enter a Address !!!</p>
            )}

            <label for="faculty" className={classes.lables}>
              Faculty :
            </label>
            <br />
            <select
              id="faculty"
              name="faculty"
              className={facultyClass}
              value={facultyValue}
              onChange={facultyChangeHandler}
              onBlur={facultyBlurHandler}
            >
              <option selected="true" value="" hidden></option>
              <option value="Computing">Computing</option>
              <option value="Enginnering">Enginnering</option>
              <option value="Bussiness">Bussiness</option>
              <option value="Humanities&Science">Humanities & Science</option>
            </select>
            {facultyHasError && (
              <p className={classes.errorText}>Please Select a Faculty !!!</p>
            )}

            <label for="role" className={classes.lables}>
              Role :
            </label>
            <br />
            <select
              id="role"
              name="role"
              className={roleClass}
              value={roleValue}
              onChange={roleChangeHandler}
              onBlur={roleBlurHandler}
            >
              <option selected="true" value="" hidden></option>
              <option value="admin">Admin</option>
              <option value="lecturer">Lecturer</option>
              <option value="instructor">Instructor</option>
              <option value="student">Student</option>
            </select>
            {roleHasError && (
              <p className={classes.errorText}>Please Select a Role!!!</p>
            )}

            {/* <label for="password" className={classes.lables}>Password :</label><br/>
               <input type="password" id="password"  name="password" className={classes.inputs}></input> */}

            <button className={classes.add}>ADD</button>
          </form>
          <button className={classes.add} onClick={BackHandler}>
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default AddUser;
