/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SMSlogLis } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SMSlogLisUpdateFormInputValues = {
    From?: string;
    To?: string;
    UserName?: string;
    Message?: string;
    Cost?: number;
    Status?: string;
};
export declare type SMSlogLisUpdateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    UserName?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SMSlogLisUpdateFormOverridesProps = {
    SMSlogLisUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SMSlogLisUpdateFormProps = React.PropsWithChildren<{
    overrides?: SMSlogLisUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sMSlogLis?: SMSlogLis;
    onSubmit?: (fields: SMSlogLisUpdateFormInputValues) => SMSlogLisUpdateFormInputValues;
    onSuccess?: (fields: SMSlogLisUpdateFormInputValues) => void;
    onError?: (fields: SMSlogLisUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SMSlogLisUpdateFormInputValues) => SMSlogLisUpdateFormInputValues;
    onValidate?: SMSlogLisUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SMSlogLisUpdateForm(props: SMSlogLisUpdateFormProps): React.ReactElement;
