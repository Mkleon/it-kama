export const getUsers = (state) => {
    return state.users;
};

export const getTotalCountPages = (state) => {
    return state.users.totalCountPages;
};

export const getCountPerPage = (state) => {
    return state.users.countPerPage;
};

export const getCurrentPage = (state) => {
    return state.users.currentPage;
};

export const getIsFetching = (state) => {
    return state.users.isFetching;
};

export const getIsFollowingProgress = (state) => {
    return state.users.isFollowingProgress;
};
