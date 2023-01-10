import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummer from '../Shared/NewsSummery/NewsSummer';

const Categories = () => {
    const categoryNews = useLoaderData();
    

    return (
        <div>
            <h1>{categoryNews.length}</h1>
            {
                categoryNews.map(news => <NewsSummer
                key={news._id}
                news={news}
                >
                </NewsSummer>)
            }
        </div>
    );
};

export default Categories;