import {
  Article,
  ArticleContent,
  ArticleDesc,
  ArticleImage,
  ArticleTitle,
  ArticleDetail,
} from './NewsItem.styled';

function NewsItem({ image, title, description, date, url }) {
  const dateString = date;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <Article href={url}>
      <ArticleImage src={image} />
      <ArticleContent>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDesc>{description}</ArticleDesc>
        <ArticleDetail>{formattedDate}</ArticleDetail>
      </ArticleContent>
    </Article>
  );
}

export default NewsItem;
