import { useGetNoticesQuery } from '../../../redux/API/noticesApi';

function AllNotices({ searchParams }) {
  const { data, error, isLoading } = useGetNoticesQuery({ searchParams });
  console.log(data);
  return (
    <>
      <p>ALL NOTICES BLYAD</p>
    </>
  );
}

export default AllNotices;
