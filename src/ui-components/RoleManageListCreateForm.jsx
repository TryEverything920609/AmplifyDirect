/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RoleManageList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RoleManageListCreateForm(props) {
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
    RoleName: "",
  };
  const [RoleName, setRoleName] = React.useState(initialValues.RoleName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRoleName(initialValues.RoleName);
    setErrors({});
  };
  const validations = {
    RoleName: [],
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
          RoleName,
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
          await DataStore.save(new RoleManageList(modelFields));
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
      {...getOverrideProps(overrides, "RoleManageListCreateForm")}
      {...rest}
    >
      <SelectField
        label="Role name"
        placeholder="Please select an option"
        isDisabled={false}
        value={RoleName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RoleName: value,
            };
            const result = onChange(modelFields);
            value = result?.RoleName ?? value;
          }
          if (errors.RoleName?.hasError) {
            runValidationTasks("RoleName", value);
          }
          setRoleName(value);
        }}
        onBlur={() => runValidationTasks("RoleName", RoleName)}
        errorMessage={errors.RoleName?.errorMessage}
        hasError={errors.RoleName?.hasError}
        {...getOverrideProps(overrides, "RoleName")}
      >
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "RoleNameoption0")}
        ></option>
        <option
          children="Supervisor"
          value="SUPERVISOR"
          {...getOverrideProps(overrides, "RoleNameoption1")}
        ></option>
        <option
          children="User"
          value="USER"
          {...getOverrideProps(overrides, "RoleNameoption2")}
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
