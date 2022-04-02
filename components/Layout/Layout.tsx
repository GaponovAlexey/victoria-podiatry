import { css } from '@emotion/css'
import { NextPage } from 'next'
import { Contacts } from '../Contacts/Contacts'
import { Header } from '../homePage/Header'

const Layout: NextPage = ({ children }: any) => {
  return (
    <div
      id='home'
      className={css`
        width: 960px;
        font-family: 'Raleway', sans-serif;
        margin: 0 auto;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
        }
      `}
    >
      <Header />
      {children}
      <Contacts />
    </div>
  )
}

export default Layout
