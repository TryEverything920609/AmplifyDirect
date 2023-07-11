/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FreeNumberListCreateFormInputValues = {
    Number?: string;
    Active?: boolean;
};
export declare type FreeNumberListCreateFormValidationValues = {
    Number?: ValidationFunction<string>;
    Active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FreeNumberListCreateFormOverridesProps = {
    FreeNumberListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Number?: PrimitiveOverrideProps<TextFieldProps>;
    Active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FreeNumberListCreateFormProps = React.PropsWithChildren<{
    overrides?: FreeNumberListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FreeNumberListCreateFormInputValues) => FreeNumberListCreateFormInputValues;
    onSuccess?: (fields: FreeNumberListCreateFormInputValues) => void;
    onError?: (fields: FreeNumberListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FreeNumberListCreateFormInputValues) => FreeNumberListCreateFormInputValues;
    onValidate?: FreeNumberListCreateFormValidationValues;
} & React.CSSProperties>;
export default function FreeNumberListCreateForm(props: FreeNumberListCreateFormProps): React.ReactElement;
