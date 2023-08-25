const { SHA256 } = require("crypto-js")

// proof of work code
class Blockchain{
    constructor(index, timeStamp, PreviousHash, Data){
        this.index = index
        this.timeStamp = timeStamp
        this.PreviousHash = PreviousHash
        this.Data = Data
        this.nonce = 0
    }

    hashBlock(){
        return SHA256(this.index+this.timeStamp+this.PreviousHash+this.Data+this.nonce).toString()
    }

    proofOfWork(){
        let hash = this.hashBlock()
        while (hash.substring(0,4) !== "0000") {
            this.nonce +=1
            hash = this.hashBlock()
            console.log("trial hash: ", hash)
            
        }
        console.log (this.nonce)
        console.log("Proof hash: ", hash)
    }
}

module.exports = Blockchain