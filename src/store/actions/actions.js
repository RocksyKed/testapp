export const setUserData = (id, login) => ({
    type: 'SET_USER_DATA',
    id,
    login
});

export const setAuthTrue = () => ({
    type: 'SET_AUTH_TRUE'
});

export const setAuthFalse = () => ({
    type: 'SET_AUTH_FALSE'
});

export const setMarkers = (markers) => ({
    type: 'SET_MARKERS',
    markers
});

export const setMarker = (marker) => ({
    type: 'SET_MARKER',
    marker
});