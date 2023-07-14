// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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

const { VoiceMessageList, WebFormList, UserProfileList, BillingList, CallLogList, SMSlogList, BusinessUserList, StateCodeList, FreeNumberList, ServiceList, BusinessUserListFreeNumberList, BusinessUserListStateCodeList } = initSchema(schema);

export {
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
  BusinessUserListFreeNumberList,
  BusinessUserListStateCodeList,
  ServiceStatus,
  ServiceType
};