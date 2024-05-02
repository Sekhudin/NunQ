import MainAnchor from "components/anchor/main.anchor";

const CommonHeader = () => {
  return (
    <>
      <div>
        <MainAnchor />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div>search</div>
      </div>
    </>
  );
};
export default CommonHeader;
