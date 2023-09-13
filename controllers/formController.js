

function formController (req, res) {


    const name = req.body.name
    const location = req.body.location
    const occupation = req.body.occupation
    const experience = req.body.experience
    const education = req.body.education


    const varObject = {
        name,
        location, 
        occupation,
        experience,
        education
    }
    
    res.render('index', varObject)
}

module.exports = formController