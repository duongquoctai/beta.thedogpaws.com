import Link from "next/link";
import { withRouter } from "next/router";
import "./Pagination.css";
import classnames from "classnames";

const Pagination = ({ totalPages, router, ...rest }) => {
  if (totalPages <= 1) return null;
  const currentPage = router.query.page ? router.query.page : 1;
  // build an array from number of pages
  let numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }
  return (
    <div className="pagination">
      {numbers.map(number => (
        <Link
          href={{
            pathname: router.pathname,
            query: {
              // keep previous url args
              ...router.query,
              page: number
            }
          }}
          key={number}
        >
          <a
            className={classnames("number", {
              active: number == currentPage
            })}
          >
            {number}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(Pagination);
