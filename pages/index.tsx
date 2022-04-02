import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/homePage/Header'
import { HomepageTop } from '../components/homePage/HomepageTop'
import { HeaderImg } from '../components/homePage/HeaderImg'
import { About } from '../components/About'
import { ComentsPhoto } from '../components/coments/ComentsPhoto'
import { Certificates } from '../components/Sertificats/Certificates'
import { Contacts } from '../components/Contacts/Contacts'
import { Map } from '../components/map/Map'
import { css } from '@emotion/css'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Педикюр у Виктории</title>
        <link rel='icon' href='#!' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Layout>
        <HomepageTop />
        <HeaderImg />
        <About />
        <ComentsPhoto />
        <Certificates />
        <Map />
      </Layout>
    </>
  )
}

export default Home
