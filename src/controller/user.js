exports.indexTry = async (req, res) => {
    return res.status(200).json([
        {
            name: 'alone',
            companies: 'shadow',
            role: 'assasin',
            motivation: 'not to be true'
        }
    ]);
}