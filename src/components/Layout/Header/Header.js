import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import MainIcon from "../../Icons/MainIcon";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.title}>
                    <h1>Quraishi's Meals</h1>
                </div>
                <HeaderCartButton />
            </header>
            <MainIcon />
        </>
    );
};
export default Header;
