// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 private _nextTokenId;
    constructor() ERC721("MyNFT", "MNFT") {}
    function mint() external {
        _safeMint(msg.sender, _nextTokenId++);
    }
}