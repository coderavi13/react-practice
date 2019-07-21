import React from "react";
import _ from "lodash";
const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log("Pagecount", pageCount);
  const pageArray = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a
            className="page-link"
            href="https://www.google.com/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Previous
          </a>
        </li>

        {pageArray.map(pageNum => (
          <li key={pageNum} className="page-item">
            <a
              className="page-link"
              onClick={() => props.onPageChange(pageNum)}
            >
              {pageNum}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="https://www.google.com/">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
