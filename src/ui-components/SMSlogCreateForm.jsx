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
import { SMSlog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SMSlogCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    UserName: "",
    Message: "",
    Cost: "",
    Status: "",
  };
  const [From, setFrom] = React.useState(initialValues.From);
  const [To, setTo] = React.useState(initialValues.To);
  const [UserName, setUserName] = React.useState(initialValues.UserName);
  const [Message, setMessage] = React.useState(initialValues.Message);
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFrom(initialValues.From);
    setTo(initialValues.To);
    setUserName(initialValues.UserName);
    setMessage(initialValues.Message);
    setCost(initialValues.Cost);
    setStatus(initialValues.Status);
    setErrors({});
  };
  const validations = {
    From: [{ type: "Phone" }],
    To: [{ type: "Phone" }],
    UserName: [],
    Message: [],
    Cost: [],
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
          UserName,
          Message,
          Cost,
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
          await DataStore.save(new SMSlog(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SMSlogCreateForm")}
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
              UserName,
              Message,
              Cost,
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
        type="tel"
        value={To}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To: value,
              UserName,
              Message,
              Cost,
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
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={UserName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              UserName: value,
              Message,
              Cost,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.UserName ?? value;
          }
          if (errors.UserName?.hasError) {
            runValidationTasks("UserName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("UserName", UserName)}
        errorMessage={errors.UserName?.errorMessage}
        hasError={errors.UserName?.hasError}
        {...getOverrideProps(overrides, "UserName")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={Message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              From,
              To,
              UserName,
              Message: value,
              Cost,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.Message ?? value;
          }
          if (errors.Message?.hasError) {
            runValidationTasks("Message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("Message", Message)}
        errorMessage={errors.Message?.errorMessage}
        hasError={errors.Message?.hasError}
        {...getOverrideProps(overrides, "Message")}
      ></TextField>
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
              UserName,
              Message,
              Cost: value,
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
              UserName,
              Message,
              Cost,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
