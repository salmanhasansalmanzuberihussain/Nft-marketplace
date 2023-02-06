const instance = await NftMarket.deployed();

instance.mintToken(
  'https://gateway.pinata.cloud/ipfs/QmNYGjbNNx4FTPSARyDqx1QENrV8ZUh4RgyrcQe38Ega4R?_gl=1*o7wfuy*_ga*MTIyNjExNDc2Ny4xNjc0ODQ1ODcx*_ga_5RMPXG14TE*MTY3NDg0ODA1Ni4yLjEuMTY3NDg1Mzk5Mi41My4wLjA.',
  '500000000000000000',
  { value: '25000000000000000', from: accounts[0] }
);

instance.mintToken(
  'https://gateway.pinata.cloud/ipfs/Qmb12x3yGr9Pfnr8bAkySBwgZUBkhhqbxkFfsZbDCVi37d?_gl=1*7zukir*_ga*MTIyNjExNDc2Ny4xNjc0ODQ1ODcx*_ga_5RMPXG14TE*MTY3NDg0ODA1Ni4yLjEuMTY3NDg1Mzk5Mi41My4wLjA.',
  '300000000000000000',
  { value: '25000000000000000', from: accounts[0] }
);

// const instance = await NftMarket.deployed();

// instance.mintToken("https://gateway.pinata.cloud/ipfs/Qmb4aom5xNRE5CBRHZsxCsYSdcmX8zfHXgM7ovZxLp3CqL","500000000000000000", {value: "25000000000000000",from: accounts[0]})
// instance.mintToken("https://gateway.pinata.cloud/ipfs/QmcqxBeE2XfagzEBYnaCUfHHTRLMiHi6xap6BDFLoNUfTN","300000000000000000", {value: "25000000000000000",from: accounts[0]})
