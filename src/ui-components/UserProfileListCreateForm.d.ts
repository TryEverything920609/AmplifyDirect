/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileListCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Avatar?: string;
};
export declare type UserProfileListCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileListCreateFormOverridesProps = {
    UserProfileListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Avatar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileListCreateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserProfileListCreateFormInputValues) => UserProfileListCreateFormInputValues;
    onSuccess?: (fields: UserProfileListCreateFormInputValues) => void;
    onError?: (fields: UserProfileListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserProfileListCreateFormInputValues) => UserProfileListCreateFormInputValues;
    onValidate?: UserProfileListCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileListCreateForm(props: UserProfileListCreateFormProps): React.ReactElement;
