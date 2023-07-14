/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserProfileList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileListUpdateFormInputValues = {
    Name?: string;
    Email?: string;
    Avatar?: string;
};
export declare type UserProfileListUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileListUpdateFormOverridesProps = {
    UserProfileListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Avatar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileListUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProfileList?: UserProfileList;
    onSubmit?: (fields: UserProfileListUpdateFormInputValues) => UserProfileListUpdateFormInputValues;
    onSuccess?: (fields: UserProfileListUpdateFormInputValues) => void;
    onError?: (fields: UserProfileListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileListUpdateFormInputValues) => UserProfileListUpdateFormInputValues;
    onValidate?: UserProfileListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileListUpdateForm(props: UserProfileListUpdateFormProps): React.ReactElement;
