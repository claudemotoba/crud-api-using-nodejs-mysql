const model = require('../model/model')
const { check, validationResult } = require('express-validator');

exports.validation = [
    //validation prenom
    check('prenom')
        .exists()
        .withMessage('Ce champ est obligatoire')
        .isString()
        .withMessage('Le prenom ne doit pas contenir des chiffres')
        .isLength({ min: 4, max: 25 })
        .withMessage('Le nom doit avoir au minimun 4 caracteres'),

    //Validation nom
    check('nom')
        .exists()
        .withMessage('Ce champ est obligatoire')
        .isString()
        .withMessage('Le nom ne doit pas contenir des chiffres')
        .isLength({ min: 3, max: 25 })
        .withMessage('Le nom  doit avoir au minimun 3 caracteres'),

    //Validation nom
    check('email')
        .exists()
        .withMessage('Ce champ est obligatoire')
        .isString()
        .withMessage('Le nom ne doit pas contenir des chiffres')
        .isLength({ min: 10, max: 40 })
        .withMessage("L'email  doit avoir au minimun 10 caracteres"),

    //Validation pays
    check('pays')
        .exists()
        .withMessage('Ce champ est obligatoire'),

    //Validation tel
    check('tel')
        .exists()
        .withMessage('Ce champ est obligatoire')
        .isInt()
        .withMessage('Le numero de telephone ne doit pas contenir des lettres')
        .isLength({ min: 10, max: 14 })
        .withMessage("Le numero de telephone doit avoir au minimun 10 caracteres"),

    //Validation poste
    check('id_postes')
        .exists()
        .withMessage('Ce champ est obligatoire'),

    //Validation statut marital
    check('id_statut')
        .exists()
        .withMessage('Ce champ est obligatoire')
]

exports.ListesUsers = async (req, res) => {
    try {
        const result = await model.listes()
        res.send(result);
        
    } catch (error) {
        throw error
    }
}


exports.unUtilisateur = async (req, res) => {
    try {
        const id = req.body.id
        const user = await model.unEmploye(id)
        return res.send(user)
        
    } catch (error) {
        throw error
    }
}

exports.ajouterUser = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.json( {
                data: req.body,
                errors: errors.array()             
            })
            //return res.status(422).send({ listErreur: errors.array() });
        } else {
            model.ajouter(req.body, (error, result) => {
                console.log(req.body);
                if (error) throw error
                
                
            })
        }
       
    } catch (e) {
        return next(e)
    }
}