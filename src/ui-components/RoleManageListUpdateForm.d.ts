/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RoleManageList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoleManageListUpdateFormInputValues = {
    RoleName?: string;
};
export declare type RoleManageListUpdateFormValidationValues = {
    RoleName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleManageListUpdateFormOverridesProps = {
    RoleManageListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RoleName?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type RoleManageListUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoleManageListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    roleManageList?: RoleManageList;
    onSubmit?: (fields: RoleManageListUpdateFormInputValues) => RoleManageListUpdateFormInputValues;
    onSuccess?: (fields: RoleManageListUpdateFormInputValues) => void;
    onError?: (fields: RoleManageListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleManageListUpdateFormInputValues) => RoleManageListUpdateFormInputValues;
    onValidate?: RoleManageListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoleManageListUpdateForm(props: RoleManageListUpdateFormProps): React.ReactElement;
