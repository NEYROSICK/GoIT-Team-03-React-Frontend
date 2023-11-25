import { useGetMyFavoriteQuery } from '../../../redux/API/noticesApi';

function FavoriteNotices({ searchParams }) {
  const { data, error, isLoading } = useGetMyFavoriteQuery({ searchParams });
  return <div>FavoriteNotices</div>;
}

export default FavoriteNotices;
