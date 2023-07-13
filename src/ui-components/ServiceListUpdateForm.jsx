/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ServiceList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ServiceListUpdateForm(props) {
  const {
    id: idProp,
    serviceList: serviceListModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    From: "",
    To: "",
    Username: "",
    Type: "",
    Status: "",
    Cost: "",
  };
  const [From, setFrom] = React.useState(initialValues.From);
  const [To, setTo] = React.useState(initialValues.To);
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [Type, setType] = React.useState(initialValues.Type);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = serviceListRecord
      ? { ...initialValues, ...serviceListRecord }
      : initialValues;
    setFrom(cleanValues.From);
    setTo(cleanValues.To);
    setUsername(cleanValues.Username);
    setType(cleanValues.Type);
    setStatus(cleanValues.Status);
    setCost(cleanValues.Cost);
    setErrors({});
  };
  const [serviceListRecord, setServiceListRecord] =
    React.useState(serviceListModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ServiceList, idProp)
        : serviceListModelProp;
      setServiceListRecord(record);
    };
    queryData();
  }, [idProp, serviceListModelProp]);
  React.useEffect(resetStateValues, [serviceListRecord]);
  const validations = {
    From: [{ type: "Phone" }],
    To: [{ type: "Phone" }],
    Username: [],
    Type: [],
    Status: [],
    Cost: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          From,
          To,
          Username,
          Type,
          Status,
          Cost,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ServiceList.copyOf(serviceListRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ServiceListUpdateForm")}
      {...rest}
    >
      <TextField
        label="From"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={From}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From: value,
              To,
              Username,
              Type,
              Status,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.From ?? value;
          }
          if (errors.From?.hasError) {
            runValidationTasks("From", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("From", From)}
        errorMessage={errors.From?.errorMessage}
        hasError={errors.From?.hasError}
        {...getOverrideProps(overrides, "From")}
      ></TextField>
      <TextField
        label="To"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={To}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To: value,
              Username,
              Type,
              Status,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.To ?? value;
          }
          if (errors.To?.hasError) {
            runValidationTasks("To", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("To", To)}
        errorMessage={errors.To?.errorMessage}
        hasError={errors.To?.hasError}
        {...getOverrideProps(overrides, "To")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Username: value,
              Type,
              Status,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Username,
              Type: value,
              Status,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      >
        <option
          children="Sms"
          value="SMS"
          {...getOverrideProps(overrides, "Typeoption0")}
        ></option>
        <option
          children="Voicemail"
          value="VOICEMAIL"
          {...getOverrideProps(overrides, "Typeoption1")}
        ></option>
        <option
          children="Call"
          value="CALL"
          {...getOverrideProps(overrides, "Typeoption2")}
        ></option>
        <option
          children="Deposit"
          value="DEPOSIT"
          {...getOverrideProps(overrides, "Typeoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Username,
              Type,
              Status: value,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.Status ?? value;
          }
          if (errors.Status?.hasError) {
            runValidationTasks("Status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("Status", Status)}
        errorMessage={errors.Status?.errorMessage}
        hasError={errors.Status?.hasError}
        {...getOverrideProps(overrides, "Status")}
      >
        <option
          children="Deliverd"
          value="DELIVERD"
          {...getOverrideProps(overrides, "Statusoption0")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "Statusoption1")}
        ></option>
        <option
          children="Noanswer"
          value="NOANSWER"
          {...getOverrideProps(overrides, "Statusoption2")}
        ></option>
        <option
          children="Ringing"
          value="RINGING"
          {...getOverrideProps(overrides, "Statusoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              From,
              To,
              Username,
              Type,
              Status,
              Cost: value,
            };
            const result = onChange(modelFields);
            value = result?.Cost ?? value;
          }
          if (errors.Cost?.hasError) {
            runValidationTasks("Cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("Cost", Cost)}
        errorMessage={errors.Cost?.errorMessage}
        hasError={errors.Cost?.hasError}
        {...getOverrideProps(overrides, "Cost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || serviceListModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || serviceListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
