import logo from "../../images/mainLogo.jpg";
import classes from "./MainIcon.module.css";

const MainIcon = () => {
    return (
        <>
            <div className={classes["main-image"]}>
                <img src={logo} alt='Food' />
            </div>
        </>
    );
};
export default MainIcon;
