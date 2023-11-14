const ipfsClient = require('ipfs-http-client')

async function run() {
  const ipfs = ipfsClient('https://ipfs.infura.io:5001')

  const data = {
    name: "Pixel Robot #1",
    description: "This is a unique pixel art robot from the Pixel Robot collection.",
    image: "https://yourwebsite.com/path/to/robot1.png",
    attributes: [
      {
        trait_type: "Series",
        value: "Pixel Robots"
      },
      {
        trait_type: "Robot Number",
        value: 1
      }
    ]
  }

  const result = await ipfs.add(JSON.stringify(data))

  console.log(result.path)
}

run().catch(console.error)