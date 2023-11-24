import {
  Article,
  ArticleContent,
  ArticleImage,
  ArticleTitle,
} from './NewsItem.styled';

function NewsItem() {
  return (
    <Article href="" className="article">
      <ArticleImage className="article-image">
        <img src="" alt="" />
      </ArticleImage>
      <ArticleContent className="article-content">
        <ArticleTitle className="article-title">
          <h2>Lorem</h2>
        </ArticleTitle>
        <p className="article-description"></p>
        <div className="article-details">
          <small>
            <b></b>
          </small>
        </div>
      </ArticleContent>
    </Article>
  );
}

export default NewsItem;
