// import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';

function App() {

  // useEffect is react's hook which is NOT written in return
  // metamask will help in 

  useEffect(() => {
    // loadProvider is an async function
    const loadProvider = async () => {
      // on installing metamask on project, it injects two objects on brower 1. web3 2. ethereum 
      // console.log(window.web3);
      // console.log(window.ethereum); 

        {/* web3 will act as bridge to communicate frontend with blockchain */}

      let provider = null;
      // check if metamask is being used and this will automatically connect metamask to brower when loaded
      if(window.ethereum){
        provider = window.ethereum;
      } 
    };

    loadProvider(); 

  }, [])

  return (
    <>
      <div class="card text-center">
        <div class="card-header">Funding</div>
        <div class="card-body">
          <h5 class="card-title">Balance: 20 ETH </h5>
          <p class="card-text"> Account : 0x0000000000
            {/* Account : {account ? account : "not connected"} */}
          </p>
          {/* <button
            connect front end with metamask manually

            type="button" class="btn btn-success"
             onClick={async () => { 
               const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
              console.log(accounts);
            }} >
            Connect to metamask
           </button> */}
           &nbsp;
          <button type="button" class="btn btn-success ">
            Transfer
          </button>
          &nbsp;
          <button type="button" class="btn btn-primary ">
            Withdraw
          </button>
        </div>
        <div class="card-footer text-muted">Code Eater</div>
      </div>
    </>
  );
}

export default App;
