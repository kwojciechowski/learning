require('truffle-test-utils').init();

const ApexToken = artifacts.require('ApexToken');
const OrderName = 'AntMiner';

contract('ApexToken', function (accounts) {

  it("should get past Transfer events", async function () {

    const senderAddress = web3.eth.accounts[0];
    const receiverAddress1 = web3.eth.accounts[1];
    const receiverAddress2 = web3.eth.accounts[2];
    const receiverAddress3 = web3.eth.accounts[3];
    const receiverAddress4 = web3.eth.accounts[4];
    const receiverAddress5 = web3.eth.accounts[5];

    const contract = await ApexToken.deployed();

    await contract.transfer(receiverAddress1, 1);
    await contract.transfer(receiverAddress2, 1);
    await contract.transfer(receiverAddress3, 1);
    await contract.transfer(receiverAddress4, 1);
    await contract.transfer(receiverAddress5, 1);

    await contract.transfer(receiverAddress3, 2);
    await contract.transfer(receiverAddress3, 2);
    await contract.transfer(receiverAddress3, 2);
    await contract.transfer(receiverAddress3, 2);

    contract.Transfer(
      { to: receiverAddress3 },
      { fromBlock: 0, toBlock: 'latest' })
      .get((error, eventResult) => {
        console.log(eventResult);

        assert.equal(eventResult.length, 5);
      });

  });

  it('should watch Transfer events', async function () {

    const senderAddress = web3.eth.accounts[0];
    const receiverAddress = web3.eth.accounts[1];
    const contract = await ApexToken.deployed();

    var isTransferedEventFired = false;

    // watch for Transfer events
    contract.Transfer(
      { to: receiverAddress },
      { fromBlock: 0, toBlock: 'latest' })
      .watch(function (error, response) {
        console.log(response);
        isTransferedEventFired = true;
      });

    // Act
    var transferResult = await contract.transfer(receiverAddress, 1);

    // Assert
    assert.isTrue(isTransferedEventFired);
    assert.web3Event(transferResult, {
      event: 'Transfer',
      args: {
        "from": senderAddress,
        "to": receiverAddress,
        "value": 1
      }
    }, 'Failed to transfer funds');

  });
});