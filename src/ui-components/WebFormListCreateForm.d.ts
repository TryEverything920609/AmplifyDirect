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
export declare type WebFormListCreateFormInputValues = {
    Privilege?: string;
    Email?: string;
    User?: string;
    Logo?: string;
};
export declare type WebFormListCreateFormValidationValues = {
    Privilege?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebFormListCreateFormOverridesProps = {
    WebFormListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Privilege?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebFormListCreateFormProps = React.PropsWithChildren<{
    overrides?: WebFormListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WebFormListCreateFormInputValues) => WebFormListCreateFormInputValues;
    onSuccess?: (fields: WebFormListCreateFormInputValues) => void;
    onError?: (fields: WebFormListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebFormListCreateFormInputValues) => WebFormListCreateFormInputValues;
    onValidate?: WebFormListCreateFormValidationValues;
} & React.CSSProperties>;
export default function WebFormListCreateForm(props: WebFormListCreateFormProps): React.ReactElement;
