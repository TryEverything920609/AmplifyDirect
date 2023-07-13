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
export declare type CallLogListCreateFormInputValues = {
    From?: string;
    To?: string;
    Cost?: number;
    Duration?: number;
    Status?: string;
};
export declare type CallLogListCreateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
    Duration?: ValidationFunction<number>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallLogListCreateFormOverridesProps = {
    CallLogListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallLogListCreateFormProps = React.PropsWithChildren<{
    overrides?: CallLogListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CallLogListCreateFormInputValues) => CallLogListCreateFormInputValues;
    onSuccess?: (fields: CallLogListCreateFormInputValues) => void;
    onError?: (fields: CallLogListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallLogListCreateFormInputValues) => CallLogListCreateFormInputValues;
    onValidate?: CallLogListCreateFormValidationValues;
} & React.CSSProperties>;
export default function CallLogListCreateForm(props: CallLogListCreateFormProps): React.ReactElement;
