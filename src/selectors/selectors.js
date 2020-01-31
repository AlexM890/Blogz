export default (blogPosts, {author,title,dateCreated,sortBy}) => {
    return blogPosts.filter((item) => {
        const authorMatch = item.author.toLowerCase().includes(author.toLowerCase())
        const titleMatch = item.title.toLowerCase().includes(title.toLowerCase())
        return authorMatch && titleMatch
    }).sort((a,b) =>{
        if(sortBy === 'author'){
            return a.author < b.author ? -1 : a.author > b.author ? 1: 0
        }else if(sortBy === 'date'){
            return a.dateCreated > b.dateCreated ? -1 : a.dateCreated < b.dateCreated ? 1: 0
        }
    })
}