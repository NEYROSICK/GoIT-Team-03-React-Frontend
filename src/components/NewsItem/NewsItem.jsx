import {
  Article,
  ArticleContent,
  ArticleDesc,
  ArticleImage,
  ArticleTitle,
} from './NewsItem.styled';

function NewsItem({ image, title, description, details }) {
  return (
    <Article href="" className="article">
      <ArticleImage className="article-image">
        <img src={image} alt="" />
      </ArticleImage>
      <ArticleContent className="article-content">
        <ArticleTitle className="article-title">
          <h2>{title}</h2>
        </ArticleTitle>
        <ArticleDesc className="article-description">{description}</ArticleDesc>
        <div className="article-details">
          <small>
            <b>{details}</b>
          </small>
        </div>
      </ArticleContent>
    </Article>
  );
}

export default NewsItem;
