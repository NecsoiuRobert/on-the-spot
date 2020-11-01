const initState = {
    jobs: []
}
export const jobReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_JOB': console.log('created project',action.job);
            return state;
        case 'CREATE_JOB_ERROR': console.log('create project error', action.err);
            return state;
        case 'APPLY_JOB': 
            return state;
        default:
            return state;
    }
}
