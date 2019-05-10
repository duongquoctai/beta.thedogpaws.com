import Link from "next/link"
import { withRouter } from "next/router"
import classnames from "classnames"

const Prev = ( currentPage ) => {
  currentPage = parseInt(currentPage)

  if (currentPage <= 1) {
    return currentPage
  }

  return currentPage -= 1
}

const Next = ( currentPage, totalPages ) => {
  totalPages = parseInt(totalPages)
  currentPage = parseInt(currentPage)

  if (currentPage >= totalPages) {
    return totalPages
  }

  return currentPage += 1
}

const Pagination = ({ totalPages, router, ...rest }) => {
  if (totalPages <= 1) {
    return null
  }
  
  const currentPage = router.query.page ? router.query.page : 1

  // build an array from number of pages
  let numbers = []

  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i)
  }

  return (
    <div className="row topmargin_60">
      <div className="col-sm-12 text-center">
        <ul className="pagination highlightlinks">
          <li
            className={classnames({
              hide: currentPage == 1
            })}
          >
            <Link
              href={{
                pathname: router.pathname,
                query: {
                  ...router.query,
                  page: Prev( currentPage )
                }
              }}
            >
              <a className="no-changes">
                <span className="sr-only">Prev</span>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </a>
            </Link>
          </li>

          {numbers
            .filter(
              (number, index) => (index < 5)
            )
            .map((number, index) => (
              <li
                className={classnames("number", {
                  active: number == currentPage
                })}
                key={number}
              >
                <Link
                  href={{
                    pathname: router.pathname,
                    query: {
                      // keep previous url args
                      ...router.query,
                      page: number
                    }
                  }}
                >
                  <a>{ number }</a>
                </Link>
              </li>
            ))
          }

          <li
            className={classnames({
              hide: currentPage == totalPages
            })}
          >
            <Link
              href={{
                pathname: router.pathname,
                query: {
                  ...router.query,
                  page: Next( currentPage, totalPages )
                }
              }}
            >
              <a className="no-changes">
                <span className="sr-only">Next</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Pagination)
