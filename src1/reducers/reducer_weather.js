
export default function(prevState = [], action) {
    // console.log('reducer', action);
    if (action.error) {
        return prevState;
    }
    switch(action.type) {
        case 'seoul':
            return [action.payload[action.type], ...prevState];
        case 'daegu':
            return [action.payload[action.type], ...prevState];
        case 'incheon':
            return [action.payload[action.type], ...prevState];
        default:
            return prevState;
    }
}
