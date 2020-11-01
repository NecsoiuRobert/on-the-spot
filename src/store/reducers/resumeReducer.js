const initState = {
    resume:null
}
export const resumeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_RESUME': console.log('created project',action.resume);
            return state;
        default:
            return state;
    }
}
