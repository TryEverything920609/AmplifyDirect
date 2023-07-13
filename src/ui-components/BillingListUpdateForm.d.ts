/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BillingList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BillingListUpdateFormInputValues = {
    User?: string;
    Type?: string;
    Duration?: number;
    Cost?: number;
};
export declare type BillingListUpdateFormValidationValues = {
    User?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Duration?: ValidationFunction<number>;
    Cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillingListUpdateFormOverridesProps = {
    BillingListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingListUpdateFormProps = React.PropsWithChildren<{
    overrides?: BillingListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    billingList?: BillingList;
    onSubmit?: (fields: BillingListUpdateFormInputValues) => BillingListUpdateFormInputValues;
    onSuccess?: (fields: BillingListUpdateFormInputValues) => void;
    onError?: (fields: BillingListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingListUpdateFormInputValues) => BillingListUpdateFormInputValues;
    onValidate?: BillingListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BillingListUpdateForm(props: BillingListUpdateFormProps): React.ReactElement;
