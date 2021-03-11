import Header from '../components/Header'
import TopCards from '../components/TopCards'
import Table from '../components/Table'

const Tenants = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Tenants' path='home/tenants' />
        <TopCards />
        <Table table_name='Property List' />
      </div>
    </main>
  )
}

export default Tenants
