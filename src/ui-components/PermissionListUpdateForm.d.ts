/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PermissionList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PermissionListUpdateFormInputValues = {
    icon?: string;
    label?: string;
    to?: string;
    key?: number;
};
export declare type PermissionListUpdateFormValidationValues = {
    icon?: ValidationFunction<string>;
    label?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    key?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PermissionListUpdateFormOverridesProps = {
    PermissionListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    icon?: PrimitiveOverrideProps<TextFieldProps>;
    label?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PermissionListUpdateFormProps = React.PropsWithChildren<{
    overrides?: PermissionListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    permissionList?: PermissionList;
    onSubmit?: (fields: PermissionListUpdateFormInputValues) => PermissionListUpdateFormInputValues;
    onSuccess?: (fields: PermissionListUpdateFormInputValues) => void;
    onError?: (fields: PermissionListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PermissionListUpdateFormInputValues) => PermissionListUpdateFormInputValues;
    onValidate?: PermissionListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PermissionListUpdateForm(props: PermissionListUpdateFormProps): React.ReactElement;
