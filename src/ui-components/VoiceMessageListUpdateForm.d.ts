/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VoiceMessageList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VoiceMessageListUpdateFormInputValues = {
    Name?: string;
    VoiceMessage?: string;
};
export declare type VoiceMessageListUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    VoiceMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VoiceMessageListUpdateFormOverridesProps = {
    VoiceMessageListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    VoiceMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VoiceMessageListUpdateFormProps = React.PropsWithChildren<{
    overrides?: VoiceMessageListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    voiceMessageList?: VoiceMessageList;
    onSubmit?: (fields: VoiceMessageListUpdateFormInputValues) => VoiceMessageListUpdateFormInputValues;
    onSuccess?: (fields: VoiceMessageListUpdateFormInputValues) => void;
    onError?: (fields: VoiceMessageListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VoiceMessageListUpdateFormInputValues) => VoiceMessageListUpdateFormInputValues;
    onValidate?: VoiceMessageListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VoiceMessageListUpdateForm(props: VoiceMessageListUpdateFormProps): React.ReactElement;
