import { useGetMyNoticesQuery } from '../../../redux/API/noticesApi';

function MyAds({ searchParams = 'ara' }) {
  const { data, error, isLoading } = useGetMyNoticesQuery({
    params: searchParams ? { searchParams } : '',
  });
  return <div>MyAds</div>;
}

export default MyAds;
