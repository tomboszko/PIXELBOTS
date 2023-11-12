// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Versioning problem code doesn;t work
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    uint256 private _tokenIdCounter;
    uint256 private constant MAX_SUPPLY = 25;

    constructor() ERC721("KELLER", "K6") {
        _tokenIdCounter = 0;
    }

    function mintToken(address to) public {
        require(_tokenIdCounter < MAX_SUPPLY, "Max supply reached");
        _mint(to, _tokenIdCounter);
        _tokenIdCounter++;
    }
}