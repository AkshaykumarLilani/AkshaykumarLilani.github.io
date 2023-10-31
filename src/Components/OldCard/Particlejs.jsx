import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import css from "./GlassCard.module.css";
import { useThemeContext } from "../../Context/ThemeContext";
import { particleJsOption } from "./particleJsOption";

const Particlesjs = ({ asBackground }) => {
    const { theme } = useThemeContext();
    console.log({ theme });

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id={asBackground ? css["tsparticles-background"] : css["tsparticles"]}
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                borderRadius:"inherit"
            }}
            options={particleJsOption}
        />
    )
}

export default Particlesjs;