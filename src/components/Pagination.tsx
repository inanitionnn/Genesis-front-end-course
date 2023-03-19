import ReactPaginate from "react-paginate";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selected: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;
  const handlePageClick = (data: any) => {
    onPageChange(data);
  };

  return (
    <ReactPaginate
      previousLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      }
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      }
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"flex justify-center align-middle my-8 text-xl "}
      activeClassName={"bg-indigo-300 font-bold rounded-full"}
      pageClassName={
        "bg-white border rounded-full px-3 py-1 mx-2 hover:bg-indigo-400 cursor-pointer duration-300 ease-out"
      }
      previousClassName={
        "bg-white my-auto px-1 py-1 rounded-full mx-2 hover:bg-indigo-400 cursor-pointer duration-300 ease-out"
      }
      nextClassName={
        "bg-white my-auto px-1 py-1 rounded-full mx-2 hover:bg-indigo-400 cursor-pointer duration-300 ease-out"
      }
      disabledClassName={"opacity-0 cursor-not-allowed"}
      forcePage={currentPage}
    />
  );
}
