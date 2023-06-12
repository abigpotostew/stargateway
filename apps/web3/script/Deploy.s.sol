// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.17;

import "forge-std/Script.sol";

import { ERC1967Proxy } from "../src/proxy/ERC1967Proxy.sol";
import { Manager } from "../src/manager/Manager.sol";
import { Milestones } from "../src/milestones/Milestones.sol";
import { IMilestones } from "../src/milestones/interfaces/IMilestones.sol";
import { Intervals } from "../src/intervals/Intervals.sol";

contract DeployContracts is Script {
    function run() public {
        uint256 chainID = vm.envUint("CHAIN_ID");
        uint256 key = vm.envUint("PRIVATE_KEY");
        address owner = vm.envAddress("FACTORY_OWNER");
        address bot = vm.envAddress("GOERLI_SAFE");

        address deployerAddress = vm.addr(key);

        console2.log("Chain ID:");
        console2.log(chainID);

        console2.log("Deployer:");
        console2.log(deployerAddress);

        console2.log("Owner:");
        console2.log(owner);

        vm.startBroadcast(deployerAddress);

        address managerImpl0 = address(new Manager(address(0), address(0), address(0)));
        Manager manager = Manager(address(new ERC1967Proxy(managerImpl0, abi.encodeWithSignature("initialize(address)", owner))));
        address mileImpl = address(new Milestones());
        address intImpl = address(new Intervals());
        address managerImpl = address(new Manager(mileImpl, intImpl, bot));

        manager.upgradeTo(managerImpl);

        vm.stopBroadcast();

        console2.log("Milestone impl");
        console2.logAddress(mileImpl);
        console2.log("Interval impl");
        console2.logAddress(intImpl);
        console2.log("Manager Factory impl");
        console2.logAddress(managerImpl0);
        console2.log("Manager Factory impl 1");
        console2.logAddress(managerImpl);
        console2.log("Manager Factory proxy");
        console2.logAddress(address(manager));
        console2.log("");
    }
}
