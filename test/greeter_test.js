const GreetContract = artifacts.require('Greeter')

contract('Greeter', () => {
  it('has been deployed successfully', async () => {
    const greeter = await GreetContract.deployed()
    assert(greeter, 'contract was not deployed')
  })

  describe('greet()', () => {
    it('returns Hello, World', async () => {
      const greeter = await GreeterContract.deployed();
      
    })
  })
})
