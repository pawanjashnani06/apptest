'use strict';

module.exports = {
    RenewToken : RenewToken
}

function RenewToken(req, res, next) {
    console.log(req.json);
    if(req){
        res.json({
            "data": "Sample text1",
            "metadata": {
                "data": {},
                "metadata": {
                    "code": "Sample text1",
                    "desription": "Sample text1",
                    "InvalidFieldsList": [
                        {
                            "invalidFieldField": "Sample text1",
                            "invalidFieldMessageField": "Sample text1"
                        }
                    ]
                }
            }
        })
    }else{
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

}
