'use strict';

module.exports = {
    RenewToken : RenewToken
}

function RenewToken(req, res, next) {
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
