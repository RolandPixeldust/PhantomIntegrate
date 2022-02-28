function getAccount()
{
window.solana.connect();
window.solana.request({ method: "connect" })
  
window.solana.isConnected
window.solana.autoApproved

  document.getElementById("user-account").innerHTML = window.solana.publicKey;
}


function disconnectAccount()
{
  window.solana.disconnect();
  window.solana.on('disconnect', () => console.log("disconnected!"))
}


function getNFTs()
{
//Function to get all NFT information.
//get NFT
  const getAllNftData = async () => {
    try {
      if (connectData === true) {
        const connect =    createConnectionConfig(clusterApiUrl("devnet"));
        const provider = getProvider();
        let ownerToken = provider.publicKey;
        const result = isValidSolanaAddress(ownerToken);
        console.log("result", result);
const nfts = await getParsedNftAccountsByOwner({
          publicAddress: ownerToken,
          connection: connect,
          serialization: true,
        });
        return nfts;
      }
    } catch (error) {
      console.log(error);
    }
  };  
}


function getAxios()
{
    import axios from "axios";
    //Function to get all nft data
    const getNftTokenData = async () => {
      try {
        let nftData = await getAllNftData();
        var data = Object.keys(nftData).map((key) => nftData[key]);                                                                    
        let arr = [];
        let n = data.length;
        for (let i = 0; i < n; i++) {
          console.log(data[i].data.uri);
          let val = await axios.get(data[i].data.uri);
          arr.push(val);
        }
        return arr;
      } catch (error) {
        console.log(error);
      }
    };
}