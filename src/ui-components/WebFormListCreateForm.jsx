/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WebFormList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WebFormListCreateForm(props) {
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
    Privilege: "",
    Email: "",
    User: "",
    Logo: "",
  };
  const [Privilege, setPrivilege] = React.useState(initialValues.Privilege);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [User, setUser] = React.useState(initialValues.User);
  const [Logo, setLogo] = React.useState(initialValues.Logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPrivilege(initialValues.Privilege);
    setEmail(initialValues.Email);
    setUser(initialValues.User);
    setLogo(initialValues.Logo);
    setErrors({});
  };
  const validations = {
    Privilege: [],
    Email: [{ type: "Email" }],
    User: [],
    Logo: [{ type: "URL" }],
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
          Privilege,
          Email,
          User,
          Logo,
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
          await DataStore.save(new WebFormList(modelFields));
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
      {...getOverrideProps(overrides, "WebFormListCreateForm")}
      {...rest}
    >
      <TextField
        label="Privilege"
        isRequired={false}
        isReadOnly={false}
        value={Privilege}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Privilege: value,
              Email,
              User,
              Logo,
            };
            const result = onChange(modelFields);
            value = result?.Privilege ?? value;
          }
          if (errors.Privilege?.hasError) {
            runValidationTasks("Privilege", value);
          }
          setPrivilege(value);
        }}
        onBlur={() => runValidationTasks("Privilege", Privilege)}
        errorMessage={errors.Privilege?.errorMessage}
        hasError={errors.Privilege?.hasError}
        {...getOverrideProps(overrides, "Privilege")}
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
              Privilege,
              Email: value,
              User,
              Logo,
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
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Privilege,
              Email,
              User: value,
              Logo,
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
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={Logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Privilege,
              Email,
              User,
              Logo: value,
            };
            const result = onChange(modelFields);
            value = result?.Logo ?? value;
          }
          if (errors.Logo?.hasError) {
            runValidationTasks("Logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("Logo", Logo)}
        errorMessage={errors.Logo?.errorMessage}
        hasError={errors.Logo?.hasError}
        {...getOverrideProps(overrides, "Logo")}
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
