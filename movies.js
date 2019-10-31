const movies = [
    {title: 'abcd', year: 2018, rating: 4.5},
    {title: 'n', year: 2015, rating: 3},
    {title: 'c', year: 2017, rating: 2},
    {title: 'c', year: 2018, rating: 4.5},
]

const titles = movies
    .filter (m => m.year === 2018 && m.rating >= 4)
    .sort ((a,b) => a.rating = b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles)