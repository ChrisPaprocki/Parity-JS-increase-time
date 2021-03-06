'use strict';var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var _require =
require('../../format/input'),inAddress = _require.inAddress,inBlockNumber = _require.inBlockNumber,inData = _require.inData,inFilter = _require.inFilter,inHash = _require.inHash,inHex = _require.inHex,inNumber16 = _require.inNumber16,inOptions = _require.inOptions;var _require2 =
require('../../format/output'),outAddress = _require2.outAddress,outBlock = _require2.outBlock,outLog = _require2.outLog,outNumber = _require2.outNumber,outReceipt = _require2.outReceipt,outSyncing = _require2.outSyncing,outTransaction = _require2.outTransaction;var

Eth = function () {
  function Eth(provider) {_classCallCheck(this, Eth);
    this._provider = provider;
  }_createClass(Eth, [{ key: 'accounts', value: function accounts()

    {
      return this._provider.
      send('eth_accounts').
      then(function (accounts) {return (accounts || []).map(outAddress);});
    } }, { key: 'blockNumber', value: function blockNumber()

    {
      return this._provider.
      send('eth_blockNumber').
      then(outNumber);
    } }, { key: 'call', value: function call(

    options) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._provider.
      send('eth_call', inOptions(options), inBlockNumber(blockNumber));
    } }, { key: 'coinbase', value: function coinbase()

    {
      return this._provider.
      send('eth_coinbase').
      then(outAddress);
    } }, { key: 'compileLLL', value: function compileLLL(

    code) {
      return this._provider.
      send('eth_compileLLL', inData(code));
    } }, { key: 'compileSerpent', value: function compileSerpent(

    code) {
      return this._provider.
      send('eth_compileSerpent', inData(code));
    } }, { key: 'compileSolidity', value: function compileSolidity(

    code) {
      return this._provider.
      send('eth_compileSolidity', inData(code));
    } }, { key: 'estimateGas', value: function estimateGas(

    options) {
      return this._provider.
      send('eth_estimateGas', inOptions(options)).
      then(outNumber);
    } }, { key: 'fetchQueuedTransactions', value: function fetchQueuedTransactions()

    {
      return this._provider.
      send('eth_fetchQueuedTransactions');
    } }, { key: 'flush', value: function flush()

    {
      return this._provider.
      send('eth_flush');
    } }, { key: 'gasPrice', value: function gasPrice()

    {
      return this._provider.
      send('eth_gasPrice').
      then(outNumber);
    } }, { key: 'getBalance', value: function getBalance(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._provider.
      send('eth_getBalance', inAddress(address), inBlockNumber(blockNumber)).
      then(outNumber);
    } }, { key: 'getBlockByHash', value: function getBlockByHash(

    hash) {var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._provider.
      send('eth_getBlockByHash', inHex(hash), full).
      then(outBlock);
    } }, { key: 'getBlockByNumber', value: function getBlockByNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._provider.
      send('eth_getBlockByNumber', inBlockNumber(blockNumber), full).
      then(outBlock);
    } }, { key: 'getBlockTransactionCountByHash', value: function getBlockTransactionCountByHash(

    hash) {
      return this._provider.
      send('eth_getBlockTransactionCountByHash', inHex(hash)).
      then(outNumber);
    } }, { key: 'getBlockTransactionCountByNumber', value: function getBlockTransactionCountByNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
      return this._provider.
      send('eth_getBlockTransactionCountByNumber', inBlockNumber(blockNumber)).
      then(outNumber);
    } }, { key: 'getCode', value: function getCode(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._provider.
      send('eth_getCode', inAddress(address), inBlockNumber(blockNumber));
    } }, { key: 'getCompilers', value: function getCompilers()

    {
      return this._provider.
      send('eth_getCompilers');
    } }, { key: 'getFilterChanges', value: function getFilterChanges(

    filterId) {
      return this._provider.
      send('eth_getFilterChanges', inNumber16(filterId)).
      then(function (logs) {return logs.map(outLog);});
    } }, { key: 'getFilterChangesEx', value: function getFilterChangesEx(

    filterId) {
      return this._provider.
      send('eth_getFilterChangesEx', inNumber16(filterId));
    } }, { key: 'getFilterLogs', value: function getFilterLogs(

    filterId) {
      return this._provider.
      send('eth_getFilterLogs', inNumber16(filterId)).
      then(function (logs) {return logs.map(outLog);});
    } }, { key: 'getFilterLogsEx', value: function getFilterLogsEx(

    filterId) {
      return this._provider.
      send('eth_getFilterLogsEx', inNumber16(filterId));
    } }, { key: 'getLogs', value: function getLogs(

    options) {
      return this._provider.
      send('eth_getLogs', inFilter(options)).
      then(function (logs) {return logs.map(outLog);});
    } }, { key: 'getLogsEx', value: function getLogsEx(

    options) {
      return this._provider.
      send('eth_getLogsEx', inFilter(options));
    } }, { key: 'getStorageAt', value: function getStorageAt(

    address) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var blockNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'latest';
      return this._provider.
      send('eth_getStorageAt', inAddress(address), inNumber16(index), inBlockNumber(blockNumber));
    } }, { key: 'getTransactionByBlockHashAndIndex', value: function getTransactionByBlockHashAndIndex(

    hash) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._provider.
      send('eth_getTransactionByBlockHashAndIndex', inHex(hash), inNumber16(index)).
      then(outTransaction);
    } }, { key: 'getTransactionByBlockNumberAndIndex', value: function getTransactionByBlockNumberAndIndex()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._provider.
      send('eth_getTransactionByBlockNumberAndIndex', inBlockNumber(blockNumber), inNumber16(index)).
      then(outTransaction);
    } }, { key: 'getTransactionByHash', value: function getTransactionByHash(

    hash) {
      return this._provider.
      send('eth_getTransactionByHash', inHex(hash)).
      then(outTransaction);
    } }, { key: 'getTransactionCount', value: function getTransactionCount(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._provider.
      send('eth_getTransactionCount', inAddress(address), inBlockNumber(blockNumber)).
      then(outNumber);
    } }, { key: 'getTransactionReceipt', value: function getTransactionReceipt(

    txhash) {
      return this._provider.
      send('eth_getTransactionReceipt', inHex(txhash)).
      then(outReceipt);
    } }, { key: 'getUncleByBlockHashAndIndex', value: function getUncleByBlockHashAndIndex(

    hash) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._provider.
      send('eth_getUncleByBlockHashAndIndex', inHex(hash), inNumber16(index));
    } }, { key: 'getUncleByBlockNumberAndIndex', value: function getUncleByBlockNumberAndIndex()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._provider.
      send('eth_getUncleByBlockNumberAndIndex', inBlockNumber(blockNumber), inNumber16(index));
    } }, { key: 'getUncleCountByBlockHash', value: function getUncleCountByBlockHash(

    hash) {
      return this._provider.
      send('eth_getUncleCountByBlockHash', inHex(hash)).
      then(outNumber);
    } }, { key: 'getUncleCountByBlockNumber', value: function getUncleCountByBlockNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
      return this._provider.
      send('eth_getUncleCountByBlockNumber', inBlockNumber(blockNumber)).
      then(outNumber);
    } }, { key: 'getWork', value: function getWork()

    {
      return this._provider.
      send('eth_getWork');
    } }, { key: 'hashrate', value: function hashrate()

    {
      return this._provider.
      send('eth_hashrate').
      then(outNumber);
    } }, { key: 'inspectTransaction', value: function inspectTransaction()

    {
      return this._provider.
      send('eth_inspectTransaction');
    } }, { key: 'mining', value: function mining()

    {
      return this._provider.
      send('eth_mining');
    } }, { key: 'newBlockFilter', value: function newBlockFilter()

    {
      return this._provider.
      send('eth_newBlockFilter');
    } }, { key: 'newFilter', value: function newFilter(

    options) {
      return this._provider.
      send('eth_newFilter', inFilter(options));
    } }, { key: 'newFilterEx', value: function newFilterEx(

    options) {
      return this._provider.
      send('eth_newFilterEx', inFilter(options));
    } }, { key: 'newPendingTransactionFilter', value: function newPendingTransactionFilter()

    {
      return this._provider.
      send('eth_newPendingTransactionFilter');
    } }, { key: 'notePassword', value: function notePassword()

    {
      return this._provider.
      send('eth_notePassword');
    } }, { key: 'pendingTransactions', value: function pendingTransactions()

    {
      return this._provider.
      send('eth_pendingTransactions');
    } }, { key: 'protocolVersion', value: function protocolVersion()

    {
      return this._provider.
      send('eth_protocolVersion');
    } }, { key: 'register', value: function register()

    {
      return this._provider.
      send('eth_register');
    } }, { key: 'sendRawTransaction', value: function sendRawTransaction(

    data) {
      return this._provider.
      send('eth_sendRawTransaction', inData(data));
    } }, { key: 'sendTransaction', value: function sendTransaction(

    options) {
      return this._provider.
      send('eth_sendTransaction', inOptions(options));
    } }, { key: 'sign', value: function sign(

    address, hash) {
      return this._provider.
      send('eth_sign', inAddress(address), inHash(hash));
    } }, { key: 'signTransaction', value: function signTransaction(

    options) {
      return this._provider.
      send('eth_signTransaction', inOptions(options));
    } }, { key: 'submitHashrate', value: function submitHashrate(

    hashrate, clientId) {
      return this._provider.
      send('eth_submitHashrate', inNumber16(hashrate), clientId);
    } }, { key: 'submitWork', value: function submitWork(

    nonce, powHash, mixDigest) {
      return this._provider.
      send('eth_submitWork', inNumber16(nonce), powHash, mixDigest);
    } }, { key: 'syncing', value: function syncing()

    {
      return this._provider.
      send('eth_syncing').
      then(outSyncing);
    } }, { key: 'uninstallFilter', value: function uninstallFilter(

    filterId) {
      return this._provider.
      send('eth_uninstallFilter', inHex(filterId));
    } }, { key: 'unregister', value: function unregister()

    {
      return this._provider.
      send('eth_unregister');
    } }, { key: 'increaseTime', value: function increaseTime(

    increase) {
      return this._provider.
      send('evm_increaseTime', "0x" + increase.toString(16));
    } }]);return Eth;}();

module.exports = Eth;