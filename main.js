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