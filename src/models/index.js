// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ServiceStatus = {
  "DELIVERD": "DELIVERD",
  "COMPLETED": "COMPLETED",
  "NOANSWER": "NOANSWER"
};

const ServiceType = {
  "SMS": "SMS",
  "VOICEMAIL": "VOICEMAIL",
  "CALL": "CALL"
};

const { StateCodeList, FreeNumberList, ServiceList } = initSchema(schema);

export {
  StateCodeList,
  FreeNumberList,
  ServiceList,
  ServiceStatus,
  ServiceType
};