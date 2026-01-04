"use client";

import { useEffect } from 'react';

const LogRocketInit = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_LOGROCKET_APP_ID) {
            import('logrocket').then((LogRocket) => {
                LogRocket.default.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID);
            });
        }
    }, []);

    return null;
};

export default LogRocketInit;
