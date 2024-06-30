const config = {
    jsonPlaceholderApi: {
        apiUrl: "https://jsonplaceholder.typicode.com",
        endpoints: {
            users: "/users",
            posts: "/posts",
            comments: "/comments"
        }
    },
    localApi: {
        apiUrl: "http://localhost:5000",
        endpoints: {
            users: "/api/users",
            platters: "/api/platters"
        }
    }
};

export default config;
