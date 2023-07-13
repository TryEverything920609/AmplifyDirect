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
export declare type BillingListCreateFormInputValues = {
    User?: string;
    Type?: string;
    Duration?: number;
    Cost?: number;
};
export declare type BillingListCreateFormValidationValues = {
    User?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Duration?: ValidationFunction<number>;
    Cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillingListCreateFormOverridesProps = {
    BillingListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingListCreateFormProps = React.PropsWithChildren<{
    overrides?: BillingListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BillingListCreateFormInputValues) => BillingListCreateFormInputValues;
    onSuccess?: (fields: BillingListCreateFormInputValues) => void;
    onError?: (fields: BillingListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingListCreateFormInputValues) => BillingListCreateFormInputValues;
    onValidate?: BillingListCreateFormValidationValues;
} & React.CSSProperties>;
export default function BillingListCreateForm(props: BillingListCreateFormProps): React.ReactElement;
