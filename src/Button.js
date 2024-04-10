import PropTypes from "prop-types";
import styles from "../assets/css/Button.module.css";
function Button({text}){ // props
    return <button className={styles.title}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;