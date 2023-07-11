/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FreeNumberList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FreeNumberListUpdateFormInputValues = {
    Number?: string;
    Active?: boolean;
};
export declare type FreeNumberListUpdateFormValidationValues = {
    Number?: ValidationFunction<string>;
    Active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FreeNumberListUpdateFormOverridesProps = {
    FreeNumberListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Number?: PrimitiveOverrideProps<TextFieldProps>;
    Active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FreeNumberListUpdateFormProps = React.PropsWithChildren<{
    overrides?: FreeNumberListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    freeNumberList?: FreeNumberList;
    onSubmit?: (fields: FreeNumberListUpdateFormInputValues) => FreeNumberListUpdateFormInputValues;
    onSuccess?: (fields: FreeNumberListUpdateFormInputValues) => void;
    onError?: (fields: FreeNumberListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FreeNumberListUpdateFormInputValues) => FreeNumberListUpdateFormInputValues;
    onValidate?: FreeNumberListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FreeNumberListUpdateForm(props: FreeNumberListUpdateFormProps): React.ReactElement;
