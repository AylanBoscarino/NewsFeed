const baseUrl = 'https://newsapi.org/v2';
const apiKey = 'apiKey=5b6f6f09360f483783575868d3159e6c';
const country = 'country=br';

export const topHeadlines = () => {
    return `${baseUrl}/top-headlines?${country}&${apiKey}`;
};