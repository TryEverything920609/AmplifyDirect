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
import { CallLog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CallLogUpdateForm(props) {
  const {
    id: idProp,
    callLog: callLogModelProp,
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
    Cost: "",
    Duration: "",
    Status: "",
  };
  const [From, setFrom] = React.useState(initialValues.From);
  const [To, setTo] = React.useState(initialValues.To);
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [Duration, setDuration] = React.useState(initialValues.Duration);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = callLogRecord
      ? { ...initialValues, ...callLogRecord }
      : initialValues;
    setFrom(cleanValues.From);
    setTo(cleanValues.To);
    setCost(cleanValues.Cost);
    setDuration(cleanValues.Duration);
    setStatus(cleanValues.Status);
    setErrors({});
  };
  const [callLogRecord, setCallLogRecord] = React.useState(callLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CallLog, idProp)
        : callLogModelProp;
      setCallLogRecord(record);
    };
    queryData();
  }, [idProp, callLogModelProp]);
  React.useEffect(resetStateValues, [callLogRecord]);
  const validations = {
    From: [{ type: "Phone" }],
    To: [],
    Cost: [],
    Duration: [],
    Status: [],
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
          Cost,
          Duration,
          Status,
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
            CallLog.copyOf(callLogRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CallLogUpdateForm")}
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
              Cost,
              Duration,
              Status,
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
        type="number"
        step="any"
        value={To}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              From,
              To: value,
              Cost,
              Duration,
              Status,
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
      <SelectField
        label="Cost"
        placeholder="Please select an option"
        isDisabled={false}
        value={Cost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Cost: value,
              Duration,
              Status,
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
      >
        <option
          children="Deliverd"
          value="DELIVERD"
          {...getOverrideProps(overrides, "Costoption0")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "Costoption1")}
        ></option>
        <option
          children="Noanswer"
          value="NOANSWER"
          {...getOverrideProps(overrides, "Costoption2")}
        ></option>
        <option
          children="Ringing"
          value="RINGING"
          {...getOverrideProps(overrides, "Costoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        value={Duration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              Cost,
              Duration: value,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.Duration ?? value;
          }
          if (errors.Duration?.hasError) {
            runValidationTasks("Duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("Duration", Duration)}
        errorMessage={errors.Duration?.errorMessage}
        hasError={errors.Duration?.hasError}
        {...getOverrideProps(overrides, "Duration")}
      ></TextField>
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
              Cost,
              Duration,
              Status: value,
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
          isDisabled={!(idProp || callLogModelProp)}
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
              !(idProp || callLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
