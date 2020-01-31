//Action functions
export const sortByAuthor = () => ({
    type: 'SORT_BY_AUTHOR'
})
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
export const setAuthor = (author='') => ({
    type: 'SET_AUTHOR',
    author   
})
export const setTitle = (title='') => ({
    type: 'SET_TITLE',
    title  
})

export const setDate = (dateCreated = 0) => ({
    type:'SET_DATE',
    dateCreated
})

