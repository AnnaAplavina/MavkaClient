function getUserId() {
    return "200005";
}

function getUserName() {
    return "gervant";
}

export const auth = () => {

    const isAuthenticated = true;
    const userId = isAuthenticated ? getUserId() : null;
    const username = getUserName();

    return {
        userId,
        username,
        isAuthenticated
    };
}
