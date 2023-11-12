


console.log('token.js loaded');

async function createToken(web3) {
    // Get the ABI and bytecode of the compiled contract
    // You need to provide these values. They can't be read from a file in the browser.
    const contractABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721IncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721InsufficientApproval",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOperator",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721NonexistentToken",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "mintToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    const contractBytecode = 608060405234801562000010575f80fd5b506040518060400160405280600681526020017f4b454c4c455200000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4b36000000000000000000000000000000000000000000000000000000000000815250815f90816200008d919062000313565b5080600190816200009f919062000313565b5050505f600681905550620003f7565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200012b57607f821691505b602082108103620001415762000140620000e6565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620001a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000168565b620001b1868362000168565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620001fb620001f5620001ef84620001c9565b620001d2565b620001c9565b9050919050565b5f819050919050565b6200021683620001db565b6200022e620002258262000202565b84845462000174565b825550505050565b5f90565b6200024462000236565b620002518184846200020b565b505050565b5b8181101562000278576200026c5f826200023a565b60018101905062000257565b5050565b601f821115620002c757620002918162000147565b6200029c8462000159565b81016020851015620002ac578190505b620002c4620002bb8562000159565b83018262000256565b50505b505050565b5f82821c905092915050565b5f620002e95f1984600802620002cc565b1980831691505092915050565b5f620003038383620002d8565b9150826002028217905092915050565b6200031e82620000af565b67ffffffffffffffff8111156200033a5762000339620000b9565b5b62000346825462000113565b620003538282856200027c565b5f60209050601f83116001811462000389575f841562000374578287015190505b620003808582620002f6565b865550620003ef565b601f198416620003998662000147565b5f5b82811015620003c2578489015182556001820191506020850194506020810190506200039b565b86831015620003e25784890151620003de601f891682620002d8565b8355505b6001600288020188555050505b505050505050565b611e4f80620004055f395ff3fe608060405234801561000f575f80fd5b50600436106100e8575f3560e01c80636352211e1161008a578063a22cb46511610064578063a22cb46514610258578063b88d4fde14610274578063c87b56dd14610290578063e985e9c5146102c0576100e8565b80636352211e146101da57806370a082311461020a57806395d89b411461023a576100e8565b8063081812fc116100c6578063081812fc14610156578063095ea7b31461018657806323b872dd146101a257806342842e0e146101be576100e8565b806301173a74146100ec57806301ffc9a71461010857806306fdde0314610138575b5f80fd5b61010660048036038101906101019190611609565b6102f0565b005b610122600480360381019061011d9190611689565b61035b565b60405161012f91906116ce565b60405180910390f35b61014061043c565b60405161014d9190611771565b60405180910390f35b610170600480360381019061016b91906117c4565b6104cb565b60405161017d91906117fe565b60405180910390f35b6101a0600480360381019061019b9190611817565b6104e6565b005b6101bc60048036038101906101b79190611855565b6104fc565b005b6101d860048036038101906101d39190611855565b6105fb565b005b6101f460048036038101906101ef91906117c4565b61061a565b60405161020191906117fe565b60405180910390f35b610224600480360381019061021f9190611609565b61062b565b60405161023191906118b4565b60405180910390f35b6102426106e1565b60405161024f9190611771565b60405180910390f35b610272600480360381019061026d91906118f7565b610771565b005b61028e60048036038101906102899190611a61565b610787565b005b6102aa60048036038101906102a591906117c4565b6107a4565b6040516102b79190611771565b60405180910390f35b6102da60048036038101906102d59190611ae1565b61080a565b6040516102e791906116ce565b60405180910390f35b601960065410610335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032c90611b69565b60405180910390fd5b61034181600654610898565b60065f81548092919061035390611bb4565b919050555050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061043557506104348261098b565b5b9050919050565b60605f805461044a90611c28565b80601f016020809104026020016040519081016040528092919081815260200182805461047690611c28565b80156104c15780601f10610498576101008083540402835291602001916104c1565b820191905f5260205f20905b8154815290600101906020018083116104a457829003601f168201915b5050505050905090565b5f6104d5826109f4565b506104df82610a7a565b9050919050565b6104f882826104f3610ab3565b610aba565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361056c575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161056391906117fe565b60405180910390fd5b5f61057f838361057a610ab3565b610acc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105f5578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105ec93929190611c58565b60405180910390fd5b50505050565b61061583838360405180602001604052805f815250610787565b505050565b5f610624826109f4565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361069c575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161069391906117fe565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060600180546106f090611c28565b80601f016020809104026020016040519081016040528092919081815260200182805461071c90611c28565b80156107675780601f1061073e57610100808354040283529160200191610767565b820191905f5260205f20905b81548152906001019060200180831161074a57829003601f168201915b5050505050905090565b61078361077c610ab3565b8383610cd7565b5050565b6107928484846104fc565b61079e84848484610e40565b50505050565b60606107af826109f4565b505f6107b9610ff2565b90505f8151116107d75760405180602001604052805f815250610802565b806107e184611008565b6040516020016107f2929190611cc7565b6040516020818303038152906040525b915050919050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610908575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016108ff91906117fe565b60405180910390fd5b5f61091483835f610acc565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610986575f6040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161097d91906117fe565b60405180910390fd5b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f806109ff836110d2565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a7157826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610a6891906118b4565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b610ac7838383600161110b565b505050565b5f80610ad7846110d2565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610b1857610b178184866112ca565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ba357610b575f855f8061110b565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610c2257600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d4757816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610d3e91906117fe565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e3391906116ce565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115610fec578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610e83610ab3565b8685856040518563ffffffff1660e01b8152600401610ea59493929190611d3c565b6020604051808303815f875af1925050508015610ee057506040513d601f19601f82011682018060405250810190610edd9190611d9a565b60015b610f61573d805f8114610f0e576040519150601f19603f3d011682016040523d82523d5f602084013e610f13565b606091505b505f815103610f5957836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f5091906117fe565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610fea57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610fe191906117fe565b60405180910390fd5b505b50505050565b606060405180602001604052805f815250905090565b60605f60016110168461138d565b0190505f8167ffffffffffffffff8111156110345761103361193d565b5b6040519080825280601f01601f1916602001820160405280156110665781602001600182028036833780820191505090505b5090505f82602001820190505b6001156110c7578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816110bc576110bb611dc5565b5b0494505f8503611073575b819350505050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061114357505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611275575f611152846109f4565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156111bc57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156111cf57506111cd818461080a565b155b1561121157826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161120891906117fe565b60405180910390fd5b811561127357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6112d58383836114de565b611388575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361134957806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161134091906118b4565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161137f929190611df2565b60405180910390fd5b505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106113e9577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816113df576113de611dc5565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611426576d04ee2d6d415b85acef8100000000838161141c5761141b611dc5565b5b0492506020810190505b662386f26fc10000831061145557662386f26fc10000838161144b5761144a611dc5565b5b0492506010810190505b6305f5e100831061147e576305f5e100838161147457611473611dc5565b5b0492506008810190505b61271083106114a357612710838161149957611498611dc5565b5b0492506004810190505b606483106114c657606483816114bc576114bb611dc5565b5b0492506002810190505b600a83106114d5576001810190505b80915050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561159557508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806115565750611555848461080a565b5b8061159457508273ffffffffffffffffffffffffffffffffffffffff1661157c83610a7a565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115d8826115af565b9050919050565b6115e8816115ce565b81146115f2575f80fd5b50565b5f81359050611603816115df565b92915050565b5f6020828403121561161e5761161d6115a7565b5b5f61162b848285016115f5565b91505092915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61166881611634565b8114611672575f80fd5b50565b5f813590506116838161165f565b92915050565b5f6020828403121561169e5761169d6115a7565b5b5f6116ab84828501611675565b91505092915050565b5f8115159050919050565b6116c8816116b4565b82525050565b5f6020820190506116e15f8301846116bf565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561171e578082015181840152602081019050611703565b5f8484015250505050565b5f601f19601f8301169050919050565b5f611743826116e7565b61174d81856116f1565b935061175d818560208601611701565b61176681611729565b840191505092915050565b5f6020820190508181035f8301526117898184611739565b905092915050565b5f819050919050565b6117a381611791565b81146117ad575f80fd5b50565b5f813590506117be8161179a565b92915050565b5f602082840312156117d9576117d86115a7565b5b5f6117e6848285016117b0565b91505092915050565b6117f8816115ce565b82525050565b5f6020820190506118115f8301846117ef565b92915050565b5f806040838503121561182d5761182c6115a7565b5b5f61183a858286016115f5565b925050602061184b858286016117b0565b9150509250929050565b5f805f6060848603121561186c5761186b6115a7565b5b5f611879868287016115f5565b935050602061188a868287016115f5565b925050604061189b868287016117b0565b9150509250925092565b6118ae81611791565b82525050565b5f6020820190506118c75f8301846118a5565b92915050565b6118d6816116b4565b81146118e0575f80fd5b50565b5f813590506118f1816118cd565b92915050565b5f806040838503121561190d5761190c6115a7565b5b5f61191a858286016115f5565b925050602061192b858286016118e3565b9150509250929050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61197382611729565b810181811067ffffffffffffffff821117156119925761199161193d565b5b80604052505050565b5f6119a461159e565b90506119b0828261196a565b919050565b5f67ffffffffffffffff8211156119cf576119ce61193d565b5b6119d882611729565b9050602081019050919050565b828183375f83830152505050565b5f611a05611a00846119b5565b61199b565b905082815260208101848484011115611a2157611a20611939565b5b611a2c8482856119e5565b509392505050565b5f82601f830112611a4857611a47611935565b5b8135611a588482602086016119f3565b91505092915050565b5f805f8060808587031215611a7957611a786115a7565b5b5f611a86878288016115f5565b9450506020611a97878288016115f5565b9350506040611aa8878288016117b0565b925050606085013567ffffffffffffffff811115611ac957611ac86115ab565b5b611ad587828801611a34565b91505092959194509250565b5f8060408385031215611af757611af66115a7565b5b5f611b04858286016115f5565b9250506020611b15858286016115f5565b9150509250929050565b7f4d617820737570706c79207265616368656400000000000000000000000000005f82015250565b5f611b536012836116f1565b9150611b5e82611b1f565b602082019050919050565b5f6020820190508181035f830152611b8081611b47565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611bbe82611791565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611bf057611bef611b87565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611c3f57607f821691505b602082108103611c5257611c51611bfb565b5b50919050565b5f606082019050611c6b5f8301866117ef565b611c7860208301856118a5565b611c8560408301846117ef565b949350505050565b5f81905092915050565b5f611ca1826116e7565b611cab8185611c8d565b9350611cbb818560208601611701565b80840191505092915050565b5f611cd28285611c97565b9150611cde8284611c97565b91508190509392505050565b5f81519050919050565b5f82825260208201905092915050565b5f611d0e82611cea565b611d188185611cf4565b9350611d28818560208601611701565b611d3181611729565b840191505092915050565b5f608082019050611d4f5f8301876117ef565b611d5c60208301866117ef565b611d6960408301856118a5565b8181036060830152611d7b8184611d04565b905095945050505050565b5f81519050611d948161165f565b92915050565b5f60208284031215611daf57611dae6115a7565b5b5f611dbc84828501611d86565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050611e055f8301856117ef565b611e1260208301846118a5565b939250505056fea26469706673582212200de9e04595f1ce0e905f8ece07518b7f306e2e3ae6c8d56be49bd58be2303d4864736f6c63430008170033;

    // Create the contract object
    const contract = new web3.eth.Contract(contractABI);

    // Create the transaction for contract deployment
    const deployTransaction = contract.deploy({
        data: contractBytecode,
    });

    // Get the accounts
    const accounts = await web3.eth.getAccounts();

    // Send the transaction
    const receipt = await deployTransaction.send({
        from: accounts[0],
        gas: 3000000,
    });

    console.log(`Contract deployed at address: ${receipt.options.address}`);
}

window.addEventListener('load', async () => {
    console.log('Starting contract creation...');
    
    // Modern dapp browsers...
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            createToken(web3);
        } catch (error) {
            // User denied account access...
            console.error("User denied account access")
        }
    }


    // Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        createToken(web3, initialSupply, tokenName, tokenSymbol);
    }
    // Fallback to localhost; use dev console port by default...
    else {
        console.log('No web3? You should consider trying MetaMask!');
    }
});