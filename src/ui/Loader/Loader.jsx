import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#54adff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#cce4fb"
      strokeWidth={8}
      strokeWidthSecondary={6}
    />
  );
};

export default Loader;
