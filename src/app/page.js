import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Card from './components/Card'
import Pagination from './pagination/[page]/page'
import ButtonPagination from './components/ButtonPagination'

const inter = Inter({ subsets: ['latin'] })

const fetchUser = () => {
  return fetch('https://reqres.in/api/users?page=1')
  .then (res => res.json())
}

export default async function Home() {



  const user = await fetchUser();
  const users = user.data;
  
  return (
    <main className={styles.main}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <ButtonPagination users={user}/>
          <Card users={users}/>
          </div>
        </div>
      </div>
        
    </main>
  )
}
