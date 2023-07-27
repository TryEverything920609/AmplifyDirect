/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoleManageListCreateFormInputValues = {
    RoleName?: string;
};
export declare type RoleManageListCreateFormValidationValues = {
    RoleName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleManageListCreateFormOverridesProps = {
    RoleManageListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RoleName?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RoleManageListCreateFormProps = React.PropsWithChildren<{
    overrides?: RoleManageListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoleManageListCreateFormInputValues) => RoleManageListCreateFormInputValues;
    onSuccess?: (fields: RoleManageListCreateFormInputValues) => void;
    onError?: (fields: RoleManageListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleManageListCreateFormInputValues) => RoleManageListCreateFormInputValues;
    onValidate?: RoleManageListCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoleManageListCreateForm(props: RoleManageListCreateFormProps): React.ReactElement;
