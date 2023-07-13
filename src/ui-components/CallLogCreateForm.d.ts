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
export declare type CallLogCreateFormInputValues = {
    From?: string;
    To?: number;
    Cost?: string;
    Duration?: string;
    Status?: string;
};
export declare type CallLogCreateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<number>;
    Cost?: ValidationFunction<string>;
    Duration?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallLogCreateFormOverridesProps = {
    CallLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<SelectFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallLogCreateFormProps = React.PropsWithChildren<{
    overrides?: CallLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CallLogCreateFormInputValues) => CallLogCreateFormInputValues;
    onSuccess?: (fields: CallLogCreateFormInputValues) => void;
    onError?: (fields: CallLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallLogCreateFormInputValues) => CallLogCreateFormInputValues;
    onValidate?: CallLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function CallLogCreateForm(props: CallLogCreateFormProps): React.ReactElement;
