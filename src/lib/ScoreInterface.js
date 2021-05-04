const distributionAddress = "0x3fEf090ED8C8b1Ad29C9F745464dFeCE47053345"
const distributionAbi = [{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"cycle","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"claimAmounts","type":"uint256[]"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"cycle","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"root","type":"bytes32"},{"indexed":false,"internalType":"string","name":"contentHash","type":"string"}],"name":"RootUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"inputs":[],"name":"BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"cumulativeAmounts","type":"uint256[]"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[{"internalType":"uint256[]","name":"claimAmounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"contract IERC20Ext","name":"","type":"address"}],"name":"claimedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"cumulativeAmounts","type":"uint256[]"}],"name":"encodeClaim","outputs":[{"internalType":"bytes","name":"encodedData","type":"bytes"},{"internalType":"bytes32","name":"encodedDataHash","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"}],"name":"getClaimedAmounts","outputs":[{"internalType":"uint256[]","name":"userClaimedAmounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMerkleData","outputs":[{"components":[{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"string","name":"contentHash","type":"string"}],"internalType":"struct RewardsDistributor.MerkleData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"cumulativeAmounts","type":"uint256[]"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"isValidClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"cycle","type":"uint256"},{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"string","name":"contentHash","type":"string"}],"name":"proposeRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IPool","name":"treasuryPool","type":"address"},{"internalType":"contract IERC20Ext[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"pullFundsFromTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const bproAddress = "0xbbBBBBB5AA847A2003fbC6b5C16DF0Bd1E725f61"
const bproAbi = [{"inputs":[{"internalType":"address","name":"minter_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"newMinter","type":"address"}],"name":"MinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter_","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const compoundDebtAddress = "0x6a5fda4d2869d8cbf9d722d2fd83ce6cd040086e"
const compoundDebtAbi = [{"constant":true,"inputs":[{"internalType":"address[]","name":"ctokens","type":"address[]"},{"internalType":"address","name":"registry","type":"address"}],"name":"getTvlInfo","outputs":[{"internalType":"uint256[]","name":"ctokenBalance","type":"uint256[]"},{"internalType":"uint256[]","name":"ctokenBorrow","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]
export const getBproDistribution = (web3) => {
  const { Contract } = web3.eth
  const distContract = new Contract(distributionAbi, distributionAddress)
  return distContract.methods.getMerkleData().call({gasLimit:10e6})
}

export const getClaimedAmount = (web3, userAddress) => {
  const { Contract } = web3.eth
  const distContract = new Contract(distributionAbi, distributionAddress)
  return distContract.methods.claimedAmounts(userAddress, bproAddress).call({gasLimit:10e6})
}

export const getBproBalance = (web3, userAddress) => {
  const { Contract } = web3.eth
  const bproContract = new Contract(bproAbi, bproAddress)
  return bproContract.methods.balanceOf(userAddress).call({gasLimit:10e6})
}

export const claimBpro = (web3, userAddress, cycle, index, amount, merkleProof) => {
  const { Contract } = web3.eth
  const distContract = new Contract(distributionAbi, distributionAddress)
  return distContract.methods.claim(cycle, index,userAddress, [bproAddress], [amount], merkleProof)
}

export const getCompounndTotalDebt = (web3, tokenAddress,) => {
  const { Contract } = web3.eth
  const registryAddress = "0xbf698df5591caf546a7e087f5806e216afed666a"
  const compoundDebt = new Contract(compoundDebtAbi, compoundDebtAddress)

  return compoundDebt.methods.getTvlInfo(tokenAddress, registryAddress).call({gasLimit:1000e6})
}