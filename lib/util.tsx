export const isGooglePage = (query: any): any => {
    return query && query.utm_source === "google";
};

export const isDevice = (device) => {
    try {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.indexOf(device) > -1;
    } catch (error) {
        return null;
    }
};
