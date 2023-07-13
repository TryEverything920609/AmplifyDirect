/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BusinessUserList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BusinessUserListCreateForm(props) {
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
    Name: "",
    Email: "",
    ContactPersonName: "",
    ContactPersonEmail: "",
    CampaignName: "",
    TrackingNumber: "",
    MonthlyFee: "",
    CostPerSMS: "",
    CallCostPerMinute: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [ContactPersonName, setContactPersonName] = React.useState(
    initialValues.ContactPersonName
  );
  const [ContactPersonEmail, setContactPersonEmail] = React.useState(
    initialValues.ContactPersonEmail
  );
  const [CampaignName, setCampaignName] = React.useState(
    initialValues.CampaignName
  );
  const [TrackingNumber, setTrackingNumber] = React.useState(
    initialValues.TrackingNumber
  );
  const [MonthlyFee, setMonthlyFee] = React.useState(initialValues.MonthlyFee);
  const [CostPerSMS, setCostPerSMS] = React.useState(initialValues.CostPerSMS);
  const [CallCostPerMinute, setCallCostPerMinute] = React.useState(
    initialValues.CallCostPerMinute
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setEmail(initialValues.Email);
    setContactPersonName(initialValues.ContactPersonName);
    setContactPersonEmail(initialValues.ContactPersonEmail);
    setCampaignName(initialValues.CampaignName);
    setTrackingNumber(initialValues.TrackingNumber);
    setMonthlyFee(initialValues.MonthlyFee);
    setCostPerSMS(initialValues.CostPerSMS);
    setCallCostPerMinute(initialValues.CallCostPerMinute);
    setErrors({});
  };
  const validations = {
    Name: [],
    Email: [{ type: "Email" }],
    ContactPersonName: [],
    ContactPersonEmail: [{ type: "Email" }],
    CampaignName: [],
    TrackingNumber: [],
    MonthlyFee: [],
    CostPerSMS: [],
    CallCostPerMinute: [],
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
          Name,
          Email,
          ContactPersonName,
          ContactPersonEmail,
          CampaignName,
          TrackingNumber,
          MonthlyFee,
          CostPerSMS,
          CallCostPerMinute,
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
          await DataStore.save(new BusinessUserList(modelFields));
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
      {...getOverrideProps(overrides, "BusinessUserListCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email: value,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Contact person name"
        isRequired={false}
        isReadOnly={false}
        value={ContactPersonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName: value,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.ContactPersonName ?? value;
          }
          if (errors.ContactPersonName?.hasError) {
            runValidationTasks("ContactPersonName", value);
          }
          setContactPersonName(value);
        }}
        onBlur={() =>
          runValidationTasks("ContactPersonName", ContactPersonName)
        }
        errorMessage={errors.ContactPersonName?.errorMessage}
        hasError={errors.ContactPersonName?.hasError}
        {...getOverrideProps(overrides, "ContactPersonName")}
      ></TextField>
      <TextField
        label="Contact person email"
        isRequired={false}
        isReadOnly={false}
        value={ContactPersonEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail: value,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.ContactPersonEmail ?? value;
          }
          if (errors.ContactPersonEmail?.hasError) {
            runValidationTasks("ContactPersonEmail", value);
          }
          setContactPersonEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("ContactPersonEmail", ContactPersonEmail)
        }
        errorMessage={errors.ContactPersonEmail?.errorMessage}
        hasError={errors.ContactPersonEmail?.hasError}
        {...getOverrideProps(overrides, "ContactPersonEmail")}
      ></TextField>
      <TextField
        label="Campaign name"
        isRequired={false}
        isReadOnly={false}
        value={CampaignName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName: value,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.CampaignName ?? value;
          }
          if (errors.CampaignName?.hasError) {
            runValidationTasks("CampaignName", value);
          }
          setCampaignName(value);
        }}
        onBlur={() => runValidationTasks("CampaignName", CampaignName)}
        errorMessage={errors.CampaignName?.errorMessage}
        hasError={errors.CampaignName?.hasError}
        {...getOverrideProps(overrides, "CampaignName")}
      ></TextField>
      <TextField
        label="Tracking number"
        isRequired={false}
        isReadOnly={false}
        value={TrackingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber: value,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.TrackingNumber ?? value;
          }
          if (errors.TrackingNumber?.hasError) {
            runValidationTasks("TrackingNumber", value);
          }
          setTrackingNumber(value);
        }}
        onBlur={() => runValidationTasks("TrackingNumber", TrackingNumber)}
        errorMessage={errors.TrackingNumber?.errorMessage}
        hasError={errors.TrackingNumber?.hasError}
        {...getOverrideProps(overrides, "TrackingNumber")}
      ></TextField>
      <TextField
        label="Monthly fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MonthlyFee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee: value,
              CostPerSMS,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.MonthlyFee ?? value;
          }
          if (errors.MonthlyFee?.hasError) {
            runValidationTasks("MonthlyFee", value);
          }
          setMonthlyFee(value);
        }}
        onBlur={() => runValidationTasks("MonthlyFee", MonthlyFee)}
        errorMessage={errors.MonthlyFee?.errorMessage}
        hasError={errors.MonthlyFee?.hasError}
        {...getOverrideProps(overrides, "MonthlyFee")}
      ></TextField>
      <TextField
        label="Cost per sms"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CostPerSMS}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS: value,
              CallCostPerMinute,
            };
            const result = onChange(modelFields);
            value = result?.CostPerSMS ?? value;
          }
          if (errors.CostPerSMS?.hasError) {
            runValidationTasks("CostPerSMS", value);
          }
          setCostPerSMS(value);
        }}
        onBlur={() => runValidationTasks("CostPerSMS", CostPerSMS)}
        errorMessage={errors.CostPerSMS?.errorMessage}
        hasError={errors.CostPerSMS?.hasError}
        {...getOverrideProps(overrides, "CostPerSMS")}
      ></TextField>
      <TextField
        label="Call cost per minute"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CallCostPerMinute}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              ContactPersonName,
              ContactPersonEmail,
              CampaignName,
              TrackingNumber,
              MonthlyFee,
              CostPerSMS,
              CallCostPerMinute: value,
            };
            const result = onChange(modelFields);
            value = result?.CallCostPerMinute ?? value;
          }
          if (errors.CallCostPerMinute?.hasError) {
            runValidationTasks("CallCostPerMinute", value);
          }
          setCallCostPerMinute(value);
        }}
        onBlur={() =>
          runValidationTasks("CallCostPerMinute", CallCostPerMinute)
        }
        errorMessage={errors.CallCostPerMinute?.errorMessage}
        hasError={errors.CallCostPerMinute?.hasError}
        {...getOverrideProps(overrides, "CallCostPerMinute")}
      ></TextField>
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
