//Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.

async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    let firstTenPosts;
    try {
        await fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((postsResponse) => {
            firstTenPosts = postsResponse;
        })

        console.log(firstTenPosts)
    }
    catch(err) {
        console.warn("There was an error: ", err);
    }
}

// Call the function to fetch posts
fetchPosts();
