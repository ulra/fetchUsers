import ButtonPagination from '@/app/components/ButtonPagination'
import Card from '@/app/components/Card'
import styles from '../../page.module.css'

const fetchPage = (page) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then (res => res.json())
  }

const Pagination = async ({ params }) => {

    const { page } = params
    const pageUser = await fetchPage(page);
    const users = pageUser.data;

    return (
        <main className={styles.main}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ButtonPagination users={pageUser}/>
                        <Card users={users}/>
                    </div>
                </div>
            </div>
        </main>
    )
} 

export default Pagination;