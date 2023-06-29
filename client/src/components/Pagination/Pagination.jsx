import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const Pagination = ({ totalPages, handlePageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<AiOutlineArrowLeft />}
      nextLabel={<AiOutlineArrowRight />}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};
