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
export declare type VoiceMessageListCreateFormInputValues = {
    Name?: string;
    VoiceMessage?: string;
};
export declare type VoiceMessageListCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    VoiceMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VoiceMessageListCreateFormOverridesProps = {
    VoiceMessageListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    VoiceMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VoiceMessageListCreateFormProps = React.PropsWithChildren<{
    overrides?: VoiceMessageListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VoiceMessageListCreateFormInputValues) => VoiceMessageListCreateFormInputValues;
    onSuccess?: (fields: VoiceMessageListCreateFormInputValues) => void;
    onError?: (fields: VoiceMessageListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VoiceMessageListCreateFormInputValues) => VoiceMessageListCreateFormInputValues;
    onValidate?: VoiceMessageListCreateFormValidationValues;
} & React.CSSProperties>;
export default function VoiceMessageListCreateForm(props: VoiceMessageListCreateFormProps): React.ReactElement;
