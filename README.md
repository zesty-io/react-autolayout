# react-autolayout
React components to consume AutoLayout JSON data

## AutoLayout

The AutoLayout feature allows for using the ContentDesigner to craft a layout structure which is made available with JSON endpoints. Which then is consumed by this library. Once consumed any additional changes to content with the ManagerUI or the layout with the ContentDesigner will automatically be reflected on the front-end.

Conceptual AutoLayout JSON structure. This structure describes both the layout heiarchy and the content of the leaf nodes.
```json
{
    "type": "root",
    "children": [
        {
            "type": "row",
            "children": [
                {
                    "type": "column",
                    "children": [
                        {
                            "type": "field",
                            "name": "image",
                            "data": {
                                "value": "3-000",
                                "resolvedValue": "http://...image",
                                "html": "<img src=''>"
                            },                  
                            "meta": {
                                "ZUID": "12-38dab4-4qvghx",
                                "contentModelZUID": "6-ddf428-gd0xxn",
                                "createdAt": "2016-11-17T07:38:45Z",
                                "description": null,
                                "fieldOptions": "",
                                "label": "Title (text)",
                                "name": "title",
                                "options": "",
                                "relatedFieldZUID": null,
                                "relatedModelZUID": null,
                                "relationship": "",
                                "required": false,
                                "settings": {"options": {}},
                                "sort": 0,
                                "updatedAt": "2016-11-17T07:38:45Z"
                            }
                        },
                        {
                            "type": "model",
                            "name": "example_data",
                            "children": [
                                {
                                    "type": "row",
                                    "children": [
                                        { 
                                            "type": "column",
                                            "children": [
                                                {
                                                    "type": "field",
                                                    "name": "date",
                                                    "data": {}
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

```