
import Link from "next/link";

const ButtonPagination = (props) => {

    const pageNro = [];
    const totalPage = props.users.total_pages;
    for (let i = 1; i <= totalPage; i++) {
        pageNro.push(i);
    }
    const pageActual = props.users.page;
    console.log(props)
    


    return (
        <div className="container m-auto">
              <ul className="pagination pagination-sm mx-auto">
              <li className={`page-item ${pageActual === 1 ? 'disabled' : ''}`}>
                <Link className="page-link" href={`/pagination/${pageActual - 1}`}>&laquo;</Link>
              </li>
              {pageNro.map((page) => (
                <li key={page} className={`page-item ${pageActual === page ? 'active' : ''}`}>
                <Link className="page-link" href={`/pagination/${page}`}>{page}</Link>
                </li>
              ))}
              <li className={`page-item ${pageActual === totalPage ? 'disabled' : ''}`}>
                <Link className="page-link" href={`/pagination/${pageActual + 1}`}>&raquo;</Link>
              </li>
  </ul>
        </div>
    );
}

export default ButtonPagination;
