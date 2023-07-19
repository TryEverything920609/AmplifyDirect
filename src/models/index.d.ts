import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum UserTypeList {
  ADMIN = "ADMIN",
  OWNER = "OWNER",
  USER = "USER"
}

export enum ServiceStatus {
  DELIVERD = "DELIVERD",
  COMPLETED = "COMPLETED",
  NOANSWER = "NOANSWER",
  RINGING = "RINGING"
}

export enum ServiceType {
  SMS = "SMS",
  VOICEMAIL = "VOICEMAIL",
  CALL = "CALL",
  DEPOSIT = "DEPOSIT"
}



type EagerVoiceMessageList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VoiceMessageList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly VoiceMessage?: string | null;
  readonly untitledfield?: UserTypeList | keyof typeof UserTypeList | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVoiceMessageList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VoiceMessageList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly VoiceMessage?: string | null;
  readonly untitledfield?: UserTypeList | keyof typeof UserTypeList | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VoiceMessageList = LazyLoading extends LazyLoadingDisabled ? EagerVoiceMessageList : LazyVoiceMessageList

export declare const VoiceMessageList: (new (init: ModelInit<VoiceMessageList>) => VoiceMessageList) & {
  copyOf(source: VoiceMessageList, mutator: (draft: MutableModel<VoiceMessageList>) => MutableModel<VoiceMessageList> | void): VoiceMessageList;
}

type EagerWebFormList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebFormList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Privilege?: string | null;
  readonly Email?: string | null;
  readonly User?: string | null;
  readonly Logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebFormList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebFormList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Privilege?: string | null;
  readonly Email?: string | null;
  readonly User?: string | null;
  readonly Logo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WebFormList = LazyLoading extends LazyLoadingDisabled ? EagerWebFormList : LazyWebFormList

export declare const WebFormList: (new (init: ModelInit<WebFormList>) => WebFormList) & {
  copyOf(source: WebFormList, mutator: (draft: MutableModel<WebFormList>) => MutableModel<WebFormList> | void): WebFormList;
}

type EagerUserProfileList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfileList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Avatar?: string | null;
  readonly Role?: UserTypeList | keyof typeof UserTypeList | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfileList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfileList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Avatar?: string | null;
  readonly Role?: UserTypeList | keyof typeof UserTypeList | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfileList = LazyLoading extends LazyLoadingDisabled ? EagerUserProfileList : LazyUserProfileList

export declare const UserProfileList: (new (init: ModelInit<UserProfileList>) => UserProfileList) & {
  copyOf(source: UserProfileList, mutator: (draft: MutableModel<UserProfileList>) => MutableModel<UserProfileList> | void): UserProfileList;
}

type EagerBillingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: string | null;
  readonly Type?: ServiceType | keyof typeof ServiceType | null;
  readonly Duration?: number | null;
  readonly Cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBillingList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BillingList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: string | null;
  readonly Type?: ServiceType | keyof typeof ServiceType | null;
  readonly Duration?: number | null;
  readonly Cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BillingList = LazyLoading extends LazyLoadingDisabled ? EagerBillingList : LazyBillingList

export declare const BillingList: (new (init: ModelInit<BillingList>) => BillingList) & {
  copyOf(source: BillingList, mutator: (draft: MutableModel<BillingList>) => MutableModel<BillingList> | void): BillingList;
}

type EagerCallLogList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CallLogList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly Cost?: number | null;
  readonly Duration?: number | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCallLogList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CallLogList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly Cost?: number | null;
  readonly Duration?: number | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CallLogList = LazyLoading extends LazyLoadingDisabled ? EagerCallLogList : LazyCallLogList

export declare const CallLogList: (new (init: ModelInit<CallLogList>) => CallLogList) & {
  copyOf(source: CallLogList, mutator: (draft: MutableModel<CallLogList>) => MutableModel<CallLogList> | void): CallLogList;
}

type EagerSMSlogList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SMSlogList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly UserName?: string | null;
  readonly Message?: string | null;
  readonly Cost?: number | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySMSlogList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SMSlogList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly UserName?: string | null;
  readonly Message?: string | null;
  readonly Cost?: number | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SMSlogList = LazyLoading extends LazyLoadingDisabled ? EagerSMSlogList : LazySMSlogList

export declare const SMSlogList: (new (init: ModelInit<SMSlogList>) => SMSlogList) & {
  copyOf(source: SMSlogList, mutator: (draft: MutableModel<SMSlogList>) => MutableModel<SMSlogList> | void): SMSlogList;
}

type EagerBusinessUserList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly ContactPersonName?: string | null;
  readonly ContactPersonEmail?: string | null;
  readonly CampaignName?: string | null;
  readonly TrackingNumber?: string | null;
  readonly TollFreeNumber?: (BusinessUserListFreeNumberList | null)[] | null;
  readonly MonthlyFee?: number | null;
  readonly CostPerSMS?: number | null;
  readonly CallCostPerMinute?: number | null;
  readonly AssignState?: (BusinessUserListStateCodeList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessUserList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly ContactPersonName?: string | null;
  readonly ContactPersonEmail?: string | null;
  readonly CampaignName?: string | null;
  readonly TrackingNumber?: string | null;
  readonly TollFreeNumber: AsyncCollection<BusinessUserListFreeNumberList>;
  readonly MonthlyFee?: number | null;
  readonly CostPerSMS?: number | null;
  readonly CallCostPerMinute?: number | null;
  readonly AssignState: AsyncCollection<BusinessUserListStateCodeList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessUserList = LazyLoading extends LazyLoadingDisabled ? EagerBusinessUserList : LazyBusinessUserList

export declare const BusinessUserList: (new (init: ModelInit<BusinessUserList>) => BusinessUserList) & {
  copyOf(source: BusinessUserList, mutator: (draft: MutableModel<BusinessUserList>) => MutableModel<BusinessUserList> | void): BusinessUserList;
}

type EagerStateCodeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StateCodeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StateName?: string | null;
  readonly AreaCode?: (string | null)[] | null;
  readonly businessuserlists?: (BusinessUserListStateCodeList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStateCodeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StateCodeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StateName?: string | null;
  readonly AreaCode?: (string | null)[] | null;
  readonly businessuserlists: AsyncCollection<BusinessUserListStateCodeList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StateCodeList = LazyLoading extends LazyLoadingDisabled ? EagerStateCodeList : LazyStateCodeList

export declare const StateCodeList: (new (init: ModelInit<StateCodeList>) => StateCodeList) & {
  copyOf(source: StateCodeList, mutator: (draft: MutableModel<StateCodeList>) => MutableModel<StateCodeList> | void): StateCodeList;
}

type EagerFreeNumberList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FreeNumberList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Number?: string | null;
  readonly Active: boolean;
  readonly businessuserlists?: (BusinessUserListFreeNumberList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFreeNumberList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FreeNumberList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Number?: string | null;
  readonly Active: boolean;
  readonly businessuserlists: AsyncCollection<BusinessUserListFreeNumberList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FreeNumberList = LazyLoading extends LazyLoadingDisabled ? EagerFreeNumberList : LazyFreeNumberList

export declare const FreeNumberList: (new (init: ModelInit<FreeNumberList>) => FreeNumberList) & {
  copyOf(source: FreeNumberList, mutator: (draft: MutableModel<FreeNumberList>) => MutableModel<FreeNumberList> | void): FreeNumberList;
}

type EagerServiceList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly Username?: string | null;
  readonly Type?: ServiceType | keyof typeof ServiceType | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly Cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly From?: string | null;
  readonly To?: string | null;
  readonly Username?: string | null;
  readonly Type?: ServiceType | keyof typeof ServiceType | null;
  readonly Status?: ServiceStatus | keyof typeof ServiceStatus | null;
  readonly Cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceList = LazyLoading extends LazyLoadingDisabled ? EagerServiceList : LazyServiceList

export declare const ServiceList: (new (init: ModelInit<ServiceList>) => ServiceList) & {
  copyOf(source: ServiceList, mutator: (draft: MutableModel<ServiceList>) => MutableModel<ServiceList> | void): ServiceList;
}

type EagerBusinessUserListFreeNumberList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserListFreeNumberList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessUserListId?: string | null;
  readonly freeNumberListId?: string | null;
  readonly businessUserList: BusinessUserList;
  readonly freeNumberList: FreeNumberList;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessUserListFreeNumberList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserListFreeNumberList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessUserListId?: string | null;
  readonly freeNumberListId?: string | null;
  readonly businessUserList: AsyncItem<BusinessUserList>;
  readonly freeNumberList: AsyncItem<FreeNumberList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessUserListFreeNumberList = LazyLoading extends LazyLoadingDisabled ? EagerBusinessUserListFreeNumberList : LazyBusinessUserListFreeNumberList

export declare const BusinessUserListFreeNumberList: (new (init: ModelInit<BusinessUserListFreeNumberList>) => BusinessUserListFreeNumberList) & {
  copyOf(source: BusinessUserListFreeNumberList, mutator: (draft: MutableModel<BusinessUserListFreeNumberList>) => MutableModel<BusinessUserListFreeNumberList> | void): BusinessUserListFreeNumberList;
}

type EagerBusinessUserListStateCodeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserListStateCodeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessUserListId?: string | null;
  readonly stateCodeListId?: string | null;
  readonly businessUserList: BusinessUserList;
  readonly stateCodeList: StateCodeList;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessUserListStateCodeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessUserListStateCodeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessUserListId?: string | null;
  readonly stateCodeListId?: string | null;
  readonly businessUserList: AsyncItem<BusinessUserList>;
  readonly stateCodeList: AsyncItem<StateCodeList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessUserListStateCodeList = LazyLoading extends LazyLoadingDisabled ? EagerBusinessUserListStateCodeList : LazyBusinessUserListStateCodeList

export declare const BusinessUserListStateCodeList: (new (init: ModelInit<BusinessUserListStateCodeList>) => BusinessUserListStateCodeList) & {
  copyOf(source: BusinessUserListStateCodeList, mutator: (draft: MutableModel<BusinessUserListStateCodeList>) => MutableModel<BusinessUserListStateCodeList> | void): BusinessUserListStateCodeList;
}