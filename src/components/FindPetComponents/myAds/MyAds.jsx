import { useGetMyNoticesQuery } from '../../../redux/API/noticesApi';

function MyAds({ searchParams }) {
  const { data, error, isLoading } = useGetMyNoticesQuery(searchParams);
  return <div>MyAds</div>;
}

export default MyAds;
