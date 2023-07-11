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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { FreeNumberList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FreeNumberListUpdateForm(props) {
  const {
    id: idProp,
    freeNumberList: freeNumberListModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Number: "",
    Active: false,
  };
  const [Number, setNumber] = React.useState(initialValues.Number);
  const [Active, setActive] = React.useState(initialValues.Active);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = freeNumberListRecord
      ? { ...initialValues, ...freeNumberListRecord }
      : initialValues;
    setNumber(cleanValues.Number);
    setActive(cleanValues.Active);
    setErrors({});
  };
  const [freeNumberListRecord, setFreeNumberListRecord] = React.useState(
    freeNumberListModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FreeNumberList, idProp)
        : freeNumberListModelProp;
      setFreeNumberListRecord(record);
    };
    queryData();
  }, [idProp, freeNumberListModelProp]);
  React.useEffect(resetStateValues, [freeNumberListRecord]);
  const validations = {
    Number: [{ type: "Phone" }],
    Active: [{ type: "Required" }],
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
          Number,
          Active,
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
            FreeNumberList.copyOf(freeNumberListRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FreeNumberListUpdateForm")}
      {...rest}
    >
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Number: value,
              Active,
            };
            const result = onChange(modelFields);
            value = result?.Number ?? value;
          }
          if (errors.Number?.hasError) {
            runValidationTasks("Number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("Number", Number)}
        errorMessage={errors.Number?.errorMessage}
        hasError={errors.Number?.hasError}
        {...getOverrideProps(overrides, "Number")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Number,
              Active: value,
            };
            const result = onChange(modelFields);
            value = result?.Active ?? value;
          }
          if (errors.Active?.hasError) {
            runValidationTasks("Active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("Active", Active)}
        errorMessage={errors.Active?.errorMessage}
        hasError={errors.Active?.hasError}
        {...getOverrideProps(overrides, "Active")}
      ></SwitchField>
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
          isDisabled={!(idProp || freeNumberListModelProp)}
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
              !(idProp || freeNumberListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
