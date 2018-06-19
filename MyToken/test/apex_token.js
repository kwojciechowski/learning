const ApexToken = artifacts.require('ApexToken');
const OrderName = 'AntMiner';

contract('ApexToken', function (accounts) {

  var isTransferedEventFired = false;
  var isOrderedEventFired = false;

  beforeEach(function() {
    this.isTransferedEventFired = false;
    this. isOrderedEventFired = false;
  });

  it('should emit an event on the order placed', async function () {

    const receiverAddress = web3.eth.accounts[1];
    const contract = await ApexToken.deployed();

    // watch for Transfer events
    contract.Transfer(
      { to: receiverAddress },
      { fromBlock: 0, toBlock: 'latest' })
      .watch(function (error, response) {
        console.log(response);
        this.isTransferedEventFired = true;
      });

    // watch for Ordered events
    contract.Ordered(
      { _name: OrderName },
      { fromBlock: 0, toBlock: 'latest' })
      .watch(function (error, response) {
        //console.log(response);
        this.isOrderedEventFired = true;
        console.warn(this.isOrderedEventFired);
      });

    // Act
    await contract.placeOrder(OrderName);
    await contract.transfer(receiverAddress, 1);
    wait(500);

    // Assert
   // console.warn(this.isOrderedEventFired);
    assert.isTrue(this.isOrderedEventFired);
    // assert.isTrue(this.isTransferedEventFired);

  });
});

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}