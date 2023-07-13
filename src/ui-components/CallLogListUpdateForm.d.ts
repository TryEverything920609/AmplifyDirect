/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CallLogList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CallLogListUpdateFormInputValues = {
    From?: string;
    To?: string;
    Cost?: number;
    Duration?: number;
    Status?: string;
};
export declare type CallLogListUpdateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
    Duration?: ValidationFunction<number>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallLogListUpdateFormOverridesProps = {
    CallLogListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallLogListUpdateFormProps = React.PropsWithChildren<{
    overrides?: CallLogListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    callLogList?: CallLogList;
    onSubmit?: (fields: CallLogListUpdateFormInputValues) => CallLogListUpdateFormInputValues;
    onSuccess?: (fields: CallLogListUpdateFormInputValues) => void;
    onError?: (fields: CallLogListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallLogListUpdateFormInputValues) => CallLogListUpdateFormInputValues;
    onValidate?: CallLogListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CallLogListUpdateForm(props: CallLogListUpdateFormProps): React.ReactElement;
