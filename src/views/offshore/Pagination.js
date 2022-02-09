import React from 'react'

// reactstrap components
import { 
  CardFooter,
  PaginationItem,
  PaginationLink
} from "reactstrap";

const Pagination = ( {dataPerPage, totalData, paginate} ) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
    
  }
  return (
    <CardFooter className="py-4">
      <nav aria-label="...">
        {pageNumbers.map(number => (
          <Pagination
          key={number}
          className="pagination justify-content-end mb-0"
          listClassName="justify-content-end mb-0"
        >

          <PaginationItem className="active">
            <PaginationLink
              href="!#"
              onClick={() => paginate(number)}
            >
              {number}
            </PaginationLink>
          </PaginationItem>

        </Pagination>
        ))}
      </nav>
    </CardFooter>
  )
}

export default Pagination;
