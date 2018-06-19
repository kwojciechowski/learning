This repository demonstrates how to consume etherum's event stream.
For more details, please review [/MyToken/test/apex_token.js]( https://github.com/kwojciechowski/learning/blob/master/MyToken/test/apex_token.js) file.

##### In order to read past events from the eth blockchain use 

    contract.Transfer(
      { to: receiverAddress3 },
      { fromBlock: 0, toBlock: 'latest' })
      .get((error, eventResult) => {
        console.log(eventResult);

        assert.equal(eventResult.length, 5);
      });

    });
    
##### In order to listen for incoming events use:
 
    // watch for Transfer events
    contract.Transfer(
      { to: receiverAddress },
      { fromBlock: 0, toBlock: 'latest' })
      .watch(function (error, response) {
        console.log(response);
        isTransferedEventFired = true;
      });
      
      
      
      
     
