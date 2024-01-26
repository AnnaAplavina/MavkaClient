function getUserId() {
    return "200005";
}

export const auth = () => {

    const isAuthenticated = true;
    const userId = isAuthenticated ? getUserId() : null;

    return {
        userId,
        isAuthenticated
    };
}
