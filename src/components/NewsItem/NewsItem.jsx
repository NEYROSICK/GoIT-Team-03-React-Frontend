import {
  Article,
  ArticleContent,
  ArticleDesc,
  ArticleImage,
  ArticleTitle,
  ArticleDetail,
} from './NewsItem.styled';

import noImg from '../../images/NOIMG.png'
import { useState } from 'react';

function NewsItem({ image, title, description, date, url }) {
  const [imageError, setImageError] = useState(false);
  const dateString = date;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Article href={url}>
      {imageError ? ( 
        <ArticleImage src={noImg} alt="No Image Available" />
      ) : (
        <ArticleImage
          src={image}
          onError={handleImageError} 
          alt={title}
        />
      )}
      <ArticleContent>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDesc>{description}</ArticleDesc>
        <ArticleDetail>{formattedDate}</ArticleDetail>
      </ArticleContent>
    </Article>
  );
}

export default NewsItem;
