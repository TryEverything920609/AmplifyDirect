export const schema = {
    "models": {
        "StateCodeList": {
            "name": "StateCodeList",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "StateName": {
                    "name": "StateName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AreaCode": {
                    "name": "AreaCode",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "StateCodeLists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "FreeNumberList": {
            "name": "FreeNumberList",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Number": {
                    "name": "Number",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "Active": {
                    "name": "Active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "FreeNumberLists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ServiceList": {
            "name": "ServiceList",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "From": {
                    "name": "From",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "To": {
                    "name": "To",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "Username": {
                    "name": "Username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Type": {
                    "name": "Type",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Status": {
                    "name": "Status",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Cost": {
                    "name": "Cost",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ServiceLists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ServiceStatus": {
            "name": "ServiceStatus",
            "values": [
                "DELIVERD",
                "COMPLETED",
                "NOANSWER"
            ]
        },
        "ServiceType": {
            "name": "ServiceType",
            "values": [
                "SMS",
                "VOICEMAIL",
                "CALL"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "d25ea288150f3570def96d4553b66e86"
};