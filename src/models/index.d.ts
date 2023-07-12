import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ServiceStatus {
  DELIVERD = "DELIVERD",
  COMPLETED = "COMPLETED",
  NOANSWER = "NOANSWER"
}

export enum ServiceType {
  SMS = "SMS",
  VOICEMAIL = "VOICEMAIL",
  CALL = "CALL"
}



type EagerStateCodeList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StateCodeList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StateName?: string | null;
  readonly AreaCode?: (string | null)[] | null;
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