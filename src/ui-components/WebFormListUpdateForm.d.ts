/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WebFormList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WebFormListUpdateFormInputValues = {
    Privilege?: string;
    Email?: string;
    User?: string;
    Logo?: string;
};
export declare type WebFormListUpdateFormValidationValues = {
    Privilege?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    User?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebFormListUpdateFormOverridesProps = {
    WebFormListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Privilege?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    User?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebFormListUpdateFormProps = React.PropsWithChildren<{
    overrides?: WebFormListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    webFormList?: WebFormList;
    onSubmit?: (fields: WebFormListUpdateFormInputValues) => WebFormListUpdateFormInputValues;
    onSuccess?: (fields: WebFormListUpdateFormInputValues) => void;
    onError?: (fields: WebFormListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebFormListUpdateFormInputValues) => WebFormListUpdateFormInputValues;
    onValidate?: WebFormListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WebFormListUpdateForm(props: WebFormListUpdateFormProps): React.ReactElement;
