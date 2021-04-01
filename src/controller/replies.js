const models = require('../db/models')
const repply = models.Replies
const posts = models.Posts

exports.indexAlrt = async (req, res) => {
    return res.status(200).json([
        {
            msg: 'you want to repply ?',
            msgReturn: 'i am sorry comrede',
            msgCoution: 'you can try to repply this threads'
        }
    ]);
}

exports.repThreads = async (req, res) => {
    let id = req.params.id
    const getThreads = await posts.findOne({
        where: {
            id
        }
    })

    const data_reply = {
        like: 0,
        share: 0,
        desc: req.body.desc,
        UserId: req.user.id,
        PostId: getThreads.id
    }
    
    if (!getThreads) {
        console.log(err.toString());
        res.status(500).send({
            status: 402,
            msg: `data not found`
        });
    } else {
        repply.create(data_reply)
            .then( submit => res.status(201)
                .send({
                    status: 201,
                    msg: `reply success`,
                    datas: submit
                })
            )
    }

}