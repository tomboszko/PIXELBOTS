import ipfsClient from 'ipfs-http-client'

async function run() {
  const ipfs = ipfsClient('https://ipfs.infura.io:5001')

  const data = {
    "description": "", 
  "external_url": "ipfs://CID/00.png",
  "image": "", 
  "name": " Cuddlebot #00",
  "attributes": [
    {
      "trait_type": "Style", 
      "value": "Kawaii"
    }, 
    {
      "trait_type": "level", 
      "value": "1"
    } 

   ]
}

  const result = await ipfs.add(JSON.stringify(data))

  console.log(result.path)
}

run().catch(console.error)