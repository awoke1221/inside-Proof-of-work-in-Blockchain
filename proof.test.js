// for testing the proof of work

const Blockchain = require("./proof")
const block1 = new Blockchain(1,Date.now(),"vgdd367","awoke")
block1.proofOfWork()
