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
import { UserProfileList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserProfileListCreateForm(props) {
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
    Avatar: "",
    Role: "",
    PhoneNumber: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Avatar, setAvatar] = React.useState(initialValues.Avatar);
  const [Role, setRole] = React.useState(initialValues.Role);
  const [PhoneNumber, setPhoneNumber] = React.useState(
    initialValues.PhoneNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setEmail(initialValues.Email);
    setAvatar(initialValues.Avatar);
    setRole(initialValues.Role);
    setPhoneNumber(initialValues.PhoneNumber);
    setErrors({});
  };
  const validations = {
    Name: [],
    Email: [{ type: "Email" }],
    Avatar: [],
    Role: [],
    PhoneNumber: [{ type: "Phone" }],
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
          Avatar,
          Role,
          PhoneNumber,
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
          await DataStore.save(new UserProfileList(modelFields));
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
      {...getOverrideProps(overrides, "UserProfileListCreateForm")}
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
              Avatar,
              Role,
              PhoneNumber,
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
              Avatar,
              Role,
              PhoneNumber,
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
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={Avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Avatar: value,
              Role,
              PhoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.Avatar ?? value;
          }
          if (errors.Avatar?.hasError) {
            runValidationTasks("Avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("Avatar", Avatar)}
        errorMessage={errors.Avatar?.errorMessage}
        hasError={errors.Avatar?.hasError}
        {...getOverrideProps(overrides, "Avatar")}
      ></TextField>
      <SelectField
        label="Role"
        placeholder="Please select an option"
        isDisabled={false}
        value={Role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Avatar,
              Role: value,
              PhoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.Role ?? value;
          }
          if (errors.Role?.hasError) {
            runValidationTasks("Role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("Role", Role)}
        errorMessage={errors.Role?.errorMessage}
        hasError={errors.Role?.hasError}
        {...getOverrideProps(overrides, "Role")}
      >
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "Roleoption0")}
        ></option>
        <option
          children="Supervisor"
          value="SUPERVISOR"
          {...getOverrideProps(overrides, "Roleoption1")}
        ></option>
        <option
          children="User"
          value="USER"
          {...getOverrideProps(overrides, "Roleoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Avatar,
              Role,
              PhoneNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.PhoneNumber ?? value;
          }
          if (errors.PhoneNumber?.hasError) {
            runValidationTasks("PhoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("PhoneNumber", PhoneNumber)}
        errorMessage={errors.PhoneNumber?.errorMessage}
        hasError={errors.PhoneNumber?.hasError}
        {...getOverrideProps(overrides, "PhoneNumber")}
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
