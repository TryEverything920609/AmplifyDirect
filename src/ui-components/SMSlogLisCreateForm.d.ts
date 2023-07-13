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
export declare type SMSlogLisCreateFormInputValues = {
    From?: string;
    To?: string;
    UserName?: string;
    Message?: string;
    Cost?: number;
    Status?: string;
};
export declare type SMSlogLisCreateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    UserName?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SMSlogLisCreateFormOverridesProps = {
    SMSlogLisCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SMSlogLisCreateFormProps = React.PropsWithChildren<{
    overrides?: SMSlogLisCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SMSlogLisCreateFormInputValues) => SMSlogLisCreateFormInputValues;
    onSuccess?: (fields: SMSlogLisCreateFormInputValues) => void;
    onError?: (fields: SMSlogLisCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SMSlogLisCreateFormInputValues) => SMSlogLisCreateFormInputValues;
    onValidate?: SMSlogLisCreateFormValidationValues;
} & React.CSSProperties>;
export default function SMSlogLisCreateForm(props: SMSlogLisCreateFormProps): React.ReactElement;
