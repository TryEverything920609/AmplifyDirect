/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StateCodeList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StateCodeListUpdateFormInputValues = {
    StateName?: string;
    AreaCode?: string[];
};
export declare type StateCodeListUpdateFormValidationValues = {
    StateName?: ValidationFunction<string>;
    AreaCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StateCodeListUpdateFormOverridesProps = {
    StateCodeListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StateName?: PrimitiveOverrideProps<TextFieldProps>;
    AreaCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StateCodeListUpdateFormProps = React.PropsWithChildren<{
    overrides?: StateCodeListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stateCodeList?: StateCodeList;
    onSubmit?: (fields: StateCodeListUpdateFormInputValues) => StateCodeListUpdateFormInputValues;
    onSuccess?: (fields: StateCodeListUpdateFormInputValues) => void;
    onError?: (fields: StateCodeListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StateCodeListUpdateFormInputValues) => StateCodeListUpdateFormInputValues;
    onValidate?: StateCodeListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StateCodeListUpdateForm(props: StateCodeListUpdateFormProps): React.ReactElement;
