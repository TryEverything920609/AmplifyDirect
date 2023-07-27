// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserTypeList = {
  "ADMIN": "ADMIN",
  "SUPERVISOR": "SUPERVISOR",
  "USER": "USER"
};

const ServiceStatus = {
  "DELIVERD": "DELIVERD",
  "COMPLETED": "COMPLETED",
  "NOANSWER": "NOANSWER",
  "RINGING": "RINGING"
};

const ServiceType = {
  "SMS": "SMS",
  "VOICEMAIL": "VOICEMAIL",
  "CALL": "CALL",
  "DEPOSIT": "DEPOSIT"
};

const { RoleManageList, PermissionList, VoiceMessageList, WebFormList, UserProfileList, BillingList, CallLogList, SMSlogList, BusinessUserList, StateCodeList, FreeNumberList, ServiceList, RoleManageListPermissionList, BusinessUserListFreeNumberList, BusinessUserListStateCodeList } = initSchema(schema);

export {
  RoleManageList,
  PermissionList,
  VoiceMessageList,
  WebFormList,
  UserProfileList,
  BillingList,
  CallLogList,
  SMSlogList,
  BusinessUserList,
  StateCodeList,
  FreeNumberList,
  ServiceList,
  RoleManageListPermissionList,
  BusinessUserListFreeNumberList,
  BusinessUserListStateCodeList,
  UserTypeList,
  ServiceStatus,
  ServiceType
};