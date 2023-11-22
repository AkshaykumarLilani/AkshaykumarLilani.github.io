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

    const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path d="M18 23.3333H6C5.73478 23.3333 5.48043 23.2104 5.29289 22.9916C5.10536 22.7728 5 22.4761 5 22.1667C5 21.8572 5.10536 21.5605 5.29289 21.3417C5.48043 21.1229 5.73478 21 6 21H18C18.2652 21 18.5196 21.1229 18.7071 21.3417C18.8946 21.5605 19 21.8572 19 22.1667C19 22.4761 18.8946 22.7728 18.7071 22.9916C18.5196 23.2104 18.2652 23.3333 18 23.3333Z" fill="white" />
        <path d="M15.92 13.5567C15.845 13.3436 15.7176 13.1612 15.5538 13.0325C15.3901 12.9038 15.1974 12.8345 15 12.8333H13V5.83332C13 5.5239 12.8946 5.22716 12.7071 5.00837C12.5196 4.78957 12.2652 4.66666 12 4.66666C11.7348 4.66666 11.4804 4.78957 11.2929 5.00837C11.1053 5.22716 11 5.5239 11 5.83332V12.8333H8.99999C8.80256 12.8345 8.60985 12.9038 8.44613 13.0325C8.28241 13.1612 8.15501 13.3436 8.07999 13.5567C8.00341 13.7691 7.98248 14.0033 8.01986 14.2296C8.05723 14.4559 8.15123 14.6643 8.28999 14.8283L11.29 18.3283C11.3851 18.4345 11.4972 18.5178 11.62 18.5733C11.7397 18.635 11.8691 18.6669 12 18.6669C12.1309 18.6669 12.2603 18.635 12.38 18.5733C12.5027 18.5178 12.6149 18.4345 12.71 18.3283L15.71 14.8283C15.8487 14.6643 15.9427 14.4559 15.9801 14.2296C16.0175 14.0033 15.9966 13.7691 15.92 13.5567Z" fill="white" />
    </svg>

    return (
        <animated.div 
            className="cursor-pointer d-flex justify-content-center align-items-center p-2 br-10" 
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
            onClick={()=>window.open("/Resume.pdf", "_blank")}
            id={id} 
            style={{ width: "fit-content", ...springs }}
        >
            {downloadIcon}
            <span className="text-white">Resume</span>
        </animated.div>
    )
}

export default ResumeButton