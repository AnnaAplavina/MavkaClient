"use client"
import React, { useEffect, useState } from 'react';
import { NewsCard } from "./news-card"
import { getNews } from '@/db_methods/methods';

const categories = ['Test']

function formatDate(inputDate: string) {
  const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const dateParts = inputDate.split('-');
  if (dateParts.length === 3) {
      const day = dateParts[2];
      const month = months[parseInt(dateParts[1]) - 1];
      const year = dateParts[0];
      return `${day} ${month} ${year}`;
  }

  return 'Неверный формат даты';
}

export const News = () => {
  const [items, setWalls] = useState([]);

  useEffect(() => {
    const fetchData = async () => { setWalls(await getNews()); }
    fetchData().catch(console.error);
  }, [])

  console.log(items);

  return (
    <div>
      <div className="grid sm:grid-cols-2 max-h-min md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((news) => (
          <NewsCard 
            key={news[0]}
            id={String(news[0])}
            title={news[1]}
            content={news[3]}
            author={news[4]}
            date={formatDate(news[5])}
            category={categories[news[0]]} // TODO
            imageUrl={news[2]}
          />
        ))}
      </div>
      {items.length === 0 && ( <div className="text-center text-sm text-muted-foreground mt-10"> No news found </div> )}
    </div>
  );
};


