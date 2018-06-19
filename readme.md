This repository demonstrates how to consume etherum's event stream.

For more details, please review [/MyToken/test/apex_token.js]( https://github.com/kwojciechowski/learning/blob/master/MyToken/test/apex_token.js) file.

##### In order to read past Transfer events from the eth blockchain use the snippet below:
    const contract = await ApexToken.deployed();
    contract.Transfer(
      { to: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88' },       //  here you can specify the event field filter
      { fromBlock: 0, toBlock: 'latest' })
      .get((error, eventResult) => {
        // put your logic here
      });

    });
    
##### In order to listen for incoming Transfer events  use the snippet below:
 
    const contract = await ApexToken.deployed();
    contract.Transfer(
      { to: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88' },            //  here you can specify the event field filter
      { fromBlock: 0, toBlock: 'latest' })
      .watch(function (error, response) {
        // put your logic here
      });
      
 
##### Reference links:
- [https://web3js.readthedocs.io/en/latest/](https://web3js.readthedocs.io/en/latest/)
- [https://stackoverflow.com/questions/36627733/test-ethereum-event-logs-with-truffle](https://stackoverflow.com/questions/36627733/test-ethereum-event-logs-with-truffle)
- [https://ethereum.stackexchange.com/questions/39958/how-can-i-debug-a-truffle-js-unit-test-with-vscode](https://ethereum.stackexchange.com/questions/39958/how-can-i-debug-a-truffle-js-unit-test-with-vscode)
- [https://www.packtpub.com/application-development/solidity-programming-essentials](https://www.packtpub.com/application-development/solidity-programming-essentials)
- [https://www.packtpub.com/big-data-and-business-intelligence/ethereum-smart-contract-development](https://www.packtpub.com/big-data-and-business-intelligence/ethereum-smart-contract-development)
      
      
     
