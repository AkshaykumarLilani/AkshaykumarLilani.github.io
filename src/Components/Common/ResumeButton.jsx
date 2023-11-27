import { useSpring, animated } from "@react-spring/web"

function ResumeButton({ id }) {

    const [springs, api] = useSpring(() => ({
        from: { scale: 1 },
    }));

    const startAnimation = () => {
        api.start({
            from: {
                scale: 1
            },
            to: {
                scale: 1.1
            },
        })
    }

    const stopAnimation = () => {
        api.start({
            from: {
                scale: 1.1
            },
            to: {
                scale: 1
            },
        })
    }

    return (
        <animated.div
            className="cursor-pointer d-flex justify-content-center align-items-center p-2 br-10 gap-2"
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
            onClick={() => window.open("https://drive.google.com/file/d/1TtynQWfVblIlMRToPpeiD1zzWoHfgxtk/view?usp=sharing", "_blank")}
            id={id}
            style={{ width: "fit-content", ...springs }}
        >
            <DownloadIcon />
            <span className="text-white">Resume</span>
        </animated.div>
    )
}

const DownloadIcon = ({ width=24, height=16, fill="#FFF" }) => {
    // const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
    //     <path d="M18 23.3333H6C5.73478 23.3333 5.48043 23.2104 5.29289 22.9916C5.10536 22.7728 5 22.4761 5 22.1667C5 21.8572 5.10536 21.5605 5.29289 21.3417C5.48043 21.1229 5.73478 21 6 21H18C18.2652 21 18.5196 21.1229 18.7071 21.3417C18.8946 21.5605 19 21.8572 19 22.1667C19 22.4761 18.8946 22.7728 18.7071 22.9916C18.5196 23.2104 18.2652 23.3333 18 23.3333Z" fill="white" />
    //     <path d="M15.92 13.5567C15.845 13.3436 15.7176 13.1612 15.5538 13.0325C15.3901 12.9038 15.1974 12.8345 15 12.8333H13V5.83332C13 5.5239 12.8946 5.22716 12.7071 5.00837C12.5196 4.78957 12.2652 4.66666 12 4.66666C11.7348 4.66666 11.4804 4.78957 11.2929 5.00837C11.1053 5.22716 11 5.5239 11 5.83332V12.8333H8.99999C8.80256 12.8345 8.60985 12.9038 8.44613 13.0325C8.28241 13.1612 8.15501 13.3436 8.07999 13.5567C8.00341 13.7691 7.98248 14.0033 8.01986 14.2296C8.05723 14.4559 8.15123 14.6643 8.28999 14.8283L11.29 18.3283C11.3851 18.4345 11.4972 18.5178 11.62 18.5733C11.7397 18.635 11.8691 18.6669 12 18.6669C12.1309 18.6669 12.2603 18.635 12.38 18.5733C12.5027 18.5178 12.6149 18.4345 12.71 18.3283L15.71 14.8283C15.8487 14.6643 15.9427 14.4559 15.9801 14.2296C16.0175 14.0033 15.9966 13.7691 15.92 13.5567Z" fill="white" />
    // </svg>;

    // const downloadIcon = <svg height={`${height}px`} version="1.1" viewBox="0 0 24 16" width={`${width}px`} xmlns="http://www.w3.org/2000/svg" xmlns: sketch="http://www.bohemiancoding.com/sketch/ns" xmlns: xlink="http://www.w3.org/1999/xlink">
    //     <title /><desc /><defs />
    //     <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
    //         <g fill={fill} id="Core" transform="translate(-504.000000, -88.000000)">
    //             <g id="cloud-download" transform="translate(504.000000, 88.000000)">
    //                 <path d="M19.4,6 C18.7,2.6 15.7,0 12,0 C9.1,0 6.6,1.6 5.4,4 C2.3,4.4 0,6.9 0,10 C0,13.3 2.7,16 6,16 L19,16 C21.8,16 24,13.8 24,11 C24,8.4 21.9,6.2 19.4,6 L19.4,6 Z M17,9 L12,14 L7,9 L10,9 L10,5 L14,5 L14,9 L17,9 L17,9 Z" id="Shape" />
    //             </g>
    //         </g>
    //     </g>
    // </svg>;

    // const downloadIcon = <svg width={`${15}px`} height={`${15}px`} fill={fill} data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    //     <title/>
    //     <path d="M61.88,93.12h0a3,3,0,0,0,.44.36l.24.13a1.74,1.74,0,0,0,.59.24l.25.07h0a3,3,0,0,0,1.16,0l.26-.08.3-.09a3,3,0,0,0,.3-.16l.21-.12a3,3,0,0,0,.46-.38L93,66.21A3,3,0,1,0,88.79,62L67,83.76V3a3,3,0,0,0-6,0V83.76L39.21,62A3,3,0,0,0,35,66.21Z"/>
    //     <path d="M125,88a3,3,0,0,0-3,3v22a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V91a3,3,0,0,0-6,0v22a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V91A3,3,0,0,0,125,88Z"/>
    // </svg>

    const downloadIcon = <svg width={`${18}px`} height={`${18}px`} fill={fill} data-name="Livello 1" id="Livello_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22,16 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,16 L4,16 L4,20 L20,20 L20,16 L22,16 Z M13,12.5857864 L16.2928932,9.29289322 L17.7071068,10.7071068 L12,16.4142136 L6.29289322,10.7071068 L7.70710678,9.29289322 L11,12.5857864 L11,2 L13,2 L13,12.5857864 Z" fillRule="evenodd"/>
    </svg>

    return downloadIcon;
}

export default ResumeButton