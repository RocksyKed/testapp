const initialState = {
    center: [46.452210, 30.738623],
    zoom: 13,
    markers: []
};

export const map = (state = initialState, actions) => {
    switch (actions.type) {

        case 'SET_MARKERS':
            return {
                ...state,
                markers: actions.markers
            };

        default:
            return state;
    }
};