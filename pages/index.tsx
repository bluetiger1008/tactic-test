import Head from 'next/head'

import Card from '../components/card'
import Pie from '../components/pie'
import BarChart from '../components/barChart'
import { pieData, barData } from '../helpers/chartData'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 gap-4'>
            <Card title='Overall Usage'>
              <div className='flex items-center pt-8'>
                <div className={styles.pieContainer}>
                  <Pie data={pieData} />
                  <div className={styles.percentageValue}>
                    <p className='text-4xl flex items-top text-orange font-bold'>
                      65<span className='text-xl'>%</span>
                    </p>
                    <p className='text-2xl text-gray-400'>Total</p>
                  </div>
                </div>
                <div className={styles.usageInfo}>
                  <div className='flex mb-4 divide-x'>
                    <div className='px-4'>
                      <p className='text-xl text-gray-300'>Hotel Desk Usage</p>
                      <p className='text-5xl'>
                        <b>34</b> / 62
                      </p>
                    </div>
                    <div className='flex items-end pl-4'>
                      <p className='flex items-top text-5xl'>
                        55<span className='text-xl'>%</span>
                      </p>
                      <p className='text-lg flex items-center text-orange'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>{' '}
                        + 3.5%
                      </p>
                    </div>
                  </div>
                  <div className='flex divide-x'>
                    <div className='px-4'>
                      <p className='text-xl text-gray-300'>Hotel Desk Usage</p>
                      <p className='text-5xl'>
                        <b>18</b> / 24
                      </p>
                    </div>
                    <div className='flex items-end pl-4'>
                      <p className='flex items-top text-5xl'>
                        55<span className='text-xl'>%</span>
                      </p>
                      <p className='text-lg flex items-center text-orange'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>{' '}
                        + 3.5%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title='Office Breakdown'>
              <div className={styles.barContainer}>
                <BarChart data={barData} />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
