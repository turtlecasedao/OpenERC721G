[![NPM][npm-shield]][npm-url]
[![CI][ci-shield]][ci-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<!-- OTHER BADGES -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Docs][docs-shield]][docs-url] -->
<!-- [![Coverage][coverage-shield]][coverage-url] -->

<!-- ANNOUNCEMENT -->

> **📢 To depoly the contracts on mainnet, please contact our technical support that add your major contracts' addresses to the trusted list**

_The major contract of ERC721G is based on Azuki's [ERC721A](https://github.com/chiru-labs/ERC721A), thanks a lot._

## Background

Since the circulation of NFT, there have been many incidents of theft. These incidents are mainly caused by private key theft and phishing attacks, and in the existing cases, it is difficult to recover once stolen. Most recovered cases also require a second offer from the stolen person, which is very costly. We propose a universal technical solution to be adapted to any ERC721 standard smart contract to help NFT holders guard their property security jointly.

<!-- ABOUT THE PROJECT -->

## About The Project
### ERC721G

ERC721G is the world's first NFT anti-theft smart contract with three main features: "upgradeable," "scalable," and "secure." Dedicated to NFT asset protection, make Web3 a better place, and more people believe in it.

### Big Brother

An offically implementation of **TokenPatronus**, read more about [whitepaper]().

To cooperate with the ERC721G anti-theft contract to play an effective role, we have launched a set of risk control system: BigBrother. The BigBrother risk control system is an NFT anti-theft protection solution with multi-dimensional analysis and optimistic consensus voting mechanism. It helps NFT holders protect property safety through pre-protection, mid-blocking, and post-compensation. The system has three main parts: operation and maintenance strategy management, intelligent risk analysis, and real-time monitoring of changes.

<!-- Docs -->

## Docs

Coming soon

<!-- Upgradeable Version -->

## Upgradeable Version

Coming soon

<!-- Installation -->

## Installation

```sh

npm install --save-dev erc721g

```

<!-- USAGE EXAMPLES -->

## Usage

Once installed, a basic example on how to inherit the ERC721G in your contract would look like the following. 

```solidity
pragma solidity ^0.8.4;

import "erc721g/contracts/ERC721G.sol";

contract TurtleCaseGang is ERC721G {
    constructor() ERC721A("TurtleCase Gang", "TCG") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
    }
}
```

<!-- ROADMAP -->

## Roadmap

- [ ] Improve general repo and code quality (workflows, comments, etc.)
- [ ] Add features of Reclaim/Judge to ERC721G/BigBrother
- [ ] Add more documentation on benefits of using ERC721G
- [ ] Maintain full test coverage
- [ ] Make decentrialized risk engine(BigBrother) open source

<!-- CONTRIBUTING -->

## Contributing

Because of **ERC721G/BigBrother** is not only a smart contract, but a fully featured solution, contributions to the project will be worked on both ERC721G and BigBrother. 

There is **very welcome** everybody to join this open source community. Any contributions you make are greatly appreciated.

<!-- ROADMAP -->

### Running tests locally

1. `npm install`
2. `npm run test`

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

- zhenyi.eth (owner) - [@soczhenyi](https://twitter.com/soczhenyi)
- 0xSilence (owner) - [@0xsilence](https://twitter.com/0xsilence)
- 2fr0gs (maintainer) - [@richardfrog](https://twitter.com/richardfrog)
- SalutMo (maintainer)

Technical Support: [https://github.com/turtlecasedao/OpenERC721G](https://github.com/turtlecasedao/OpenERC721G)

Project Link: [https://github.com/turtlecasedao/OpenERC721G](https://github.com/turtlecasedao/OpenERC721G)

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[docs-shield]: https://img.shields.io/badge/docs-%F0%9F%93%84-blue?style=for-the-badge
[docs-url]: https://chiru-labs.github.io/ERC721A/
[npm-shield]: https://img.shields.io/npm/v/erc721a.svg?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/erc721a
[ci-shield]: https://img.shields.io/github/workflow/status/chiru-labs/ERC721A/ERC721A%20CI?label=build&style=for-the-badge
[ci-url]: https://github.com/chiru-labs/ERC721A/actions/workflows/run_tests.yml
[contributors-shield]: https://img.shields.io/github/contributors/chiru-labs/ERC721A.svg?style=for-the-badge
[contributors-url]: https://github.com/chiru-labs/ERC721A/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chiru-labs/ERC721A.svg?style=for-the-badge
[forks-url]: https://github.com/chiru-labs/ERC721A/network/members
[stars-shield]: https://img.shields.io/github/stars/chiru-labs/ERC721A.svg?style=for-the-badge
[stars-url]: https://github.com/chiru-labs/ERC721A/stargazers
[issues-shield]: https://img.shields.io/github/issues/chiru-labs/ERC721A.svg?style=for-the-badge
[issues-url]: https://github.com/turtlecasedao/OpenERC721G/issues
[license-shield]: https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge
[license-url]: https://github.com/chiru-labs/ERC721A/blob/main/LICENSE.txt
[coverage-shield]: https://img.shields.io/codecov/c/gh/chiru-labs/ERC721A?style=for-the-badge
[coverage-url]: https://codecov.io/gh/chiru-labs/ERC721A
[product-screenshot]: images/screenshot.png