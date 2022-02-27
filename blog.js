/**
 * Array of blogs
 */
( function arrayBlog() {
    let blogsArray = [];
    let i = true ;
    if(i){
        blogsArray = [...blogsArray, {
            blogId: `#${(Math.floor(Math.random() * 90000) + 1000)}`,
            blogContent : "this is my first blog",
        } ];
    }
    console.log(blogsArray)
})();