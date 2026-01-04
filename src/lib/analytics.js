"use client";

export async function trackLogRocketEvent(eventName, eventProperties = {}) {
    if (typeof window !== 'undefined') {
        try {
            const LogRocket = (await import('logrocket')).default;
            LogRocket.track(eventName, eventProperties);
        } catch (error) {
            console.error("Failed to track LogRocket event:", error);
        }
    }
}
