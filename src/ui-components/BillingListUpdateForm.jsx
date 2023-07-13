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
import { BillingList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BillingListUpdateForm(props) {
  const {
    id: idProp,
    billingList: billingListModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    User: "",
    Type: "",
    Duration: "",
    Cost: "",
  };
  const [User, setUser] = React.useState(initialValues.User);
  const [Type, setType] = React.useState(initialValues.Type);
  const [Duration, setDuration] = React.useState(initialValues.Duration);
  const [Cost, setCost] = React.useState(initialValues.Cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = billingListRecord
      ? { ...initialValues, ...billingListRecord }
      : initialValues;
    setUser(cleanValues.User);
    setType(cleanValues.Type);
    setDuration(cleanValues.Duration);
    setCost(cleanValues.Cost);
    setErrors({});
  };
  const [billingListRecord, setBillingListRecord] =
    React.useState(billingListModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BillingList, idProp)
        : billingListModelProp;
      setBillingListRecord(record);
    };
    queryData();
  }, [idProp, billingListModelProp]);
  React.useEffect(resetStateValues, [billingListRecord]);
  const validations = {
    User: [],
    Type: [],
    Duration: [],
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
          User,
          Type,
          Duration,
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
            BillingList.copyOf(billingListRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BillingListUpdateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User: value,
              Type,
              Duration,
              Cost,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        {...getOverrideProps(overrides, "User")}
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
              User,
              Type: value,
              Duration,
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
      </SelectField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Duration}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              User,
              Type,
              Duration: value,
              Cost,
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
              User,
              Type,
              Duration,
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
          isDisabled={!(idProp || billingListModelProp)}
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
              !(idProp || billingListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
