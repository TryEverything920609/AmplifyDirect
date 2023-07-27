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
export declare type PermissionListCreateFormInputValues = {
    icon?: string;
    label?: string;
    to?: string;
    key?: number;
};
export declare type PermissionListCreateFormValidationValues = {
    icon?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    key?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PermissionListCreateFormOverridesProps = {
    PermissionListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
    label?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PermissionListCreateFormProps = React.PropsWithChildren<{
    overrides?: PermissionListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PermissionListCreateFormInputValues) => PermissionListCreateFormInputValues;
    onSuccess?: (fields: PermissionListCreateFormInputValues) => void;
    onError?: (fields: PermissionListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PermissionListCreateFormInputValues) => PermissionListCreateFormInputValues;
    onValidate?: PermissionListCreateFormValidationValues;
} & React.CSSProperties>;
export default function PermissionListCreateForm(props: PermissionListCreateFormProps): React.ReactElement;
