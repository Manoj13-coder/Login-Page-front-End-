pragma solidity ^0.5.1;

contract secureLogin{
    
    function get_Hash(string memory str) public pure returns(bytes32){
        return keccak256(abi.encodePacked(str));
    }
    
}