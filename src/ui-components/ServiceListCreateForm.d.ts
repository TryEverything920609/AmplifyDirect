/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceListCreateFormInputValues = {
    From?: string;
    To?: string;
    Username?: string;
    Type?: string;
    Status?: string;
    Cost?: number;
};
export declare type ServiceListCreateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Username?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceListCreateFormOverridesProps = {
    ServiceListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceListCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceListCreateFormInputValues) => ServiceListCreateFormInputValues;
    onSuccess?: (fields: ServiceListCreateFormInputValues) => void;
    onError?: (fields: ServiceListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceListCreateFormInputValues) => ServiceListCreateFormInputValues;
    onValidate?: ServiceListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceListCreateForm(props: ServiceListCreateFormProps): React.ReactElement;
