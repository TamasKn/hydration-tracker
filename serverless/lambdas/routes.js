'use strict';

module.exports.getData = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'SUCCESS',
                data: {
                    user: 1,
                    current_streak: 3,
                    streak: [
                        {
                            day: 1,
                            goal: 1000,
                            consumption: 1200
                        },
                        {
                            day: 2,
                            goal: 1000,
                            consumption: 900
                        },
                        {
                            day: 3,
                            goal: 1500,
                            consumption: 1700
                        },
                        {
                            day: 4,
                            goal: 1700,
                            consumption: 1400
                        },
                    ]
                }
            }
        )
    };
};

module.exports.postData = async (event) => {
    console.log('From client:' ,event.body)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'SUCCESS'
            }
        )
    }
};
