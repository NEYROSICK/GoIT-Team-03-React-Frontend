import {
  Article,
  ArticleContent,
  ArticleDesc,
  ArticleImage,
  ArticleTitle,
} from './NewsItem.styled';

function NewsItem({ image, title, description, date, url }) {
  return (
    <Article href={url}>
      <ArticleImage src={image} />
      <ArticleContent>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDesc>{description}</ArticleDesc>
        <ArticleDesc>{date}</ArticleDesc>
      </ArticleContent>
    </Article>
  );
}

export default NewsItem;
