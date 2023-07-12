/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StateCodeListCreateFormInputValues = {
    StateName?: string;
    AreaCode?: string[];
};
export declare type StateCodeListCreateFormValidationValues = {
    StateName?: ValidationFunction<string>;
    AreaCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StateCodeListCreateFormOverridesProps = {
    StateCodeListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StateName?: PrimitiveOverrideProps<TextFieldProps>;
    AreaCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StateCodeListCreateFormProps = React.PropsWithChildren<{
    overrides?: StateCodeListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StateCodeListCreateFormInputValues) => StateCodeListCreateFormInputValues;
    onSuccess?: (fields: StateCodeListCreateFormInputValues) => void;
    onError?: (fields: StateCodeListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StateCodeListCreateFormInputValues) => StateCodeListCreateFormInputValues;
    onValidate?: StateCodeListCreateFormValidationValues;
} & React.CSSProperties>;
export default function StateCodeListCreateForm(props: StateCodeListCreateFormProps): React.ReactElement;
