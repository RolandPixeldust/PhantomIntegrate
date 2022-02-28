function getAccount()
{
    //window.solana.connect();
    window.solana.connect({ onlyIfTrusted: true });
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



function getNFTData()
{
    document.getElementById("nft-data").innerHTML = window.solana.getAllNftData;
    
    
}



