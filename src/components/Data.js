import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balance }) => {
  return (
    <div className="text-center">
      <p>
        <strong>Available to Mint: </strong> {maxSupply - totalSupply}
      </p>
      <p>
        <strong>Cost to Mint: </strong> {ethers.utils.formatUnits(cost)} ETH
      </p>
      <p>
        <strong>You Own: </strong>
        {balance}
        {
          //balance
        }
      </p>
    </div>
  )
}

export default Data
