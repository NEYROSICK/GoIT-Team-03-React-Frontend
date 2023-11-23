import { useGetNoticesQuery } from '../../../redux/API/noticesApi';

function AllNotices({ searchParams = 'ara' }) {
  const { data, error, isLoading } = useGetNoticesQuery({
    params: searchParams ? { searchParams } : '',
  });
  return (
    <>
      <p>ALL NOTICES BLYAD</p>
    </>
  );
}

export default AllNotices;
