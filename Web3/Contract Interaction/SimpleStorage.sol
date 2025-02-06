// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;

    // Değeri ayarla
    function setValue(uint256 _value) public {
        storedValue = _value;
    }

    // Değeri al
    function getValue() public view returns (uint256) {
        return storedValue;
    }
}
