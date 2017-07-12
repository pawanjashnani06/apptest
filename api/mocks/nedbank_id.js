'use strict';

module.exports = {
    update_user: update_user,
    retrieve_user_details: retrieve_user_details,
    add_user: add_user
}

function add_user(req, res, next) {
    res.json({
        "data": "Sample text1",
        "metadata": {
            "data": {},
            "metadata": {
                "code": "Sample text2",
                "desription": "Sample text2",
                "InvalidFieldsList": [
                    {
                        "invalidFieldField": "Sample text2",
                        "invalidFieldMessageField": "Sample text2"
                    }
                ]
            }
        }
    })
}


function update_user(req, res, next) {
    res.json({
        "data": "Sample text1",
        "metadata": {
            "data": {},
            "metadata": {
                "code": "Sample text2",
                "desription": "Sample text2",
                "InvalidFieldsList": [
                    {
                        "invalidFieldField": "Sample text2",
                        "invalidFieldMessageField": "Sample text2"
                    }
                ]
            }
        }
    })
}

function retrieve_user_details(req, res, next) {
    res.json({
        "data": "Sample text1",
        "metadata": {
            "data": {},
            "metadata": {
                "code": "Sample text2",
                "desription": "Sample text2",
                "InvalidFieldsList": [
                    {
                        "invalidFieldField": "Sample text2",
                        "invalidFieldMessageField": "Sample text2"
                    }
                ]
            }
        }
    })
}