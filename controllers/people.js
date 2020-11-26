const people = require('../people.json');

exports.index = (_, res) => {
    res.status(200).json([
        {
            path: '/people',
            description: 'It gives list of all the array value'
        },
        {
            path: '/people/:id',
            description: 'It gives all the people with his uniqueId'
        },
        {
            path: '/people/:name',
            description: 'It gives all the people with his name'
        },
        {
            path: '/people/:age',
            description: 'It give all the people with his age'
        },
        {
            path: '/people/:productselling',
            description: 'It gives all the productselling price'
        }
    ]);
};

exports.show = async (req, res, next) => {
    try{
        res.status(200).json(people);
    }catch (error) {
        next(error);
    }
};

// exports.search = async (req, res, next) => {
//         try{
//             const people = await person.search(req.params.uniqueID);
//             res.status(200).json(people);
//         }catch (error) {
//             next(error);
//         }
//     };
//  
// exports.search = async (req, res, next) => {
//     try{
//         const people = await person.search(req.params.name);
//         res.status(200).json(people);
//     }catch (error){
//         next(error);    //     }
// };
//
//     exports.search = async (req, res, next) => {
//         try{
//             const people = await person.search(req.params.age);
//             res.status(200).json(people);
//         }catch (error){
//             next(error);
//         }
//     };
//
//     exports.search = async (req, res, next) => {
//     try{
//         const people = await person.search(req.params.productselling);
//         res.status(200).json(people);
//     }catch (error){
//         next(error);
//     }
// };

exports.search = async (req, res, next) => {
    try{
        res.status(200).json(people);
    }catch (error) {
        next(error);
    }
};
