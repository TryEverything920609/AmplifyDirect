/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CallLog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CallLogUpdateFormInputValues = {
    From?: string;
    To?: number;
    Cost?: string;
    Duration?: string;
    Status?: string;
};
export declare type CallLogUpdateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<number>;
    Cost?: ValidationFunction<string>;
    Duration?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallLogUpdateFormOverridesProps = {
    CallLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<SelectFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: CallLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    callLog?: CallLog;
    onSubmit?: (fields: CallLogUpdateFormInputValues) => CallLogUpdateFormInputValues;
    onSuccess?: (fields: CallLogUpdateFormInputValues) => void;
    onError?: (fields: CallLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallLogUpdateFormInputValues) => CallLogUpdateFormInputValues;
    onValidate?: CallLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CallLogUpdateForm(props: CallLogUpdateFormProps): React.ReactElement;
