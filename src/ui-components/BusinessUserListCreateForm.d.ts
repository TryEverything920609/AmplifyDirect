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
export declare type BusinessUserListCreateFormInputValues = {
    Name?: string;
    Email?: string;
    ContactPersonName?: string;
    ContactPersonEmail?: string;
    CampaignName?: string;
    TrackingNumber?: string;
    MonthlyFee?: number;
    CostPerSMS?: number;
    CallCostPerMinute?: number;
};
export declare type BusinessUserListCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    ContactPersonName?: ValidationFunction<string>;
    ContactPersonEmail?: ValidationFunction<string>;
    CampaignName?: ValidationFunction<string>;
    TrackingNumber?: ValidationFunction<string>;
    MonthlyFee?: ValidationFunction<number>;
    CostPerSMS?: ValidationFunction<number>;
    CallCostPerMinute?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessUserListCreateFormOverridesProps = {
    BusinessUserListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPersonName?: PrimitiveOverrideProps<TextFieldProps>;
    ContactPersonEmail?: PrimitiveOverrideProps<TextFieldProps>;
    CampaignName?: PrimitiveOverrideProps<TextFieldProps>;
    TrackingNumber?: PrimitiveOverrideProps<TextFieldProps>;
    MonthlyFee?: PrimitiveOverrideProps<TextFieldProps>;
    CostPerSMS?: PrimitiveOverrideProps<TextFieldProps>;
    CallCostPerMinute?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUserListCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUserListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessUserListCreateFormInputValues) => BusinessUserListCreateFormInputValues;
    onSuccess?: (fields: BusinessUserListCreateFormInputValues) => void;
    onError?: (fields: BusinessUserListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUserListCreateFormInputValues) => BusinessUserListCreateFormInputValues;
    onValidate?: BusinessUserListCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUserListCreateForm(props: BusinessUserListCreateFormProps): React.ReactElement;
