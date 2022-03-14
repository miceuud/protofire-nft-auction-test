/* eslint-disable no-console */
// import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Routes, Route, Link } from 'react-router-dom'
// import { MetaMask } from './connectors'
import Home from './components/home'
import CreateAuction from './components/CreateNft'

import './App.css'

function App() {
  const { account } = useWeb3React()
  // let signer

  return (
    <>
      <div>
        <nav>
          <div>
            <Link to="/"> DApp Auction</Link>
          </div>
          <div>
            <Link to="/create-auction">Create NFT </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-auction" element={<CreateAuction />} />
        </Routes>
      </div>
      {/* <Home /> */}
      <div>{account}</div>
      {/* <div>{signer}</div> */}
    </>
  )
}

export default App
