const initialState = {
    center: [46.452210, 30.738623],
    zoom: 13,
    markers: []
};

export const map = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_MARKERS':
            return {
                ...state,
                markers: action.markers
            };

        case 'SET_MARKER':
            return {
                ...state,
                markers: [
                    ...state.markers,
                    action.marker
                ]
            };

        default:
            return state;
    }
};
