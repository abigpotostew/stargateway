/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ManagerInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "batchRelease(address[])": FunctionFragment;
    "botDAO()": FunctionFragment;
    "cancelOwnershipTransfer()": FunctionFragment;
    "contractVersion()": FunctionFragment;
    "createIntvStream(address,uint256,uint256,uint256,uint256,uint256,address,address)": FunctionFragment;
    "createMSStream(address,uint256[],uint64[],uint96,address,address)": FunctionFragment;
    "getIntvStreamAddress(address,uint256,uint256,uint256,address,address)": FunctionFragment;
    "getMSSStreamAddress(address,uint64[],address,address)": FunctionFragment;
    "getStreamVersion(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "intvImpl()": FunctionFragment;
    "msImpl()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "safeTransferOwnership(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "batchRelease"
      | "botDAO"
      | "cancelOwnershipTransfer"
      | "contractVersion"
      | "createIntvStream"
      | "createMSStream"
      | "getIntvStreamAddress"
      | "getMSSStreamAddress"
      | "getStreamVersion"
      | "initialize"
      | "intvImpl"
      | "msImpl"
      | "owner"
      | "pendingOwner"
      | "proxiableUUID"
      | "safeTransferOwnership"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchRelease",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: "botDAO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createIntvStream",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createMSStream",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntvStreamAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMSSStreamAddress",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getStreamVersion",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "intvImpl", values?: undefined): string;
  encodeFunctionData(functionFragment: "msImpl", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "botDAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createIntvStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMSStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntvStreamAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMSSStreamAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStreamVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "intvImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint256)": EventFragment;
    "OwnerCanceled(address,address)": EventFragment;
    "OwnerPending(address,address)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "StreamCreated(address,string)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerPending"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StreamCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnerCanceledEventObject {
  owner: string;
  canceledOwner: string;
}
export type OwnerCanceledEvent = TypedEvent<
  [string, string],
  OwnerCanceledEventObject
>;

export type OwnerCanceledEventFilter = TypedEventFilter<OwnerCanceledEvent>;

export interface OwnerPendingEventObject {
  owner: string;
  pendingOwner: string;
}
export type OwnerPendingEvent = TypedEvent<
  [string, string],
  OwnerPendingEventObject
>;

export type OwnerPendingEventFilter = TypedEventFilter<OwnerPendingEvent>;

export interface OwnerUpdatedEventObject {
  prevOwner: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface StreamCreatedEventObject {
  streamId: string;
  streamType: string;
}
export type StreamCreatedEvent = TypedEvent<
  [string, string],
  StreamCreatedEventObject
>;

export type StreamCreatedEventFilter = TypedEventFilter<StreamCreatedEvent>;

export interface UpgradedEventObject {
  impl: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Manager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchRelease(
      streams: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    botDAO(overrides?: CallOverrides): Promise<[string]>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<[string]>;

    createIntvStream(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _owed: PromiseOrValue<BigNumberish>,
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createMSStream(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getIntvStreamAddress(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMSSStreamAddress(
      _owner: PromiseOrValue<string>,
      _msDates: PromiseOrValue<BigNumberish>[],
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStreamVersion(
      streamImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    intvImpl(overrides?: CallOverrides): Promise<[string]>;

    msImpl(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchRelease(
    streams: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  botDAO(overrides?: CallOverrides): Promise<string>;

  cancelOwnershipTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractVersion(overrides?: CallOverrides): Promise<string>;

  createIntvStream(
    _owner: PromiseOrValue<string>,
    _startDate: PromiseOrValue<BigNumberish>,
    _endDate: PromiseOrValue<BigNumberish>,
    _interval: PromiseOrValue<BigNumberish>,
    _owed: PromiseOrValue<BigNumberish>,
    _tip: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createMSStream(
    _owner: PromiseOrValue<string>,
    _msPayments: PromiseOrValue<BigNumberish>[],
    _msDates: PromiseOrValue<BigNumberish>[],
    _tip: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getIntvStreamAddress(
    _owner: PromiseOrValue<string>,
    _startDate: PromiseOrValue<BigNumberish>,
    _endDate: PromiseOrValue<BigNumberish>,
    _interval: PromiseOrValue<BigNumberish>,
    _token: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getMSSStreamAddress(
    _owner: PromiseOrValue<string>,
    _msDates: PromiseOrValue<BigNumberish>[],
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getStreamVersion(
    streamImpl: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  intvImpl(overrides?: CallOverrides): Promise<string>;

  msImpl(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  safeTransferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    _newImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    _newImpl: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    batchRelease(
      streams: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    botDAO(overrides?: CallOverrides): Promise<string>;

    cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    contractVersion(overrides?: CallOverrides): Promise<string>;

    createIntvStream(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _owed: PromiseOrValue<BigNumberish>,
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    createMSStream(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getIntvStreamAddress(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getMSSStreamAddress(
      _owner: PromiseOrValue<string>,
      _msDates: PromiseOrValue<BigNumberish>[],
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getStreamVersion(
      streamImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    intvImpl(overrides?: CallOverrides): Promise<string>;

    msImpl(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint256)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnerCanceled(address,address)"(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;
    OwnerCanceled(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;

    "OwnerPending(address,address)"(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;
    OwnerPending(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;

    "OwnerUpdated(address,address)"(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "StreamCreated(address,string)"(
      streamId?: null,
      streamType?: null
    ): StreamCreatedEventFilter;
    StreamCreated(streamId?: null, streamType?: null): StreamCreatedEventFilter;

    "Upgraded(address)"(impl?: null): UpgradedEventFilter;
    Upgraded(impl?: null): UpgradedEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchRelease(
      streams: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    botDAO(overrides?: CallOverrides): Promise<BigNumber>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractVersion(overrides?: CallOverrides): Promise<BigNumber>;

    createIntvStream(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _owed: PromiseOrValue<BigNumberish>,
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createMSStream(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getIntvStreamAddress(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMSSStreamAddress(
      _owner: PromiseOrValue<string>,
      _msDates: PromiseOrValue<BigNumberish>[],
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStreamVersion(
      streamImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    intvImpl(overrides?: CallOverrides): Promise<BigNumber>;

    msImpl(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchRelease(
      streams: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    botDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createIntvStream(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _owed: PromiseOrValue<BigNumberish>,
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createMSStream(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getIntvStreamAddress(
      _owner: PromiseOrValue<string>,
      _startDate: PromiseOrValue<BigNumberish>,
      _endDate: PromiseOrValue<BigNumberish>,
      _interval: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMSSStreamAddress(
      _owner: PromiseOrValue<string>,
      _msDates: PromiseOrValue<BigNumberish>[],
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStreamVersion(
      streamImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    intvImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    msImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
