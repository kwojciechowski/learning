pragma solidity ^0.4.23;


import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract ApexToken is StandardToken {
  
    string public name = "ApexToken";
    string public symbol = "APX";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;

    event Ordered(string _name);

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

    function placeOrder(string _name) public 
    //returns (bool) 
    {
        emit Ordered(_name);
      //  return true;
    }

    function getMessage() public pure returns(string) {
        return "kamil123";
    }
}

//  event Transfer(address indexed from, address indexed to, uint256 value);