import type { NextPage } from 'next'
import { About } from '../components/About'
import { ComentsPhoto } from '../components/coments/ComentsPhoto'
import { HeaderImg } from '../components/homePage/HeaderImg'
import { HomepageTop } from '../components/homePage/HomepageTop'
import Layout from '../components/Layout/Layout'
import { Map } from '../components/map/Map'
import { Certificates } from '../components/Sertificats/Certificates'

const Home: NextPage = () => {
  return (
    <>
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
