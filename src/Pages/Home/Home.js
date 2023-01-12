import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummer from '../Shared/NewsSummery/NewsSummer';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>Dragon news: {allNews.length}</h1>

            {
                allNews.map(news => <NewsSummer
                    key={news._id}
                    news={news}
                >
                </NewsSummer>)
            }
        </div>
    );
};

export default Home;