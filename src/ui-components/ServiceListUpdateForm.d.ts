/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceListUpdateFormInputValues = {
    From?: string;
    To?: string;
    Username?: string;
    Type?: string;
    Status?: string;
    Cost?: number;
};
export declare type ServiceListUpdateFormValidationValues = {
    From?: ValidationFunction<string>;
    To?: ValidationFunction<string>;
    Username?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    Cost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceListUpdateFormOverridesProps = {
    ServiceListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    From?: PrimitiveOverrideProps<TextFieldProps>;
    To?: PrimitiveOverrideProps<TextFieldProps>;
    Username?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
    Status?: PrimitiveOverrideProps<SelectFieldProps>;
    Cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    serviceList?: ServiceList;
    onSubmit?: (fields: ServiceListUpdateFormInputValues) => ServiceListUpdateFormInputValues;
    onSuccess?: (fields: ServiceListUpdateFormInputValues) => void;
    onError?: (fields: ServiceListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceListUpdateFormInputValues) => ServiceListUpdateFormInputValues;
    onValidate?: ServiceListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceListUpdateForm(props: ServiceListUpdateFormProps): React.ReactElement;
