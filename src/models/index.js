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

const { FreeNumberList, ServiceList } = initSchema(schema);

export {
  FreeNumberList,
  ServiceList,
  ServiceStatus,
  ServiceType
};