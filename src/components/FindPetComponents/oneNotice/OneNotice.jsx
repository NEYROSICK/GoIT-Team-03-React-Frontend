import { useGetOneNoticeQuery } from '../../../redux/API/noticesApi';

function OneNotice({ id, searchParams = 'ara' }) {
  const { data, error, isLoading } = useGetOneNoticeQuery({
    id: { id },
    params: searchParams ? { searchParams } : '',
  });
  return (
    <>
      <p>ALL NOTICES BLYAD</p>
    </>
  );
}

export default OneNotice;
