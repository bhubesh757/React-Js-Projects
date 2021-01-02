export const initialState = {
    user: null,
    playlists: [],
    playing : false,
    item : null ,
    // token : 'BQDp00BStoGVv6xmCIVwErONBvGWmcwfF6UJcj0zFKVav2MHpvYYxsIiTGoDtXZ8LniC0JHXVi00PGEVk9icTd4_-cJkYdQEFGIF7Q-AFVOEee6pibY8Us2-bEegKa9YW8X8j4-h0Wo_xIFsci9UDMBeqMuZBAbcuQuoqKh1YYENzEeR'
};

// export const actionTypes = {
//     SET_USER: "SET_USER"
// };

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN" :
            return {
                ...state ,
                token : action.token
            }

        case 'SET_PLAYLISTS' :
            return {
                ...state , 
                playlists : action.playlists,
            }
        
        default:
            return state;
    }
};

export default reducer;