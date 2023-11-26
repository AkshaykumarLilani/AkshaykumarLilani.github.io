import { changeThemeToDarkAction, changeThemeToLightAction } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ThemeChangerButton({ size }) {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.theme);

    const changeTheme = () => {
        if (theme === "light") {
            dispatch(changeThemeToDarkAction());
        } else {
            dispatch(changeThemeToLightAction());
        }
    }

    const darkIcon = <svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" height={`${size}`} width={`${size}`}><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="#464646" /></svg>;

    const lightIcon = <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height={`${size}`} width={`${size}`} /><circle cx="128" cy="128" fill="none" r="60" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="128" x2="128" y1="36" y2="16" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="62.9" x2="48.8" y1="62.9" y2="48.8" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="36" x2="16" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="62.9" x2="48.8" y1="193.1" y2="207.2" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="128" x2="128" y1="220" y2="240" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="193.1" x2="207.2" y1="193.1" y2="207.2" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="220" x2="240" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="193.1" x2="207.2" y1="62.9" y2="48.8" /></svg>;

    return (
        <div className="cursor-pointer" onClick={changeTheme} style={{width: size, height: size}}>
            {
                theme === "light" ? darkIcon : lightIcon
            }
        </div>
    )
}

export default ThemeChangerButton