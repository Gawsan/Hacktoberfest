import classes from "./NewTimetable.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ErrorPopup from "../../../Components/ErrorPopup/ErrorPopup";

const NewTimetable = () => {
  const [title, setTitle] = useState();
  const [filett, setFiles] = useState();
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.loging.token);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const timetable = new FormData();

    if (!title.trim()) {
      setError("Require valid Title");
      return;
    }

    timetable.append("title", title);
    timetable.append("file", filett);

    axios
      .post("http://localhost:5000/timetable/add_timetable", timetable, {
        headers: { Authorization: "lmsvalidation " + token },
      })
      .then((res) => {
        if (res.data.created === true) {
          history.replace("/services/timetable");
        } else {
          setError("Unable to create! try again.")
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const fileHandler = (event) => {
    setFiles(event.target.files[0]);
  };

  return (
    <div className={classes.container}>
      {error && (
        <ErrorPopup
          clickedHandler={() => {
            setError(null);
          }}
          error={error}
        />
      )}
      <div className={classes.head}>NEW TIMETABLE</div>
      <hr />
      <form enctype="multipart/form-data" onSubmit={submitHandler}>
        <div className={classes.input_container}>
          <input
            value={title}
            required
            onChange={titleHandler}
            placeholder="Title"
            id="title"
            type="text"
            className={classes.inputs}
          />
        </div>
        <div className={classes.input_container}>
          <input
            onChange={fileHandler}
            required
            type="file"
            name="timetable"
            className={classes.inputs}
          />
        </div>
        <div className={classes.btn_container}>
          <button className={classes.btn}>SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default NewTimetable;
