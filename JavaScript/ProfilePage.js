import Aside from "./Components/Aside";
import classes from "./ProfilePage.module.css";
import UserGrade from "./Components/Main";
import { useState } from "react";
import EditProfile from "./Components/EditProfilepage";
import Entrollment from "./Components/Entrollement";

const ProfilePage = () => {
  const [main, setMain] = useState(true);
  const [Mgrades, setGrade] = useState(false);
  const [courses, setCourse] = useState(false);

  const data = {
    main,
    Mgrades,
    courses,
  };

  const mycourses = () => {
    setCourse(true);
    setMain(false);
    setGrade(false);
  };
  const details = () => {
    setCourse(false);
    setMain(true);
    setGrade(false);
  };
  const grades = () => {
    setCourse(false);
    setMain(false);
    setGrade(true);
  };
  return (
    <main className={classes.mainSec}>
      <div className={classes.aside}>
        <Aside data={data} grades={grades} details={details} mycourses={mycourses} />
      </div>
      <div className={classes.main_side}>
        {Mgrades && <UserGrade />}
        {main && <EditProfile />}
        {courses && <Entrollment />}
      </div>
    </main>
  );
};
export default ProfilePage;
